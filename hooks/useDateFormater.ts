// useDateFormatter.ts
export function useDateFormatter() {
  const toTime = (date: Date) => {
    return new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

    // New function to format just the date
    const toDate = (input: string | Date) => {
      let date: Date;
  
      if (typeof input === "string") {
        date = new Date(input);
      } else {
        date = input;
      }
  
      return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long", // "short" or "numeric" can also be used
        day: "2-digit",
      }).format(date);
    };
  

  return { toTime , toDate};
}

// useTimeFormatter.ts
export function useTimeFormatter() {
  const formatTime = (time: string) => {
    // Create a Date object for today's date
    const date = new Date();
  
    // Split the time string into hours and minutes
    const [hours, minutes] = time.split(':').map(Number);
  
    // Set the hours and minutes of the date object
    date.setHours(hours);
    date.setMinutes(minutes);

    // Format the time using toLocaleTimeString
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return { formatTime };
}
