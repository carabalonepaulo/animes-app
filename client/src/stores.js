import { writable, readable, derived } from "svelte/store";

const refreshToken = writable(null);
const accessToken = writable(null);

export const routeParams = writable(null);

const createRouteStore = function () {
  const { subscribe, set, update } = writable("home");

  return {
    subscribe,
    set: (page, params) => {
      set(page);
      routeParams.set(params);
    },
  };
};

export const route = createRouteStore();
