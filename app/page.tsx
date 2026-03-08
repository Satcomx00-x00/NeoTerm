"use client";

import { useState } from "react";

// Primitives
import { Badge } from "@/primitives/badge";
import { Button } from "@/primitives/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/primitives/card";
import { Input } from "@/primitives/input";
import { Led } from "@/primitives/led";
import { Separator } from "@/primitives/separator";
import { Skeleton } from "@/primitives/skeleton";
import { Tooltip } from "@/primitives/tooltip";

// Components
import { AnimateIn, Stagger } from "@/components/animate-in";
import { GlowText, GlowBox, NeonLine } from "@/components/glow";
import { RippleButton } from "@/components/ripple-button";
import { Typewriter } from "@/components/typewriter";
import { CountUp } from "@/components/count-up";
import { ProgressBar } from "@/components/progress-bar";
import { Sparkline } from "@/components/sparkline";
import { Avatar, AvatarGroup } from "@/components/avatar";
import { KpiCard } from "@/components/kpi-card";
import { StatusDot, StatusBadge } from "@/components/status";
import { TerminalBox, CodeBlock, CommandLine } from "@/components/terminal-box";
import { ToggleGroup } from "@/components/toggle-group";
import { Timeline } from "@/components/timeline";
import { ToastStack, useToast } from "@/components/toast";
import { Switch } from "@/components/switch";
import { Slider } from "@/components/slider";
import { Modal } from "@/components/modal";
import { Donut, Gauge } from "@/components/donut";
import { DataList } from "@/components/data-list";
import { Kbd, Spinner, EmptyState, Divider, Mono } from "@/components/misc";
import { HeatMap, MiniBarChart } from "@/components/charts";
import { NotificationBell, Breadcrumb, Stepper } from "@/components/navigation";
import { Tag, TagGroup, GradientText, PulseRing } from "@/components/decorative";
import { LogViewer } from "@/components/log-viewer";
import { Dropdown } from "@/components/dropdown";
import { MatrixRain, GridPattern } from "@/components/backgrounds";
import { Textarea, Select, Checkbox } from "@/components/form-elements";
import { Alert, Callout } from "@/components/alert";

/* ──────────────────────────── helpers ──────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold text-neon glow-green tracking-widest uppercase">{title}</h2>
      <NeonLine />
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Row({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-wrap items-center gap-3 ${className}`}>{children}</div>;
}

const sparkData = [
  { value: 10 }, { value: 25 }, { value: 18 }, { value: 40 },
  { value: 32 }, { value: 55 }, { value: 48 }, { value: 60 },
  { value: 52 }, { value: 70 }, { value: 65 }, { value: 80 },
];

const heatData = [
  [0.1, 0.4, 0.7, 0.3, 0.9],
  [0.5, 0.2, 0.8, 0.6, 0.1],
  [0.3, 0.9, 0.4, 0.7, 0.5],
  [0.8, 0.1, 0.6, 0.2, 0.4],
];

const barData = [
  { label: "Mon", value: 30 },
  { label: "Tue", value: 55 },
  { label: "Wed", value: 42 },
  { label: "Thu", value: 78 },
  { label: "Fri", value: 61 },
];

const logLines = [
  { timestamp: "12:00:01", level: "info" as const, message: "Engine started" },
  { timestamp: "12:00:02", level: "info" as const, message: "Connected to market feed" },
  { timestamp: "12:00:03", level: "warn" as const, message: "Latency spike: 320ms" },
  { timestamp: "12:00:05", level: "error" as const, message: "Order rejected: insufficient margin" },
  { timestamp: "12:00:06", level: "debug" as const, message: "Recalculating position delta" },
  { timestamp: "12:00:08", level: "info" as const, message: "Position rebalanced" },
];

/* ──────────────────────────── page ──────────────────────────── */

