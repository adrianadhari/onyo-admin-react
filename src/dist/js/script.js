// Usage: https://github.com/Grsmto/simplebar
import SimpleBar from "simplebar";

const initialize = () => {
    initializeSimplebar();
    initializeSidebarCollapse();
}

const initializeSimplebar = () => {
    const simplebarElement = document.getElementsByClassName("js-simplebar")[0];

    if (simplebarElement) {
        const simplebarInstance = new SimpleBar(document.getElementsByClassName("js-simplebar")[0]);

        /* Recalculate simplebar on sidebar dropdown toggle */
        const sidebarDropdowns = document.querySelectorAll(".js-sidebar [data-bs-parent]");

        sidebarDropdowns.forEach(link => {
            link.addEventListener("shown.bs.collapse", () => {
                simplebarInstance.recalculate();
            });
            link.addEventListener("hidden.bs.collapse", () => {
                simplebarInstance.recalculate();
            });
        });
    }
}

const initializeSidebarCollapse = () => {
    const sidebarElement = document.getElementsByClassName("js-sidebar")[0];
    const sidebarToggleElement = document.getElementsByClassName("js-sidebar-toggle")[0];

    if (sidebarElement && sidebarToggleElement) {
        sidebarToggleElement.addEventListener("click", () => {
            sidebarElement.classList.toggle("collapsed");

            sidebarElement.addEventListener("transitionend", () => {
                window.dispatchEvent(new Event("resize"));
            });
        });
    }
}

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => initialize());

/*
 * Add color theme colors to the window object
 * so this can be used by the charts and vector maps
 */

const theme = {
    "primary": "#3B7DDD",
    "secondary": "#6c757d",
    "success": "#1cbb8c",
    "info": "#17a2b8",
    "warning": "#fcb92c",
    "danger": "#dc3545",
    "white": "#fff",
    "gray-100": "#f8f9fa",
    "gray-200": "#e9ecef",
    "gray-300": "#dee2e6",
    "gray-400": "#ced4da",
    "gray-500": "#adb5bd",
    "gray-600": "#6c757d",
    "gray-700": "#495057",
    "gray-800": "#343a40",
    "gray-900": "#212529",
    "black": "#000"
};

// Add theme to the window object
window.theme = theme;

import feather from "feather-icons";

document.addEventListener("DOMContentLoaded", () => {
    try {
        feather.replace();
    }
    catch (e) {
        console.log('You might have made a typo with one of the feather icons');
        console.log(e);
    }
});

window.feather = feather;