const getEndUserId = (chatID: string, userID: number) => {
  const userIds = chatID.split("-");
  if (userIds.length === 2) {
    const [firstUserId, secondUserId] = userIds;
    return firstUserId === `${userID}` ? secondUserId : firstUserId;
  }
  return null;
};

export default getEndUserId;
