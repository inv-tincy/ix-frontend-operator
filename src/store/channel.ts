const channelConfig = (name: string) => {
  if (typeof window !== "undefined" && "BroadcastChannel" in window) {
    return new BroadcastChannel(name);
  }
  return null;
};
export const customerChannel = channelConfig("customer-app");
