---
title: "Beyond the Bloat: How I Built a Sub-14kB Feedback Widget in Vanilla JS"
draft: true
---

# Is the Web Broken? A Developer's Plea for Performance and Simplicity

## Introduction: The Unseen Weight of the Modern Web

- Hook: Start with a relatable scenario—a user waiting for a website to load, a slow third-party script, an intrusive pop-up.

- The Problem: Discuss the growing "bloat" of the web, driven by heavy frameworks, large libraries, and numerous third-party widgets that prioritize features over performance.

- The Question: Pose the central question: "Is the web broken?" Argue that it's not broken in functionality, but in its user experience and respect for the user's time and data.

- The Challenge: Introduce your project—a simple feedback widget. State your specific goal: to build it in vanilla JavaScript and CSS, and, most importantly, keep its total file size under 14kB. Explain that this is a personal challenge and a statement on web performance.

## The "Why": The 14kB Magic Number

Explain the 14kB constraint: Delve into the technical reason behind the number. Explain what a TCP congestion window is and how keeping the file size below this threshold ensures the file can be sent in a single round trip, minimizing latency.

The User Benefit: Translate the technical detail into a user-focused benefit. This means the widget loads almost instantly, before a single image or JavaScript framework has even begun to download.

The "What": Building the Widget
Section 1: The Design & HTML

Describe the simple design of your widget: three emoji buttons (happy, neutral, angry) and a text box.

Show the basic, semantic HTML structure. Emphasize why you avoided unnecessary divs and complex nesting.

Use comments to explain each section of the code and its purpose.

Section 2: The CSS: Every Byte Counts

Discuss the CSS file size challenge. Detail how you styled the widget without a framework like Tailwind or Bootstrap.

Talk about the choices you made to save bytes, such as using short class names, grouping selectors, and avoiding overly verbose declarations.

Explain how you handled the "popup" or "modal" effect for the textbox using pure CSS or a minimal amount of JS.

Section 3: The JavaScript: A Vanilla Approach

Explain the role of the JS: handling clicks, showing/hiding the textbox, and sending the feedback.

Show the code for the event listeners.

Discuss how you implemented the state changes (e.g., highlighting an emoji when clicked).

Focus on the form submission part. Explain the choice to use the fetch API for its simplicity and small footprint to send the data to a server endpoint.

The "How": Keeping it Maintainable and Compact
Code Organization: Address the challenge of keeping a single file maintainable. Talk about using clear variable names, comments, and organizing the code into logical blocks or functions.

Minification: Explain the final step of minification for HTML, CSS, and JS. Mention a specific tool you might use (e.g., a simple online minifier or a build tool).

Final Size Check: Show the final, compressed file size and celebrate the achievement of staying under the 14kB limit.

Conclusion: A Plea for a Better Web
Recap: Summarize the key lesson: it's possible to build a great user experience with minimal code.

The Broader Message: Reiterate your original point about the state of the web. Argue that developers have a responsibility to be mindful of performance and user experience.

Call to Action: Encourage other developers to consider the impact of their choices and to prioritize simplicity and speed. Invite them to try a similar challenge themselves and share their results.

Optional: Conclude with a link to the widget's code on a platform like GitHub or Codepen.
