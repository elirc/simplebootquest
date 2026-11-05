function spyOn(obj, name) {
  const spy = obj[name];
  spy.calls = [];
  spy.restore = () => {};
  spy.mockReturnValue = () => spy;
  spy.mockImplementation = () => spy;
  return spy;
}
