"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Backgrounds & Decorative
import { GridPattern } from "@/components/backgrounds";
import { GradientText, Tag, TagGroup, PulseRing } from "@/components/decorative";
import { GlowText, GlowBox, NeonLine } from "@/components/glow";

// Layout components
import { TerminalBox, CommandLine } from "@/components/terminal-box";
import { Modal } from "@/components/modal";

// Primitives
import { Badge } from "@/primitives/badge";
import { Button } from "@/primitives/button";
import { Led } from "@/primitives/led";
import { Separator } from "@/primitives/separator";
import { Tooltip } from "@/primitives/tooltip";
import { Skeleton } from "@/primitives/skeleton";
import { Input } from "@/primitives/input";

// Components
import { AnimateIn, Stagger } from "@/components/animate-in";
import { Typewriter } from "@/components/typewriter";
import { CountUp } from "@/components/count-up";
import { Avatar, AvatarGroup } from "@/components/avatar";
import { KpiCard } from "@/components/kpi-card";
import { Sparkline } from "@/components/sparkline";
import { Donut, Gauge } from "@/components/donut";
import { HeatMap, MiniBarChart } from "@/components/charts";
import { DataList } from "@/components/data-list";
import { LogViewer } from "@/components/log-viewer";
import type { LogLine } from "@/components/log-viewer";
import { Timeline } from "@/components/timeline";
import { StatusDot, StatusBadge } from "@/components/status";
import { Alert } from "@/components/alert";
import { ProgressBar } from "@/components/progress-bar";
import { Spinner, Kbd, Divider, Mono } from "@/components/misc";
import { ToastStack, useToast } from "@/components/toast";
import { Breadcrumb, Stepper, NotificationBell } from "@/components/navigation";
import { Dropdown } from "@/components/dropdown";
import { Switch } from "@/components/switch";
import { Slider } from "@/components/slider";
import { ToggleGroup } from "@/components/toggle-group";
import { Checkbox, Select } from "@/components/form-elements";
import { RippleButton } from "@/components/ripple-button";

/* ─── Types ─────────────────────────────────────────────────── */

type TabId = "overview" | "components" | "charts" | "logs";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview",   label: "OVERVIEW"    },
  { id: "components", label: "COMPONENTS"  },
  { id: "charts",     label: "CHARTS"      },
  { id: "logs",       label: "LOGS"        },
];

/* ─── Helpers ────────────────────────────────────────────────── */

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeSpark(len = 24, base = 55, variance = 18): number[] {
  let v = base;
  return Array.from({ length: len }, () => {
    v = Math.max(8, Math.min(92, v + (Math.random() - 0.45) * variance));
    return Math.round(v);
  });
}

/* ─── Static data ────────────────────────────────────────────── */

const HEAT_DATA = [
  [0.1, 0.4, 0.7, 0.3, 0.9, 0.6],
  [0.5, 0.2, 0.8, 0.6, 0.1, 0.7],
  [0.3, 0.9, 0.4, 0.7, 0.5, 0.2],
  [0.8, 0.1, 0.6, 0.2, 0.4, 0.9],
  [0.2, 0.6, 0.3, 0.8, 0.7, 0.1],
];

const BAR_DATA = [
  { label: "Mon", value: 1240 },
  { label: "Tue", value: 1850 },
  { label: "Wed", value: 1620 },
  { label: "Thu", value: 2100 },
  { label: "Fri", value: 1780 },
  { label: "Sat", value: 890  },
  { label: "Sun", value: 640  },
];

const INITIAL_LOGS: LogLine[] = [
  { timestamp: "18:00:01", level: "info",    message: "NeoTerm UI showcase initialised" },
  { timestamp: "18:00:02", level: "success", message: "WebSocket connection established" },
  { timestamp: "18:00:03", level: "info",    message: "Loading component registry…" },
  { timestamp: "18:00:04", level: "debug",   message: "Mounting 42 components" },
  { timestamp: "18:00:05", level: "success", message: "All components registered successfully" },
  { timestamp: "18:00:07", level: "info",    message: "Starting live data simulation" },
  { timestamp: "18:00:08", level: "warn",    message: "Rate limit approaching: 890/1000 req/min" },
  { timestamp: "18:00:09", level: "info",    message: "Cache warmed up: 2.3ms average" },
  { timestamp: "18:00:10", level: "debug",   message: "Heartbeat OK — latency 14ms" },
  { timestamp: "18:00:12", level: "error",   message: "Retry #1: upstream timeout on /api/feed" },
  { timestamp: "18:00:13", level: "warn",    message: "CPU spike detected: 89% for 2s" },
  { timestamp: "18:00:14", level: "info",    message: "Worker pool scaled: 4 → 8 threads" },
  { timestamp: "18:00:15", level: "success", message: "Upstream recovered — resuming normal ops" },
];

