import { LitElement } from "lit";
import { property } from "lit/decorators.js";

export class HideNSeekViewModel extends LitElement {
  @property({ type: Boolean }) protected isShowing = false;
  @property({ type: Number }) protected delay = 300;

  private timeoutId: number | undefined;
  private isHovering: boolean = false;

  protected makeItVisible(isVisible: boolean) {
    return () => {
      if (isVisible) {
        this.isHovering = true;
        this.timeoutId = setTimeout(() => {
          if (this.isHovering) {
            this.isShowing = true;
          }
        }, this.delay);
      } else {
        this.isHovering = false;
        clearTimeout(this.timeoutId);
        this.isShowing = false;
      }
    };
  }
}
