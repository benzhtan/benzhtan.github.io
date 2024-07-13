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
  }
  
  // Show breakpoint on load and resize
  window.addEventListener('load', showBreakpoint);
  window.addEventListener('resize', showBreakpoint);