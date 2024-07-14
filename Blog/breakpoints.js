function showBreakpoint() {
    const breakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };
  
    const width = window.innerWidth;
    let currentBreakpoint = 'xs';
  
    for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
      if (width >= minWidth) {
        currentBreakpoint = breakpoint;
      }
    }
  
    const indicator = document.getElementById('breakpoint-indicator');
    indicator.textContent = `${currentBreakpoint.toUpperCase()} (${width}px)`;
  
    // Update breakpoint bars
    const barsContainer = document.getElementById('breakpoint-bars');
    barsContainer.innerHTML = '';
  
    for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
      if (minWidth > 0) {
        const bar = document.createElement('div');
        bar.className = 'breakpoint-bar';
        bar.style.left = `${minWidth}px`;
  
        const label = document.createElement('div');
        label.className = 'breakpoint-label';
        label.textContent = breakpoint;
        label.style.left = `${minWidth}px`;
  
        barsContainer.appendChild(bar);
        barsContainer.appendChild(label);
      }
    }
  }
  
  // Show breakpoint on load and resize
  window.addEventListener('load', showBreakpoint);
  window.addEventListener('resize', showBreakpoint);