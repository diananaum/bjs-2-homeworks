class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        for (let alarm of this.alarmCollection) {
            if (alarm === time) {
                return console.warn('Уже присутствует звонок на это же время');
            }
        }

        let object = new Object({
            callback: callback,
            time: time,
            canCall: true
        });

        this.alarmCollection.push(object);
    }

    removeClock(time) {
        const newAlarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);

        this.alarmCollection = newAlarmCollection;

        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        let currentTime = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });

        return currentTime;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                let currentTime = this.getCurrentFormattedTime();
                if (alarm.time === currentTime) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);

        return this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();

        return this.alarmCollection = [];
    }
}