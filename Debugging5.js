const styles = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikethrough: "\x1b[9m",
};
console.log(`${styles.underline}Bold text${styles.reset}`);

// ========================================
// PROGRAM 1: Basic Color Demo
// ========================================
console.log("\n=== PROGRAM 1: Basic Color Demo ===\n");
function program1_colorDemo() {
  // ANSI color codes
  const red = "\x1b[31m";
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const blue = "\x1b[34m";
  const magenta = "\x1b[35m";
  const cyan = "\x1b[36m";
  const reset = "\x1b[0m";
  console.log(`${red}This text is RED${reset}`);
  console.log(`${green}This text is GREEN${reset}`);
  console.log(`${yellow}This text is YELLOW${reset}`);
  console.log(`${blue}This text is BLUE${reset}`);
  console.log(`${magenta}This text is MAGENTA${reset}`);
  console.log(`${cyan}This text is CYAN${reset}`);
}
program1_colorDemo();

// PROGRAM 2: Simple Logger
// ========================================
console.log("\n=== PROGRAM 2: Simple Logger ===\n");
function program2_simpleLogger() {
  // Create a simple logger with different levels
  const logger = {
    info: (msg) => console.log(`\x1b[36m[INFO]\x1b[0m ${msg}`),
    success: (msg) => console.log(`\x1b[32m[SUCCESS]\x1b[0m ${msg}`),
    warning: (msg) => console.log(`\x1b[33m[WARNING]\x1b[0m ${msg}`),
    error: (msg) => console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`),
  };
  logger.info("Application starting...");
  logger.success("Connected to database");
  logger.warning("Low memory detected");
  logger.error("Failed to load configuration");
}
program2_simpleLogger();

let come = "Hello  my name is ....";
console.log(come);
