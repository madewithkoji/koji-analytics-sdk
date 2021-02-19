# Koji Analytics
![npm (scoped)](https://img.shields.io/npm/v/@withkoji/analytics?color=green&style=flat-square)

**Track custom events in your Koji templates.**

## Overview
The @withkoji/analytics package enables you to track custom events in your Koji templates. For example, track onClick events for the links and buttons in a Koji.

**[DEPRECATED]**
This package is deprecated and is included only for backwards compatibility. For new templates, use [@withkoji/core](https://developer.withkoji.com/reference/packages/withkoji-koji-core).

## Installation

Install the package in the frontend service of your Koji project.

```
npm install --save @withkoji/analytics
```

## Basic use

Import the package in your application code.

```
import Analytics from '@withkoji/analytics';
```

Track custom events with unique names and optional payloads.

```
Analytics.track('My Custom Event');
Analytics.track('Won game', { score: 120 });
```

## Related resources

* [Package documentation](https://developer.withkoji.com/reference/packages/withkoji-koji-analytics-sdk)
* [Koji homepage](http://withkoji.com/)

## Contributions and questions

See the [contributions page](https://developer.withkoji.com/docs/about/contribute-koji-developers) on the developer site for info on how to make contributions to Koji repositories and developer documentation.

For any questions, reach out to the developer community or the `@Koji Team` on our [Discord server](https://discord.com/invite/9egkTWf4ec).
