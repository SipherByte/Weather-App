const { exec } = require("child_process");
const commands = [
  "git add .",
  'git commit -m "Auto commit from Node.js"',
  "git push origin main"];


function runCommand(index = 0) {
  if (index >= commands.length) {
 console.log("✅ All commands executed successfully!");
 return;
  }
console.log(`\n> Running: ${commands[index]}`);

  exec(commands[index], (error, stdout, stderr) => {
    if (error) {
 console.error(`❌ Error executing ${commands[index]}:\n`, error.message);
return;
    }
if (stderr) console.error(`⚠️ ${stderr}`);
 if (stdout) console.log(stdout);

    runCommand(index + 1);});
}





runCommand();
