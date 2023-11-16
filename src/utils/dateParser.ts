export const parseDate = (date: string) => {
  const messageDate = new Date(date);

  const year = messageDate.getFullYear();
  const month = (messageDate.getMonth() + 1) < 10 ? '0' + (messageDate.getMonth() + 1) : (messageDate.getMonth() + 1);
  const day = messageDate.getDate() < 10 ? '0' + messageDate.getDate() : messageDate.getDate();
  const hours = messageDate.getHours() < 10 ? '0' + messageDate.getHours() : messageDate.getHours();
  const minutes = messageDate.getMinutes() < 10 ? '0' + messageDate.getMinutes() : messageDate.getMinutes();
  const seconds = messageDate.getSeconds() < 10 ? '0' + messageDate.getSeconds() : messageDate.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};