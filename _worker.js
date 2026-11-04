const SB = "https://uzromqlgkuhnveiyehiq.supabase.co";
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/sb" || url.pathname.startsWith("/sb/")) {
      const target = SB + url.pathname.slice(3) + url.search;
      const resp = await fetch(new Request(target, request));
      const out = new Response(resp.body, resp);
      out.headers.set("Access-Control-Allow-Origin", "*");
      out.headers.set("Access-Control-Allow-Headers", "*");
      out.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
      return out;
    }
    return env.ASSETS.fetch(request);
  }
};
