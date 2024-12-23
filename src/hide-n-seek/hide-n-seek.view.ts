import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from "lit";
import { HideNSeekTheme } from "./css/hide-n-seek.theme.css";
import { HideNSeekViewModel } from "./hide-n-seek.viewmodel";
import { classMap } from "lit/directives/class-map.js";

export class HideNSeekView extends HideNSeekViewModel {
  protected static finalizeStyles(
    styles?: CSSResultGroup | undefined
  ): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), HideNSeekTheme.cssBase];
  }

  public render(): TemplateResult {
    return html`
      <article
        @mouseenter=${this.makeItVisible(true)}
        @mouseleave=${this.makeItVisible(false)}
        class=${classMap({ spoiler: !this.isShowing })}
        id="spoiler-container"
      >
        <div
          class=${classMap({
            hidden: !this.isShowing,
            revealed: this.isShowing,
          })}
        >
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </article>
    `;
  }
}

window.customElements.define("hide-n-seek", HideNSeekView);

declare global {
  interface HTMLElementTagNameMap {
    "hide-n-seek": HideNSeekView;
  }
}
