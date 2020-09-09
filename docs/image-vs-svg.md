## Repeated Image VS SVG use.

I need to render a 16x16px pattern for the background. The repetitive pattern is a dot every 16px. Pretty simple pattern.

Trying to figure out what is the best in terms of performance for the browser.

### Repeated Image

I'll try both png and jpg (with some optimization) to see what's the length of the image.

|                      | bytes |
| -------------------- | ----- |
| jpg                  | 342   |
| png                  | 97    |
| png(no-transparency) | 95    |

One would say that jpg are better, but not in this case.
So `png with no transparency` is the winner.



