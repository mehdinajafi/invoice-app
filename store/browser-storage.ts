export function loadState(KEY: string) {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(KEY: string, state: any) {
  try {
    if (typeof state === "string") {
      localStorage.setItem(KEY, state);
    } else {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(KEY, serializedState);
    }
  } catch (e) {}
}
