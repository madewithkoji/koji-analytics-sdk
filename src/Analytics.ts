export default class Analytics {
  static track(event: string, payload?: {[index: string]: any}) {
    if (window.parent) {
      window.parent.postMessage({
        _kojiEventName: '@@koji/analytics/track',
        event,
        payload: payload || null,
      }, '*');
    }
  }
}
