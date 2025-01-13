const parseCompleted = (completed) => {
  if (completed.toLowerCase() === 'true') return true;
  if (completed.toLowerCase() === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { completed, text } = query;
  let parsedCompleted;
  if (completed) {
    parsedCompleted = parseCompleted(completed);
  }

  return {
    completed: parsedCompleted,
    text,
  };
};
