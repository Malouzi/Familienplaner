const readline = require('readline');
const colors = require('colors');
let family = require('./family');

const terminalInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = ["Geschirrspüler", "Staubsaugen", "Müll rausbringen", "Wäsche zusammenlegen"];
const weeklyPlanner = [];

// Array zum Elemente mischen (Fischer-Yates-Algorithmus)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Zufällige Aufgabenverteilung
const assignTasks = () => {
  let taskQueue = [...tasks];
  shuffleArray(taskQueue);
  const familyMembers = Object.keys(family);

  // Vorherige Aufgabe löschen
  familyMembers.forEach(member => {
    family[member].tasks = [];
  });

  while (taskQueue.length) {
    familyMembers.forEach(member => {
      if (taskQueue.length) {
        family[member].tasks.push(taskQueue.shift());
      }
    });
  }
};

//Leerzeichen zufügen um Tabelle ordentlicher zu machen
const formatOutput = (text, length) => {
    return text.padEnd(length, ' ');
}

//Monatsplaner formatiert
const displayMonthlyPlanner = () => {
    console.log('\nMonatsplaner:');
    const header = Object.keys(family).map(member => formatOutput(member, 25)).join('');
    console.log(colors.rainbow(`Woche\t${header}`));
    console.log('----------------------------------------------------------------------------------------');
  
    for (let week = 1; week <= 4; week++) {
      assignTasks();
      let weekTasks = `${week}\t`;
  
      Object.keys(family).forEach(member => {
        const memberTasks = family[member].tasks.join(', ');
        const color = family[member].color;
        weekTasks += `${colors[color](formatOutput(memberTasks, 25))}`;
      });

      weeklyPlanner.push(weekTasks);
      console.log(weekTasks);
    }
  };

/*Monatsplaner unformatiert
const displayMonthlyPlanner = () => {
  console.log('\nMonatsplaner:');
  const header = Object.keys(family).map(member => member).join('\t\t');
  console.log(colors.rainbow(`Woche\t${header}`));
  console.log('----------------------------------------------------------------------------------------');

  for (let week = 1; week <= 4; week++) {
    assignTasks();
    let weekTasks = `${week}\t`;

    Object.keys(family).forEach(member => {
      const memberTasks = family[member].tasks.join(', ');
      const color = family[member].color;
      weekTasks += `${colors[color](memberTasks)}\t`;
    });

    weeklyPlanner.push(weekTasks);
    console.log(weekTasks);
  }
}; */

// Neue Aufgabe zufügen
const addTask = () => {
  terminalInterface.question('Neue Aufgabe: ', (newTask) => {
    tasks.push(newTask);
    console.log(`Aufgabe"${newTask}" wurde zugefügt.`);
    showMenu();
  });
};

// Neues familienmitglied zufügen
const addFamilyMember = () => {
  terminalInterface.question('Name eingeben: ', (name) => {
    terminalInterface.question('Farbe wählen (z.B., red, green, blue): ', (color) => {
      if (!family[name]) {
        family[name] = { color: color.trim(), tasks: [] };
        console.log(`Familienmitglied "${name}" wurde die farbe ${color} zugefügt.`);
      } else {
        console.log(`Familienmitglied "${name}" existiert bereits.`);
      }
      showMenu();
    });
  });
};

// Menü Anzeigen
const showMenu = () => {
  console.log('\nFamilienplaner');
  console.log('1. Monatsplan anzeigen');
  console.log('2. Aufgabe zufügen');
  console.log('3.Familienmitglied zufügen');
  console.log('4. Beenden');
  terminalInterface.question('Wähle eine Option: ', processMenu);
};

// Menü Optionen
const processMenu = (option) => {
  switch (option.trim()) {
    case '1':
      displayMonthlyPlanner();
      showMenu();
      break;
    case '2':
      addTask();
      break;
    case '3':
      addFamilyMember();
      break;
    case '4':
      terminalInterface.close();
      break;
    default:
      console.log('Ungültige Option');
      showMenu();
      break;
  }
};

console.log('Wilkommen beim Familienplaner!');
showMenu();