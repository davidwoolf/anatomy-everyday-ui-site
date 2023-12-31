import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const sections = [
    "layout",
    "typography",
    "color-light",
    "forms",
    "sizing",
    "dynamic-components",
  ];

  /**
   * @typedef {Object} Section
   * @property {string} slug
   * @property {string} title
   * @property {string} description
   * @property {boolean?} hidden
   */

  /** @type {Record<string, Section[]>} */
  let data = {};

  for (const section of sections) {
    const res = await fetch(`/${section}/sections.json`);

    if (res.status === 404) {
      error(404, "file not found");
    }

    if (res.status !== 200) {
      error(500, "something went wrong");
    }

    /** @type {Section[]} */
    const body = await res.json();

    data[section] = body.filter((item) => {
      if ("hidden" in item && item.hidden === true) {
        return false;
      }

      return true;
    });
  }

  return data;
}
