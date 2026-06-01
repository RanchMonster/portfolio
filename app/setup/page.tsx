export default function Setup() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12">
      <div className="text-text-muted mb-4 animate-[fadeInUp_0.5s_ease-out] font-mono text-sm">
        <span className="text-accent-green">❯</span> cat /home/joshua/setup.txt
      </div>

      <h1 className="text-accent-blue mb-6 animate-[fadeInUp_0.5s_ease-out] text-3xl font-bold">
        Home Setup
      </h1>

      {/* Hardware Section */}
      <section className="mb-10 animate-[fadeInUp_0.6s_ease-out]">
        <p className="text-text-muted mb-2 font-mono text-xs">// Machine Specs</p>
        <h2 className="text-text-primary mb-4 font-mono text-xl font-bold">Hardware</h2>
        <div className="bg-bg-secondary border-border space-y-2 rounded-lg border p-5 font-mono text-sm">
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">CPU</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">AMD Ryzen 5 5600X</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">GPU</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">NVIDIA GeForce RTX 3060 Lite Hash Rate</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">RAM</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">32 GiB </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Storage</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">256 GiB SSD</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Motherboard</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">ASUS TUF GAMING X570-PLUS (WI-FI)</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">OS</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Linux Mint 22.3</span>
            </div>
          </div>
          {/* <div className="flex items-start gap-3"> */}
          {/*    <span className="text-accent-green text-xs mt-0.5">$</span> */}
          {/*    <div> */}
          {/*       <span className="text-accent-purple">Kernel</span> */}
          {/*       <span className="text-text-muted">: </span> */}
          {/*       <span className="text-text-primary">Linux 6.8.0-124-generic</span> */}
          {/*    </div> */}
          {/* </div> */}
        </div>
      </section>

      {/* Peripherals Section */}
      <section className="mb-10 animate-[fadeInUp_0.7s_ease-out]">
        <p className="text-text-muted mb-2 font-mono text-xs">// Desk Setup</p>
        <h2 className="text-text-primary mb-4 font-mono text-xl font-bold">Peripherals</h2>
        <div className="bg-bg-secondary border-border space-y-2 rounded-lg border p-5 font-mono text-sm">
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Monitor</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">DELL S2522HG — 1920×1080 @ 240 Hz</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Keyboard</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Mode Envoy</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Mouse</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">G305</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Headphones</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Alienware</span>
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="mb-10 animate-[fadeInUp_0.8s_ease-out]">
        <p className="text-text-muted mb-2 font-mono text-xs">// Dev Environment</p>
        <h2 className="text-text-primary mb-4 font-mono text-xl font-bold">Software</h2>
        <div className="bg-bg-secondary border-border space-y-2 rounded-lg border p-5 font-mono text-sm">
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Editor</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Neovim</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Terminal</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">tmux (next-3.6)</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Shell</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Zsh</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">DE</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Cinnamon</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">WM</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Muffin</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">WM Theme</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Mint-Y-Dark-Purple</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">GTK Theme</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Mint-Y-Dark-Purple</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Icons</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Mint-Y-Purple</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Font</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">OpenDyslexic Nerd Font Propo (10pt)</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent-green mt-0.5 text-xs">$</span>
            <div>
              <span className="text-accent-purple">Cursor</span>
              <span className="text-text-muted">: </span>
              <span className="text-text-primary">Bibata-Modern-Classic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo placeholder */}
      {/* <section className="animate-[fadeInUp_0.9s_ease-out]"> */}
      {/*    <h2 className="text-xl font-bold text-text-primary mb-4 font-mono">Gallery</h2> */}
      {/*    <div className="bg-bg-secondary border border-border border-dashed rounded-lg p-12 text-center"> */}
      {/*       <span className="text-text-muted text-sm font-mono"> */}
      {/*          📷 setup photo goes here */}
      {/*       </span> */}
      {/*    </div> */}
      {/* </section> */}
    </main>
  );
}
