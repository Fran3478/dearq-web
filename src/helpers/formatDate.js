function getDayName(dayNum) {
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  return days[dayNum];
}

function formatedDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function formatDate(apiDate) {
  const date = new Date(apiDate);
  const dateNow = new Date();

  const diffMs = dateNow - date;

  const msInMin = 60 * 1000;
  const msInHour = 60 * msInMin;
  const msInDay = 24 * msInHour;
  const msInWeek = 7 * msInDay;

  if (diffMs < msInDay && dateNow.getDate() === date.getDate()) {
    const diffMinutes = Math.floor(diffMs / msInMin);
    if (diffMinutes < 60) {
      return `hace ${diffMinutes} minuto${diffMinutes === 1 ? "" : "s"}`;
    }
    const diffHours = Math.floor(diffMs / msInHour);
    return `hace ${diffHours} hora${diffHours === 1 ? "" : "s"}`;
  }

  if (diffMs < msInDay * 2 && dateNow.getDate() - date.getDate() === 1) {
    return "ayer";
  }

  if (diffMs < msInWeek) {
    return getDayName(date.getDay());
  }

  return formatedDate(date);
}
