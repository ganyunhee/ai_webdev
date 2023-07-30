function updateDateTime() {
    const dateElement = document.querySelector('.date');
    const timeElement = document.querySelector('.time');
    const amPmElement = document.querySelector('.am_pm');

    const now = new Date();

    const months = [
        'January', 'February', 'March', 
        'April', 'May', 'June', 
        'July', 'August', 'September',
        'October', 'November', 'December'
    ]

    const monthElement = document.querySelector('.month');
    monthElement.textContent = months[now.getMonth()];
    const dayElement = document.querySelector('.day');
    dayElement.textContent = `${now.getDate()},`;
    const yearElement = document.querySelector('.year');
    yearElement.textContent = now.getFullYear();

    let hours = now.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    // change to 12-hour format
    hours = hours % 12 || 12;

    timeElement.textContent = `${hours.toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    amPmElement.textContent = amPm;
}

updateDateTime();

// update date and time every second
setInterval(updateDateTime, 1000);