# Koji Analytics
**Support custom event tracking in your apps and games**

## Getting started

Install the package:
```
npm install --save @withkoji/analytics
```

Import the package into your app's root.
```
import KojiAnalytics from '@withkoji/analytics';
```

Track custom events with unique names and optional payloads
```
KojiAnalytics.track('My Custom Event');
KojiAnalytics.track('Won game', { score: 120 });
```
