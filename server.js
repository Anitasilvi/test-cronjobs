// setInterval(() => {
//     console.log("running a task every second");
// }, 1000);

const schedule = require('node-schedule');

// const job = schedule.scheduleJob('* * * * * *', () => {
//     console.log("running a task every second");
// })

// const job = schedule.scheduleJob('26 * * * * *', () => {
//     console.log("running a task every min 26");
// })

// const job = schedule.scheduleJob('* * * * * *', function (fireDate) {
//     console.log("This job was supposed to run at " + fireDate + ", but actually run at " + new Date());
// });

// const date = new Date(2023, 12, 9, 20, 3, 0);
// const job = schedule.scheduleJob(date, () => {
//     console.log("Running at the specific date and time given");
// });

// const rule = new schedule.RecurrenceRule();
// rule.minute = 2;
// const job = schedule.scheduleJob(rule, () => {
//     console.log("Running every 2th min after the hour");
// });

// const job = schedule.scheduleJob({hour: 1, minute: 30, dayOfWeek: 0}, () => {
//     console.log("Dinner Time");
// });

const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);

const job = schedule.scheduleJob({
    start: startTime,
    end: endTime,
    rule: '*/1 * * * * *'
},() => {
    console.log("Time for dinner");
});

// const job = schedule.scheduleJob('* * * * * *', () => {
//     console.log("Running a task every second");
// });

// setInterval(() => {
//     schedule.gracefulShutdown();
//     console.log("Graceful shutdown");
// }, 10000);