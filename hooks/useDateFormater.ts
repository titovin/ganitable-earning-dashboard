// useDateFormatter.ts
export function useDateFormatter() {
  const toTime = (date: Date) => {
    return new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return { toTime };
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