export default function ShowcasePage() {
  const [toggle, setToggle] = useState("a");
  const [switchOn, setSwitchOn] = useState(true);
  const [sliderVal, setSliderVal] = useState(65);
  const [modalOpen, setModalOpen] = useState(false);
  const { toasts, addToast, dismissToast } = useToast();
  const [step, setStep] = useState(1);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative background */}
      <GridPattern className="fixed inset-0 opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Header */}
        <AnimateIn direction="down" duration={600}>
          <header className="text-center space-y-3">
            <GradientText variant="neon" className="text-3xl font-black tracking-tight">
              NeoTerm UI
            </GradientText>
            <p className="text-[11px] text-muted-foreground max-w-md mx-auto">
              A terminal-inspired component library — CRT aesthetics, neon glow, monospace typography.
            </p>
            <Row className="justify-center">
              <Badge>v0.1.0</Badge>
              <Badge variant="success">MIT</Badge>
              <Badge variant="warning">React 19</Badge>
            </Row>
          </header>
        </AnimateIn>

        <NeonLine />

        {/* Typewriter */}
        <Section title="Typewriter">
          <TerminalBox title="boot.log">
            <Typewriter text="Initialising NeoTerm UI…  all systems nominal." speed={40} />
          </TerminalBox>
        </Section>

        {/* Buttons */}
        <Section title="Buttons & Ripple">
          <Row>
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </Row>
          <Row>
            <RippleButton className="bg-neon/20 border border-neon text-neon px-4 py-1.5 text-[11px]">
              Ripple Effect
            </RippleButton>
          </Row>
        </Section>

        {/* Glow */}
        <Section title="Glow & Neon">
          <Row>
            <GlowText color="green" className="text-lg font-bold">Green Glow</GlowText>
            <GlowText color="cyan" className="text-lg font-bold">Cyan Glow</GlowText>
            <GlowText color="magenta" className="text-lg font-bold">Magenta</GlowText>
            <GlowText color="amber" className="text-lg font-bold">Amber</GlowText>
          </Row>
          <Row>
            <GlowBox color="green" pulse className="px-4 py-2 text-[11px]">Pulsing green box</GlowBox>
            <GlowBox color="cyan" className="px-4 py-2 text-[11px]">Static cyan box</GlowBox>
          </Row>
          <Row>
            <GradientText variant="neon">Neon gradient</GradientText>
            <GradientText variant="fire">Fire gradient</GradientText>
            <GradientText variant="ice">Ice gradient</GradientText>
          </Row>
        </Section>

        {/* LEDs & Status */}
        <Section title="LEDs & Status">
          <Row>
            <Led color="green" pulse /> <Led color="red" /> <Led color="amber" pulse />
            <Led color="cyan" /> <Led color="magenta" /> <Led color="off" />
          </Row>
          <Row>
            <StatusDot status="online" /> online
            <StatusDot status="warning" /> warning
            <StatusDot status="error" /> error
            <StatusDot status="offline" /> offline
          </Row>
          <Row>
            <StatusBadge status="online">Connected</StatusBadge>
            <StatusBadge status="warning">Degraded</StatusBadge>
            <StatusBadge status="error">Down</StatusBadge>
          </Row>
          <Row>
            <PulseRing color="var(--neon)" size={24} />
            <PulseRing color="var(--cyan)" size={24} />
            <PulseRing color="var(--magenta)" size={24} />
          </Row>
        </Section>

        {/* Badges & Tags */}
        <Section title="Badges & Tags">
          <Row>
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </Row>
          <Row>
            <Tag>react</Tag>
            <Tag onRemove={() => {}}>removable</Tag>
            <TagGroup>
              <Tag>next.js</Tag>
              <Tag>tailwind</Tag>
              <Tag>typescript</Tag>
            </TagGroup>
          </Row>
        </Section>

        {/* Animations */}
        <Section title="Animations">
          <Stagger stagger={100} className="flex flex-wrap gap-2">
            {["up", "down", "left", "right", "scale"].map((d) => (
              <Badge key={d} variant="outline">{`animate-in-${d}`}</Badge>
            ))}
          </Stagger>
          <Row>
            <div className="text-[11px] text-muted-foreground">
              CountUp: <CountUp to={42069} duration={2000} className="text-neon font-bold text-base" />
            </div>
            <Spinner size="sm" />
            <Spinner size="md" color="cyan" />
          </Row>
        </Section>

        {/* Progress */}
        <Section title="Progress Bars">
          <ProgressBar value={75} label="Default" />
          <ProgressBar value={60} variant="neon" label="Neon" />
          <ProgressBar value={45} variant="gradient" label="Gradient" />
          <ProgressBar value={88} variant="striped" label="Striped" />
        </Section>

        {/* Avatars */}
        <Section title="Avatars">
          <Row>
            <Avatar fallback="AB" size="sm" status="online" />
            <Avatar fallback="CD" size="md" status="away" />
            <Avatar fallback="EF" size="lg" status="busy" />
          </Row>
          <AvatarGroup>
            <Avatar fallback="A" size="sm" />
            <Avatar fallback="B" size="sm" />
            <Avatar fallback="C" size="sm" />
            <Avatar fallback="D" size="sm" />
          </AvatarGroup>
        </Section>

        {/* Charts & Data Viz */}
        <Section title="Charts & Visualization">
          <Row>
            <Card className="p-3 w-48">
              <CardHeader className="p-0 pb-2"><CardTitle className="text-[10px]">Sparkline</CardTitle></CardHeader>
              <CardContent className="p-0">
                <Sparkline data={sparkData} width={180} height={40} color="var(--neon)" fill />
              </CardContent>
            </Card>
            <Card className="p-3 w-40">
              <CardHeader className="p-0 pb-2"><CardTitle className="text-[10px]">Donut</CardTitle></CardHeader>
              <CardContent className="p-0 flex justify-center">
                <Donut value={72} size={60} />
              </CardContent>
            </Card>
            <Card className="p-3 w-40">
              <CardHeader className="p-0 pb-2"><CardTitle className="text-[10px]">Gauge</CardTitle></CardHeader>
              <CardContent className="p-0 flex justify-center">
                <Gauge value={85} size={70} />
              </CardContent>
            </Card>
          </Row>
          <Row className="items-start">
            <Card className="p-3">
              <CardHeader className="p-0 pb-2"><CardTitle className="text-[10px]">Mini Bar Chart</CardTitle></CardHeader>
              <CardContent className="p-0">
                <MiniBarChart items={barData} maxHeight={50} />
              </CardContent>
            </Card>
            <Card className="p-3">
              <CardHeader className="p-0 pb-2"><CardTitle className="text-[10px]">Heat Map</CardTitle></CardHeader>
              <CardContent className="p-0">
                <HeatMap data={heatData} />
              </CardContent>
            </Card>
          </Row>
        </Section>

        {/* KPI Cards */}
        <Section title="KPI Cards">
          <div className="grid grid-cols-3 gap-3">
            <KpiCard label="Revenue" value="$42,069" trend={12.5} sparkData={sparkData} />
            <KpiCard label="Latency" value="24ms" trend={-8.3} />
            <KpiCard label="Uptime" value="99.97%" trend={0.02} />
          </div>
        </Section>

        {/* Form Elements */}
        <Section title="Form Elements">
          <Row>
            <Input placeholder="Text input…" className="w-48" />
            <Textarea placeholder="Textarea…" className="w-48" rows={2} />
          </Row>
          <Row>
            <Select
              options={[
                { value: "a", label: "Option A" },
                { value: "b", label: "Option B" },
                { value: "c", label: "Option C" },
              ]}
              className="w-48"
            />
          </Row>
          <Row>
            <Switch checked={switchOn} onChange={setSwitchOn} label="Dark mode" />
            <Checkbox label="Accept terms" />
          </Row>
          <Row>
            <div className="w-64">
              <Slider value={sliderVal} onChange={setSliderVal} min={0} max={100} />
              <p className="text-[10px] text-muted-foreground mt-1">Value: {sliderVal}</p>
            </div>
          </Row>
        </Section>

        {/* Toggle Group */}
        <Section title="Toggle Group">
          <Row>
            <ToggleGroup
              items={[
                { value: "a", label: "Alpha" },
                { value: "b", label: "Beta" },
                { value: "c", label: "Gamma" },
              ]}
              value={toggle}
              onChange={setToggle}
              variant="neon"
            />
          </Row>
        </Section>

        {/* Data List */}
        <Section title="Data List">
          <DataList
            items={[
              { label: "Protocol", value: "WebSocket" },
              { label: "Endpoint", value: "wss://api.example.com" },
              { label: "Status", value: "Connected" },
              { label: "Latency", value: "12ms" },
            ]}
          />
        </Section>

        {/* Alerts */}
        <Section title="Alerts & Callouts">
          <Alert variant="info" title="Information">This is an informational alert.</Alert>
          <Alert variant="success" title="Success">Operation completed.</Alert>
          <Alert variant="warning" title="Warning">Check your configuration.</Alert>
          <Alert variant="error" title="Error" dismissible>Something went wrong.</Alert>
          <Callout icon="💡">This is a callout block for tips and notes.</Callout>
        </Section>

        {/* Terminal Box & Code */}
        <Section title="Terminal & Code">
          <TerminalBox title="session.sh">
            <CommandLine command="bun install neoterm-ui" />
            <CommandLine command="bun run dev" output="▶ Server started on :4000" />
          </TerminalBox>
          <CodeBlock language="tsx">{`import { Button, GlowText } from "neoterm-ui";\nimport "neoterm-ui/styles";\n\nexport default function App() {\n  return <GlowText color="cyan">Hello</GlowText>;\n}`}</CodeBlock>
        </Section>

        {/* Navigation */}
        <Section title="Navigation">
          <Row>
            <Breadcrumb items={[
              { label: "Home", href: "#" },
              { label: "Components", href: "#" },
              { label: "Breadcrumb" },
            ]} />
          </Row>
          <Row>
            <Stepper steps={["Install", "Configure", "Deploy"]} current={step} />
            <div className="flex gap-1">
              <Button size="sm" variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))}>Prev</Button>
              <Button size="sm" variant="ghost" onClick={() => setStep((s) => Math.min(2, s + 1))}>Next</Button>
            </div>
          </Row>
          <Row>
            <NotificationBell count={3} />
            <Dropdown
              trigger={<Button size="sm" variant="outline">Menu ▾</Button>}
              items={[
                { id: "edit", label: "Edit", onSelect: () => {} },
                { id: "dup", label: "Duplicate", onSelect: () => {} },
                "separator",
                { id: "del", label: "Delete", onSelect: () => {}, danger: true },
              ]}
            />
          </Row>
        </Section>

        {/* Timeline */}
        <Section title="Timeline">
          <Timeline items={[
            { id: "1", title: "Deployed v0.1.0", status: "success", timestamp: "2 min ago" },
            { id: "2", title: "Build passed", status: "success", timestamp: "5 min ago" },
            { id: "3", title: "Lint warning", status: "warning", timestamp: "8 min ago" },
            { id: "4", title: "Tests started", status: "info", timestamp: "10 min ago" },
          ]} />
        </Section>

        {/* Log Viewer */}
        <Section title="Log Viewer">
          <LogViewer lines={logLines} maxHeight={160} />
        </Section>

        {/* Toasts */}
        <Section title="Toasts">
          <Row>
            <Button size="sm" onClick={() => addToast({ title: "Info", description: "Task queued.", status: "info" })}>
              Info Toast
            </Button>
            <Button size="sm" onClick={() => addToast({ title: "Success", description: "Deployed!", status: "success" })}>
              Success Toast
            </Button>
            <Button size="sm" onClick={() => addToast({ title: "Error", description: "Connection lost.", status: "error" })}>
              Error Toast
            </Button>
          </Row>
          <ToastStack toasts={toasts} onDismiss={dismissToast} />
        </Section>

        {/* Modal */}
        <Section title="Modal">
          <Button size="sm" onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Confirm Action">
            <p className="text-[11px] text-muted-foreground mb-4">Are you sure you want to proceed?</p>
            <Row>
              <Button size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button size="sm" variant="destructive" onClick={() => setModalOpen(false)}>Confirm</Button>
            </Row>
          </Modal>
        </Section>

        {/* Misc */}
        <Section title="Miscellaneous">
          <Row>
            <Kbd>⌘</Kbd><Kbd>K</Kbd>
            <Mono>monospace text</Mono>
          </Row>
          <Row>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </Row>
          <Divider label="SECTION" />
          <Tooltip text="This is a tooltip" position="top">
            <span className="text-[11px] text-cyan cursor-help underline decoration-dotted">Hover me</span>
          </Tooltip>
          <div className="relative h-8 w-40 border border-border/20 rounded overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-50" />
          </div>
        </Section>

        {/* Footer */}
        <Separator />
        <footer className="text-center text-[10px] text-muted-foreground py-6">
          NeoTerm UI · MIT License · Built with Next.js, Tailwind CSS, Radix UI
        </footer>
      </div>
    </div>
  );
}
