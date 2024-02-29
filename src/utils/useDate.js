function useDate() {
  const today = new Date();
  function getDate() {
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const sec = today.getSeconds();
    const min = today.getMinutes();
    const hours = today.getHours();
    return `${hours}:${min}:${sec} ${month}.${date}.${year}`;
  }

  function getDelayedDate() {
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const sec = today.getSeconds();
    const min = today.getMinutes();
    const hours = today.getHours();
    return `${hours}:${min}:${sec + 3} ${month}.${date}.${year}`;
  }

  return { getDate, getDelayedDate };
}

export default useDate;