const LOG_POOL: LogLine[] = [
  { level: "info",    message: "Heartbeat OK — latency 12ms" },
  { level: "debug",   message: "GC cycle complete: freed 128 MB" },
  { level: "info",    message: "Request routed to replica-2" },
  { level: "success", message: "Deploy pipeline: step 3/4 passed" },
  { level: "warn",    message: "Slow query detected: 340ms on users table" },
  { level: "info",    message: "Auth token refreshed for session-88a3" },
  { level: "debug",   message: "Cache hit rate: 94.2%" },
  { level: "error",   message: "Failed to parse response: unexpected token" },
  { level: "info",    message: "New connection from 10.0.0.14" },
  { level: "success", message: "Backup completed: 4.2 GB → s3://neoterm-bkp" },
  { level: "warn",    message: "Memory pressure: 82% heap utilised" },
  { level: "debug",   message: "Thread pool: 6/8 active workers" },
  { level: "info",    message: "Rate limit window reset" },
  { level: "info",    message: "Scheduled task: metrics aggregation complete" },
  { level: "error",   message: "Circuit breaker OPEN on payment-service" },
  { level: "success", message: "Circuit breaker CLOSED — payment-service recovered" },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function ShowcasePage() {
  const [activeTab, setActiveTab]   = useState<TabId>("overview");
  const [time, setTime]             = useState("");
  const [sparkData, setSparkData]   = useState<number[]>(() => makeSpark());
  const [logs, setLogs]             = useState<LogLine[]>(INITIAL_LOGS);
  const [logPtr, setLogPtr]         = useState(0);
  const [logFilter, setLogFilter]   = useState("all");

  // Form state
  const [sliderVal, setSliderVal]   = useState(68);
  const [switchOn, setSwitchOn]     = useState(true);
  const [checkboxOn, setCheckboxOn] = useState(false);
  const [toggle, setToggle]         = useState("b");
  const [modalOpen, setModalOpen]   = useState(false);
  const [step, setStep]             = useState(1);

  // Live KPI state
  const [requests, setRequests] = useState(1242);
  const [latency, setLatency]   = useState(24);
  const [cpu, setCpu]           = useState(68);

  const { toasts, addToast, dismissToast } = useToast();

  // Clock
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Live sparkline + KPI updates
  useEffect(() => {
    const id = setInterval(() => {
      setSparkData((prev) => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        next.push(Math.max(8, Math.min(92, last + (Math.random() - 0.45) * 15)));
        return next;
      });
      setRequests((v) => Math.max(800, Math.min(2000, v + randInt(-40, 60))));
      setLatency((v)  => Math.max(8,   Math.min(120,  v + randInt(-4, 6))));
      setCpu((v)      => Math.max(20,  Math.min(95,   v + randInt(-5, 7))));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  // Live log stream
  useEffect(() => {
    const id = setInterval(() => {
      setLogPtr((ptr) => {
        const entry = LOG_POOL[ptr % LOG_POOL.length];
        const ts    = new Date().toLocaleTimeString("en-GB", { hour12: false });
        setLogs((prev) => {
          const next = [...prev, { ...entry, timestamp: ts }];
          return next.length > 100 ? next.slice(-100) : next;
        });
        return ptr + 1;
      });
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const filteredLogs = logFilter === "all"
    ? logs
    : logs.filter((l) => l.level === logFilter);

  const cpuTrend: "up" | "down" | "flat" = cpu > 75 ? "up" : cpu < 40 ? "down" : "flat";

  /* ─── Render ────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-background font-mono flex flex-col">
      {/* ════════════════════════════ TOP BAR ════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 h-12 border-b border-border bg-background/95 backdrop-blur flex items-center justify-between px-4 gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
          </div>
          <Link href="/" className="text-neon font-bold text-xs tracking-widest hover:opacity-80 transition-opacity">
            NEOTERM UI
          </Link>
          <span className="text-muted-foreground/30 text-xs hidden sm:block">›</span>
          <span className="text-muted-foreground text-[10px] hidden sm:block tracking-wider">SHOWCASE</span>
        </div>

        {/* Tabs */}
        <nav className="flex items-center gap-0.5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 text-[10px] font-bold tracking-wider rounded transition-all ${
                activeTab === tab.id
                  ? "text-neon bg-neon/10 border border-neon/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Status */}
        <div className="flex items-center gap-3 text-[10px] text-muted-foreground shrink-0">
          <div className="flex items-center gap-1.5">
            <Led color="green" pulse />
            <span className="text-neon hidden sm:block">LIVE</span>
          </div>
          <span className="hidden sm:block tabular-nums">{time}</span>
          <Badge variant="outline" className="text-[9px]">v0.1.0</Badge>
          <Link href="/docs" className="hover:text-neon transition-colors hidden md:block">DOCS</Link>
        </div>
      </header>

      {/* ════════════════════════════ CONTENT ════════════════════════════ */}
      <main className="flex-1 pt-12 overflow-hidden">

        {/* ──────────────────── OVERVIEW ──────────────────── */}
        {activeTab === "overview" && (
          <div className="p-4 md:p-6 space-y-4 max-h-[calc(100vh-3rem)] overflow-y-auto">
            {/* KPI row */}
            <AnimateIn direction="down" duration={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <KpiCard
                  label="Requests / sec"
                  value={requests.toLocaleString()}
                  change={12.5}
                  trend="up"
                  sparkData={sparkData}
                  sparkColor="var(--neon)"
                />
                <KpiCard
                  label="Avg Latency"
                  value={`${latency}ms`}
                  change={-8.3}
                  trend="down"
                  sparkData={sparkData.map((v) => 100 - v)}
                  sparkColor="var(--cyan)"
                />
                <KpiCard
                  label="Uptime"
                  value="99.97%"
                  change={0.02}
                  trend="up"
                />
                <KpiCard
                  label="CPU Load"
                  value={`${cpu}%`}
                  change={cpu - 68}
                  trend={cpuTrend}
                  sparkData={sparkData.map((v) => Math.round(v * 0.85))}
                  sparkColor="var(--amber)"
                />
              </div>
            </AnimateIn>

            {/* Traffic + System Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <AnimateIn direction="left" duration={400} className="md:col-span-2">
                <TerminalBox
                  title="traffic · live"
                  headerExtra={
                    <div className="flex items-center gap-1.5">
                      <Led color="green" pulse />
                      <span className="text-[9px] text-neon/60">streaming</span>
                    </div>
                  }
                >
                  <div className="p-3">
                    <Sparkline data={sparkData} width={500} height={80} color="var(--neon)" fill />
                  </div>
                </TerminalBox>
              </AnimateIn>

              <AnimateIn direction="right" duration={400}>
                <TerminalBox title="system · status">
                  <div className="p-3 space-y-2">
                    {[
                      { label: "API Gateway",   status: "success" as const },
                      { label: "Database",       status: "success" as const },
                      { label: "Cache Layer",    status: "warning" as const },
                      { label: "Queue Service",  status: "success" as const },
                      { label: "Auth Service",   status: "info"    as const },
                    ].map((svc) => (
                      <div key={svc.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <StatusDot status={svc.status} />
                          <span className="text-[11px]">{svc.label}</span>
                        </div>
                        <StatusBadge status={svc.status}>
                          {svc.status === "success" ? "OK" : svc.status === "warning" ? "DEG" : "INFO"}
                        </StatusBadge>
                      </div>
                    ))}
                  </div>
                </TerminalBox>
              </AnimateIn>
            </div>

            {/* Resource usage */}
            <AnimateIn direction="up" duration={400}>
              <TerminalBox title="resource · usage">
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <ProgressBar value={cpu}  label={`CPU    ${cpu}%`} variant="neon" />
                    <ProgressBar value={72}   label="Memory  72%"      variant="gradient" />
                    <ProgressBar value={45}   label="Disk     45%" />
                    <ProgressBar value={88}   label="Network  88%"     variant="striped" />
                  </div>
                  <DataList
                    items={[
                      { label: "Hostname",  value: "prod-node-07"  },
                      { label: "Region",    value: "us-east-1"     },
                      { label: "OS",        value: "Linux 6.6.87"  },
                      { label: "Runtime",   value: "Node 22.22.0"  },
                      { label: "Workers",   value: "8 / 8 active"  },
                    ]}
                  />
                </div>
              </TerminalBox>
            </AnimateIn>

            {/* Timeline + Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <AnimateIn direction="left" duration={400}>
                <TerminalBox title="recent · activity">
                  <div className="p-3">
                    <Timeline
                      items={[
                        { id: "1", title: "Showcase deployed to gh-pages", status: "success", timestamp: "2m ago"  },
                        { id: "2", title: "Build pipeline passed",          status: "success", timestamp: "5m ago"  },
                        { id: "3", title: "Lint warning in dashboard.tsx",  status: "warning", timestamp: "12m ago" },
                        { id: "4", title: "Tests started (42 specs)",       status: "info",    timestamp: "18m ago" },
                        { id: "5", title: "DB migration queued",            status: "info",    timestamp: "31m ago" },
                      ]}
                    />
                  </div>
                </TerminalBox>
              </AnimateIn>

              <AnimateIn direction="right" duration={400}>
                <div className="space-y-3">
                  <Alert variant="info" title="System Notice">
                    Cache Layer operating in degraded mode — read-through fallback active.
                  </Alert>
                  <Alert variant="success" title="Deployment Complete">
                    NeoTerm UI v0.1.0 deployed to{" "}
                    <span className="text-neon font-mono">gh-pages</span> in 43s.
                  </Alert>
                  <TerminalBox title="team · online">
                    <div className="p-3 flex items-center gap-4">
                      <AvatarGroup>
                        <Avatar fallback="AX" size="sm" status="online"  />
                        <Avatar fallback="SB" size="sm" status="online"  />
                        <Avatar fallback="RC" size="sm" status="away"    />
                        <Avatar fallback="TD" size="sm" status="busy"    />
                      </AvatarGroup>
                      <div className="text-[10px] text-muted-foreground">4 members · 3 online</div>
                    </div>
                  </TerminalBox>
                </div>
              </AnimateIn>
            </div>
          </div>
        )}

        {/* ──────────────────── COMPONENTS ──────────────────── */}
        {activeTab === "components" && (
          <div className="p-4 md:p-6 space-y-4 max-h-[calc(100vh-3rem)] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

              {/* Buttons & Actions */}
              <TerminalBox title="buttons · actions">
                <div className="p-4 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Default</Button>
                    <Button size="sm" variant="secondary">Secondary</Button>
                    <Button size="sm" variant="outline">Outline</Button>
                    <Button size="sm" variant="ghost">Ghost</Button>
                    <Button size="sm" variant="destructive">Destroy</Button>
                  </div>
                  <RippleButton className="w-full text-[11px] font-mono px-4 py-2 bg-neon/10 border border-neon/30 text-neon rounded hover:bg-neon/20 transition-colors">
                    ✦ Ripple Effect — click me
                  </RippleButton>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      size="sm"
                      onClick={() => addToast({ title: "Success", description: "Action completed!", status: "success" })}
                    >
                      Fire Toast ↗
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setModalOpen(true)}>
                      Open Modal
                    </Button>
                  </div>
                </div>
              </TerminalBox>

              {/* Badges, Tags & Indicators */}
              <TerminalBox title="badges · tags · indicators">
                <div className="p-4 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge>Default</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="destructive">Error</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center">
                    {(["green", "red", "amber", "cyan", "magenta", "off"] as const).map((c) => (
                      <div key={c} className="flex items-center gap-1">
                        <Led color={c} pulse={c === "green" || c === "amber"} />
                        <span className="text-[9px] text-muted-foreground">{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 items-center">
                    <StatusDot status="success" />
                    <span className="text-[10px]">online</span>
                    <StatusDot status="warning" />
                    <span className="text-[10px]">degraded</span>
                    <StatusDot status="error" />
                    <span className="text-[10px]">down</span>
                  </div>
                  <TagGroup>
                    <Tag>react</Tag>
                    <Tag>next.js</Tag>
                    <Tag>tailwind</Tag>
                    <Tag onRemove={() => {}}>removable</Tag>
                  </TagGroup>
                </div>
              </TerminalBox>

              {/* Form Controls */}
              <TerminalBox title="form · controls">
                <div className="p-4 space-y-3">
                  <Input placeholder="Search components…" className="text-xs h-8" />
                  <Select
                    options={[
                      { value: "dark",   label: "Dark mode"  },
                      { value: "light",  label: "Light mode" },
                      { value: "system", label: "System"     },
                    ]}
                    className="text-xs"
                  />
                  <div className="flex flex-col gap-2">
                    <Switch checked={switchOn} onCheckedChange={setSwitchOn} label="Neon glow effects" />
                    <Checkbox checked={checkboxOn} onChange={setCheckboxOn} label="Enable animations" />
                  </div>
                  <div>
                    <Slider value={sliderVal} onChange={setSliderVal} min={0} max={100} />
                    <p className="text-[9px] text-muted-foreground mt-1">Intensity: {sliderVal}%</p>
                  </div>
                  <ToggleGroup
                    items={[
                      { value: "a", label: "Small"  },
                      { value: "b", label: "Medium" },
                      { value: "c", label: "Large"  },
                    ]}
                    value={toggle}
                    onChange={setToggle}
                    variant="neon"
                  />
                </div>
              </TerminalBox>

              {/* Data Visualization */}
              <TerminalBox title="data · visualization">
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-4 flex-wrap">
                    <div className="text-center">
                      <Donut value={72} size={64} />
                      <p className="text-[9px] text-muted-foreground mt-1">Usage 72%</p>
                    </div>
                    <div className="text-center">
                      <Gauge value={85} size={72} />
                      <p className="text-[9px] text-muted-foreground mt-1">Score 85</p>
                    </div>
                    <div className="flex-1 min-w-[100px]">
                      <Sparkline data={sparkData.slice(-12)} width={110} height={38} color="var(--cyan)" fill />
                      <p className="text-[9px] text-muted-foreground mt-1">Requests</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <ProgressBar value={cpu} />
                    <ProgressBar value={72} variant="neon" />
                    <ProgressBar value={45} variant="gradient" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Spinner size="sm" />
                    <Spinner size="md" color="cyan" />
                    <Skeleton className="h-3 w-20 rounded" />
                    <Skeleton className="h-3 w-12 rounded" />
                    <Skeleton className="h-6 w-6 rounded-full" />
                  </div>
                </div>
              </TerminalBox>

              {/* Navigation */}
              <TerminalBox title="navigation · wayfinding">
                <div className="p-4 space-y-3">
                  <Breadcrumb
                    items={[
                      { label: "Home",       href: "/"          },
                      { label: "Showcase",   href: "/showcase"  },
                      { label: "Components"                      },
                    ]}
                  />
                  <Stepper steps={["Install", "Import", "Ship"]} current={step} />
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))}>← Prev</Button>
                    <Button size="sm" variant="ghost" onClick={() => setStep((s) => Math.min(2, s + 1))}>Next →</Button>
                  </div>
                  <div className="flex gap-2 items-center">
                    <NotificationBell count={3} />
                    <Dropdown
                      trigger={<Button size="sm" variant="outline">Actions ▾</Button>}
                      items={[
                        { id: "view",  label: "View Docs",   onSelect: () => {}                                                  },
                        { id: "copy",  label: "Copy Code",   onSelect: () => addToast({ title: "Copied!", status: "success" })  },
                        "separator",
                        { id: "reset", label: "Reset Demo",  onSelect: () => {}                                                  },
                      ]}
                    />
                  </div>
                </div>
              </TerminalBox>

              {/* Typography & Misc */}
              <TerminalBox title="misc · typography · primitives">
                <div className="p-4 space-y-3">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <Kbd>⌘</Kbd><Kbd>K</Kbd>
                    <span className="text-[10px] text-muted-foreground mx-1">command palette</span>
                    <Kbd>⌃</Kbd><Kbd>C</Kbd>
                    <span className="text-[10px] text-muted-foreground">cancel</span>
                  </div>
                  <div className="space-y-1">
                    <GlowText color="green"   className="text-sm font-bold">Green neon glow</GlowText>
                    <GlowText color="cyan"    className="text-sm font-bold">Cyan neon glow</GlowText>
                    <GlowText color="magenta" className="text-sm font-bold">Magenta neon glow</GlowText>
                    <GradientText variant="fire" className="text-sm font-bold">Fire gradient text</GradientText>
                  </div>
                  <Mono>{"const ui = require(\"neoterm-ui\");"}</Mono>
                  <Tooltip content="Tooltips via Radix UI — keyboard accessible" side="top">
                    <span className="text-[10px] text-cyan underline decoration-dotted cursor-help">
                      Hover for tooltip
                    </span>
                  </Tooltip>
                  <Divider label="SECTION BREAK" />
                  <AvatarGroup>
                    <Avatar fallback="AX" size="sm" status="online"  />
                    <Avatar fallback="SB" size="sm" status="away"    />
                    <Avatar fallback="RC" size="sm" status="busy"    />
                    <Avatar fallback="TD" size="sm" status="online"  />
                  </AvatarGroup>
                </div>
              </TerminalBox>
            </div>

            {/* Alerts + Terminal rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TerminalBox title="alerts · feedback">
                <div className="p-4 space-y-2">
                  <Alert variant="info"    title="Info">WebSocket connection established on port 4000.</Alert>
                  <Alert variant="success" title="Success">All 42 test suites passed in 1.2s.</Alert>
                  <Alert variant="warning" title="Warning">Rate limit at 89% — consider throttling requests.</Alert>
                  <Alert variant="error"   title="Error" dismissible>Circuit breaker OPEN on upstream payments API.</Alert>
                </div>
              </TerminalBox>
              <TerminalBox title="terminal · code">
                <CommandLine command="npm install neoterm-ui" />
                <CommandLine command="npm run dev"   output="▶ Ready on http://localhost:4000"    />
                <CommandLine command="npm run build" output="✓ Compiled in 3.6s (42 modules)"    />
                <CommandLine command="npm run test"  output="✓ 42 passed · 0 failed · 1.2s"      />
              </TerminalBox>
            </div>

            {/* Animation showcase */}
            <TerminalBox title="animation · motion">
              <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest">Typewriter</p>
                  <TerminalBox title="boot.log">
                    <div className="px-3 py-2">
                      <Typewriter text="Initialising NeoTerm UI… all systems nominal." speed={40} className="text-[11px] text-neon" />
                    </div>
                  </TerminalBox>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest">CountUp</p>
                  <div className="flex flex-col gap-2">
                    <div className="term-panel px-3 py-2 text-center">
                      <CountUp to={42069} duration={2000} className="text-2xl font-black text-neon" />
                      <p className="text-[9px] text-muted-foreground">requests served</p>
                    </div>
                    <div className="term-panel px-3 py-2 text-center">
                      <CountUp to={99.97} duration={1500} decimals={2} className="text-xl font-black text-cyan" />
                      <span className="text-[9px] text-cyan">%</span>
                      <p className="text-[9px] text-muted-foreground">uptime</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest">Stagger</p>
                  <Stagger stagger={80} className="flex flex-wrap gap-1.5">
                    {["up", "down", "left", "right", "scale", "fade"].map((d) => (
                      <Badge key={d} variant="outline" className="text-[9px]">{d}</Badge>
                    ))}
                  </Stagger>
                </div>
              </div>
            </TerminalBox>
          </div>
        )}

        {/* ──────────────────── CHARTS ──────────────────── */}
        {activeTab === "charts" && (
          <div className="p-4 md:p-6 space-y-4 max-h-[calc(100vh-3rem)] overflow-y-auto">
            {/* Live sparkline */}
            <TerminalBox
              title="request · volume · live"
              headerExtra={
                <div className="flex items-center gap-2">
                  <Led color="green" pulse />
                  <Badge variant="outline" className="text-[9px]">
                    {requests.toLocaleString()} req/s
                  </Badge>
                </div>
              }
            >
              <div className="p-4">
                <Sparkline data={sparkData} width={900} height={120} color="var(--neon)" fill />
              </div>
            </TerminalBox>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Donut */}
              <TerminalBox title="disk · utilisation">
                <div className="p-4 flex flex-col items-center gap-3">
                  <Donut value={72} size={100} />
                  <DataList
                    items={[
                      { label: "Used",  value: "720 GB" },
                      { label: "Free",  value: "280 GB" },
                      { label: "Total", value: "1 TB"   },
                    ]}
                  />
                </div>
              </TerminalBox>

              {/* Gauge */}
              <TerminalBox title="performance · score">
                <div className="p-4 flex flex-col items-center gap-3">
                  <Gauge value={85} size={110} />
                  <div className="text-center space-y-1">
                    <p className="text-2xl font-black text-neon">
                      <CountUp to={85} duration={1200} />
                    </p>
                    <p className="text-[10px] text-muted-foreground">Lighthouse score</p>
                  </div>
                </div>
              </TerminalBox>

              {/* Latency sparkline */}
              <TerminalBox title="latency · percentiles">
                <div className="p-4 space-y-3">
                  <Sparkline
                    data={sparkData.map((v) => 100 - v)}
                    width={200}
                    height={60}
                    color="var(--cyan)"
                    fill
                  />
                  <DataList
                    items={[
                      { label: "p50", value: `${latency}ms`      },
                      { label: "p95", value: `${latency * 3}ms`  },
                      { label: "p99", value: `${latency * 6}ms`  },
                    ]}
                  />
                </div>
              </TerminalBox>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TerminalBox title="daily · request · volume">
                <div className="p-4">
                  <MiniBarChart items={BAR_DATA} maxHeight={80} />
                </div>
              </TerminalBox>
              <TerminalBox title="activity · heatmap  (hour × day)">
                <div className="p-4">
                  <HeatMap data={HEAT_DATA} />
                </div>
              </TerminalBox>
            </div>

            {/* Magenta sparkline */}
            <TerminalBox title="error · rate · 24h">
              <div className="p-4">
                <Sparkline
                  data={sparkData.map((v) => Math.round(v * 0.08))}
                  width={900}
                  height={60}
                  color="var(--magenta)"
                  fill
                />
              </div>
            </TerminalBox>
          </div>
        )}

        {/* ──────────────────── LOGS ──────────────────── */}
        {activeTab === "logs" && (
          <div className="p-4 md:p-6 space-y-3 max-h-[calc(100vh-3rem)] overflow-y-auto">
            <TerminalBox
              title="system · log"
              headerExtra={
                <div className="flex items-center gap-2">
                  <Led color="green" pulse />
                  <Badge variant="outline" className="text-[9px]">{logs.length} entries</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-[9px] h-5 px-2"
                    onClick={() => setLogs(INITIAL_LOGS)}
                  >
                    clear
                  </Button>
                </div>
              }
            >
              <div className="px-3 py-2 border-b border-border/30">
                <ToggleGroup
                  items={[
                    { value: "all",     label: "ALL"  },
                    { value: "info",    label: "INFO" },
                    { value: "success", label: "OK"   },
                    { value: "warn",    label: "WARN" },
                    { value: "error",   label: "ERR"  },
                    { value: "debug",   label: "DBG"  },
                  ]}
                  value={logFilter}
                  onChange={setLogFilter}
                  variant="neon"
                />
              </div>
              <LogViewer lines={filteredLogs} maxHeight={480} autoScroll />
            </TerminalBox>

            {/* Log level counts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { label: "Info",     level: "info",    color: "text-cyan"        },
                { label: "Success",  level: "success", color: "text-neon"        },
                { label: "Warnings", level: "warn",    color: "text-amber"       },
                { label: "Errors",   level: "error",   color: "text-destructive" },
              ].map((item) => (
                <div key={item.label} className="term-panel p-3 text-center">
                  <div className={`text-2xl font-black tabular-nums ${item.color}`}>
                    {logs.filter((l) => l.level === item.level).length}
                  </div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── Modal ── */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Confirm Deployment">
        <p className="text-[11px] text-muted-foreground mb-4">
          This would deploy NeoTerm UI to production. Confirm?
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => {
              setModalOpen(false);
              addToast({ title: "Deployed!", description: "NeoTerm UI is now live 🚀", status: "success" });
            }}
          >
            Deploy to Production
          </Button>
        </div>
      </Modal>

      <ToastStack toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
