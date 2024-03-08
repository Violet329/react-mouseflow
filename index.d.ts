export module mouseflow {
    /**
     * Initialize Mouseflow tracking.
     * @param mfid This is the Mouseflow Website ID for your project
     */
    export function initialize(mfid: number): void;
  
    /**
     * Check if Mouseflow has been initialized
     */
    export function initialized(): boolean;
  
    /** Tag a session with a value
     * @param property
     */
    export function tag(
      property: Record<string, any>
    ): void;
  
    /**
     * Add a key:value pair to a recorded session
     * @param key
     * @param value
     */
    export function setVariable(
      key: string,
      value: string
    ): void;
  
    /**
     * Update the current page path, useful for SPA sites
     * @param currentPath
     */
    export function newPageView(
      currentPath: string,
    ): void;
  }
  