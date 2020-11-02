import { Injectable } from '@angular/core';
import { OverlayConfig, } from '@angular/cdk/overlay';
import { CustomOverlayRef } from './custom-overlay-ref';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { CustomLayoutComponent } from './custom-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class CustomLayoutService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    open({ element, data, content, width, height, }) {
        const overlay = this.overlay.create(this.getOverlayConfig({ element, width, height }));
        const overlayRef = new CustomOverlayRef(overlay, content, data);
        const injector = this.createInjector(overlayRef, this.injector);
        overlay.attach(new ComponentPortal(CustomLayoutComponent, null, injector));
        return overlayRef;
    }
    createInjector(overlayRef, injector) {
        const tokens = new WeakMap([[CustomOverlayRef, overlayRef]]);
        return new PortalInjector(injector, tokens);
    }
    getOverlayConfig({ element, width, height }) {
        return new OverlayConfig({
            width,
            height,
            hasBackdrop: true,
            backdropClass: 'overlay-backdrop',
            positionStrategy: this.getOverlayPosition(element),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
    }
    getOverlayPosition(element) {
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(element)
            .withPositions(this.getPositions())
            .withPush(false);
        return positionStrategy;
    }
    getPositions() {
        return [
            {
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom',
            },
            {
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
            },
        ];
    }
}
CustomLayoutService.ɵfac = function CustomLayoutService_Factory(t) { return new (t || CustomLayoutService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.Injector)); };
CustomLayoutService.ɵprov = i0.ɵɵdefineInjectable({ token: CustomLayoutService, factory: CustomLayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomLayoutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxheW91dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3piL0RvY3VtZW50cy9ody1mcm9udC9wcm9qZWN0cy9jdXN0b20tbGF5b3V0L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBRUwsYUFBYSxHQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBS2xFLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBb0IsT0FBZ0IsRUFBVSxRQUFrQjtRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFcEUsSUFBSSxDQUFJLEVBQ04sT0FBTyxFQUNQLElBQUksRUFDSixPQUFPLEVBQ1AsS0FBSyxFQUNMLE1BQU0sR0FDVztRQUNqQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUNsRCxDQUFDO1FBRUYsTUFBTSxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWhFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTNFLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxjQUFjLENBQ3BCLFVBQTRCLEVBQzVCLFFBQWtCO1FBRWxCLE1BQU0sTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsT0FBTyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDakQsT0FBTyxJQUFJLGFBQWEsQ0FBQztZQUN2QixLQUFLO1lBQ0wsTUFBTTtZQUNOLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxrQkFBa0I7WUFDakMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUNsRCxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7U0FDM0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE9BQW9CO1FBQzdDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDbEMsUUFBUSxFQUFFO2FBQ1YsbUJBQW1CLENBQUMsT0FBTyxDQUFDO2FBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVPLFlBQVk7UUFDbEIsT0FBTztZQUNMO2dCQUNFLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOztzRkFwRVUsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO2tEQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheVBhcmFtcyB9IGZyb20gJy4vdHlwZXMvb3ZlcmxheS1wYXJhbXMudHlwZSc7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBQb3NpdGlvblN0cmF0ZWd5LFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDdXN0b21PdmVybGF5UmVmIH0gZnJvbSAnLi9jdXN0b20tb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgUG9ydGFsSW5qZWN0b3IsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ3VzdG9tTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tbGF5b3V0LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21MYXlvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBvcGVuPFQ+KHtcbiAgICBlbGVtZW50LFxuICAgIGRhdGEsXG4gICAgY29udGVudCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH06IE92ZXJsYXlQYXJhbXM8VD4pOiBDdXN0b21PdmVybGF5UmVmIHtcbiAgICBjb25zdCBvdmVybGF5ID0gdGhpcy5vdmVybGF5LmNyZWF0ZShcbiAgICAgIHRoaXMuZ2V0T3ZlcmxheUNvbmZpZyh7IGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQgfSlcbiAgICApO1xuXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IG5ldyBDdXN0b21PdmVybGF5UmVmKG92ZXJsYXksIGNvbnRlbnQsIGRhdGEpO1xuXG4gICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKG92ZXJsYXlSZWYsIHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgb3ZlcmxheS5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChDdXN0b21MYXlvdXRDb21wb25lbnQsIG51bGwsIGluamVjdG9yKSk7XG5cbiAgICByZXR1cm4gb3ZlcmxheVJlZjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSW5qZWN0b3IoXG4gICAgb3ZlcmxheVJlZjogQ3VzdG9tT3ZlcmxheVJlZixcbiAgICBpbmplY3RvcjogSW5qZWN0b3JcbiAgKTogUG9ydGFsSW5qZWN0b3Ige1xuICAgIGNvbnN0IHRva2VucyA9IG5ldyBXZWFrTWFwKFtbQ3VzdG9tT3ZlcmxheVJlZiwgb3ZlcmxheVJlZl1dKTtcblxuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IoaW5qZWN0b3IsIHRva2Vucyk7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoeyBlbGVtZW50LCB3aWR0aCwgaGVpZ2h0IH0pOiBPdmVybGF5Q29uZmlnIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdvdmVybGF5LWJhY2tkcm9wJyxcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKGVsZW1lbnQpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGVsZW1lbnQpXG4gICAgICAud2l0aFBvc2l0aW9ucyh0aGlzLmdldFBvc2l0aW9ucygpKVxuICAgICAgLndpdGhQdXNoKGZhbHNlKTtcblxuICAgIHJldHVybiBwb3NpdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3NpdGlvbnMoKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBvcmlnaW5YOiAnY2VudGVyJyxcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgb3JpZ2luWDogJ2NlbnRlcicsXG4gICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxufVxuIl19