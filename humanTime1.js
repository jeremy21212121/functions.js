/**
*  Takes a unix timestamp from the past and returns a human-readable approximate duration
*  This is useful for giving users an approximate idea of how old something is
*/

const humanTime = (n) => {
    if (typeof n !== 'number') return;

    let output = '';
    const secs = Date.now() / 1000 - n;
    if (secs < 60) {
      const seconds = Math.round(secs) || 1; // logical OR handles sub-second times
      const suffix = (seconds === 1) ? ' sec' : ' secs';
      output = seconds.toString() + suffix;
    }
    else if (secs < 3600) {
      const mins = Math.round(secs/60);
      const suffix = (mins === 1) ? ' min' : ' mins';
      output = mins.toString() + suffix;
    }
    else if (secs < 86400) {
      const hours = Math.round(secs/3600);
      const suffix = (hours === 1) ? ' hour' : ' hours';
      output = hours.toString() + suffix;
    }
    else if (secs < 604800) {
      const days = Math.round(secs/86400);
      const suffix = (days === 1) ? ' days' : ' days';
      output = days.toString() + suffix;
    }
    else if (secs < 4233600) {
      const weeks = Math.round(secs/604800);
      const suffix = (weeks === 1) ? ' week' : ' weeks';
      output = weeks.toString() + suffix;
    }
    else if (secs < 18144000) {
      const months = Math.round(secs/2592000);
      const suffix = (months === 1) ? ' month' : ' months';
      output = months.toString() + suffix;
    }
    else {
      const years = Math.round(secs/31536000);
      const suffix = (years === 1) ? ' year' : ' years';
      output = years.toString() + suffix;
    }
    return output;
}

export default humanTime;

