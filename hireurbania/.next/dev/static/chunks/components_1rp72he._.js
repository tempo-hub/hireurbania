(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CityGuide.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CityGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.mjs [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CityGuide({ cityData, route }) {
    _s();
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        attractions: true,
        food: true,
        tips: true
    });
    const toggleSection = (section)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    if (!cityData) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-badge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-7d2afd3da26d3471",
                                children: "City Guide"
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-title",
                        children: [
                            "Discover",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-7d2afd3da26d3471",
                                children: route?.destination
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-description",
                        children: cityData.overview
                    }, void 0, false, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CityGuide.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-overview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-subtitle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 18,
                                        color: "#0052CC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7d2afd3da26d3471",
                                        children: [
                                            "About ",
                                            route?.destination
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-overview-text",
                                children: cityData.detailedDescription
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    cityData.topAttractions && cityData.topAttractions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-section-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleSection("attractions"),
                                "aria-expanded": expandedSections.attractions,
                                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-accordion",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-accordion-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                size: 18,
                                                color: "#0052CC"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7d2afd3da26d3471",
                                                children: "Top Attractions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    expandedSections.attractions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            expandedSections.attractions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7d2afd3da26d3471" + " " + "city-attractions-grid",
                                children: cityData.topAttractions.slice(0, 8).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7d2afd3da26d3471" + " " + "city-attraction-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7d2afd3da26d3471" + " " + "city-attraction-bullet",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 107,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7d2afd3da26d3471",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 111,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 103,
                                        columnNumber: 23
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this),
                    cityData.localFood && cityData.localFood.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-section-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleSection("food"),
                                "aria-expanded": expandedSections.food,
                                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-accordion",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-accordion-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                size: 18,
                                                color: "#FF6B35"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7d2afd3da26d3471",
                                                children: "Local Food"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    expandedSections.food ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            expandedSections.food && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7d2afd3da26d3471" + " " + "city-food-list",
                                children: cityData.localFood.map((food, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7d2afd3da26d3471" + " " + "city-food-tag",
                                        children: food
                                    }, index, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 147,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 145,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this),
                    cityData.bestTimeToVisit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-section-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-subtitle city-best-time-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 18,
                                        color: "#0891b2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7d2afd3da26d3471",
                                        children: "Best Time to Visit"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-7d2afd3da26d3471" + " " + "city-best-time-text",
                                children: cityData.bestTimeToVisit
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    cityData.travelTips && cityData.travelTips.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-tips-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleSection("tips"),
                                "aria-expanded": expandedSections.tips,
                                className: "jsx-7d2afd3da26d3471" + " " + "city-guide-accordion",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7d2afd3da26d3471" + " " + "city-guide-accordion-title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                size: 18,
                                                color: "#F59E0B"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7d2afd3da26d3471",
                                                children: "Travel Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    expandedSections.tips ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            expandedSections.tips && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-7d2afd3da26d3471" + " " + "city-travel-tips",
                                children: cityData.travelTips.map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-7d2afd3da26d3471" + " " + "city-travel-tip",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7d2afd3da26d3471" + " " + "city-tip-check",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 208,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7d2afd3da26d3471",
                                                children: tip
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 212,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 204,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CityGuide.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7d2afd3da26d3471",
                children: ".city-guide-wrapper.jsx-7d2afd3da26d3471{box-sizing:border-box;width:100%;max-width:100%}.city-guide-header.jsx-7d2afd3da26d3471{text-align:center;width:100%;max-width:780px;margin:0 auto 2.5rem}.city-guide-badge.jsx-7d2afd3da26d3471{color:#0052cc;letter-spacing:.2px;background:#eef3ff;border-radius:40px;justify-content:center;align-items:center;gap:.5rem;padding:.3rem 1.2rem;font-size:.8rem;font-weight:600;line-height:1.4;display:inline-flex}.city-guide-title.jsx-7d2afd3da26d3471{color:#0b1a2e;overflow-wrap:anywhere;margin:.7rem 0 .75rem;font-size:max(1.8rem,min(3vw,2.3rem));font-weight:700;line-height:1.25}.city-guide-title.jsx-7d2afd3da26d3471 span.jsx-7d2afd3da26d3471{color:#0052cc}.city-guide-description.jsx-7d2afd3da26d3471{color:#4a5a6e;overflow-wrap:anywhere;margin:0;font-size:1rem;line-height:1.7}.city-guide-card.jsx-7d2afd3da26d3471{box-sizing:border-box;background:#fff;border:1px solid #ecf0f7;border-radius:24px;width:100%;max-width:100%;padding:2rem;box-shadow:0 8px 24px #0014320a}.city-guide-overview.jsx-7d2afd3da26d3471{box-sizing:border-box;background:#f0f4fe;border-radius:16px;width:100%;margin-bottom:2rem;padding:1.5rem}.city-guide-subtitle.jsx-7d2afd3da26d3471{color:#0b1a2e;align-items:center;gap:.5rem;margin:0 0 .5rem;font-size:1.1rem;font-weight:700;line-height:1.4;display:flex}.city-guide-subtitle.jsx-7d2afd3da26d3471 span.jsx-7d2afd3da26d3471{overflow-wrap:anywhere;min-width:0}.city-guide-overview-text.jsx-7d2afd3da26d3471{color:#4a5a6e;overflow-wrap:anywhere;margin:0;font-size:.95rem;line-height:1.7}.city-guide-section-block.jsx-7d2afd3da26d3471{box-sizing:border-box;border-bottom:1px solid #ecf0f7;width:100%;margin-bottom:1.5rem;padding-bottom:1.5rem}.city-guide-tips-section.jsx-7d2afd3da26d3471{width:100%}.city-guide-accordion.jsx-7d2afd3da26d3471{color:#0b1a2e;cursor:pointer;text-align:left;background:0 0;border:none;justify-content:space-between;align-items:center;gap:1rem;width:100%;margin:0;padding:.3rem 0;font-family:inherit;display:flex}.city-guide-accordion-title.jsx-7d2afd3da26d3471{color:#0b1a2e;align-items:center;gap:.5rem;min-width:0;font-size:1.1rem;font-weight:700;line-height:1.4;display:flex}.city-guide-accordion-title.jsx-7d2afd3da26d3471 span.jsx-7d2afd3da26d3471{overflow-wrap:anywhere;min-width:0}.city-attractions-grid.jsx-7d2afd3da26d3471{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;margin-top:1rem;display:grid}.city-attraction-item.jsx-7d2afd3da26d3471{color:#1a2634;box-sizing:border-box;overflow-wrap:anywhere;background:#f9fafc;border-radius:10px;align-items:flex-start;gap:.5rem;min-width:0;padding:.65rem .75rem;font-size:.9rem;line-height:1.45;display:flex}.city-attraction-bullet.jsx-7d2afd3da26d3471{color:#0052cc;flex:none;font-weight:700}.city-food-list.jsx-7d2afd3da26d3471{flex-wrap:wrap;align-items:center;gap:.6rem;margin-top:1rem;display:flex}.city-food-tag.jsx-7d2afd3da26d3471{color:#b33d00;overflow-wrap:anywhere;box-sizing:border-box;background:#fff3e8;border-radius:20px;max-width:100%;padding:.4rem 1rem;font-size:.85rem;font-weight:500;line-height:1.4}.city-best-time-title.jsx-7d2afd3da26d3471{margin-bottom:.5rem}.city-best-time-text.jsx-7d2afd3da26d3471{color:#4a5a6e;overflow-wrap:anywhere;margin:0;padding-left:2rem;font-size:.95rem;line-height:1.7}.city-travel-tips.jsx-7d2afd3da26d3471{flex-direction:column;gap:.5rem;margin:1rem 0 0;padding:0;list-style:none;display:flex}.city-travel-tip.jsx-7d2afd3da26d3471{color:#1a2634;box-sizing:border-box;overflow-wrap:anywhere;background:#f0fdf4;border-radius:10px;align-items:flex-start;gap:.5rem;padding:.65rem .75rem;font-size:.9rem;line-height:1.5;display:flex}.city-tip-check.jsx-7d2afd3da26d3471{color:#10b981;flex:none;font-weight:700}@media (width<=1199px){.city-guide-card.jsx-7d2afd3da26d3471{padding:1.75rem}.city-attractions-grid.jsx-7d2afd3da26d3471{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width<=768px){.city-guide-header.jsx-7d2afd3da26d3471{margin-bottom:2rem}.city-guide-title.jsx-7d2afd3da26d3471{font-size:max(1.6rem,min(5vw,2rem));line-height:1.3}.city-guide-description.jsx-7d2afd3da26d3471{font-size:.92rem;line-height:1.65}.city-guide-card.jsx-7d2afd3da26d3471{border-radius:18px;padding:1.25rem}.city-guide-overview.jsx-7d2afd3da26d3471{border-radius:14px;margin-bottom:1.5rem;padding:1.25rem}.city-guide-subtitle.jsx-7d2afd3da26d3471,.city-guide-accordion-title.jsx-7d2afd3da26d3471{font-size:1rem}.city-guide-overview-text.jsx-7d2afd3da26d3471{font-size:.9rem}.city-attractions-grid.jsx-7d2afd3da26d3471{grid-template-columns:repeat(2,minmax(0,1fr));gap:.65rem}.city-attraction-item.jsx-7d2afd3da26d3471{padding:.6rem .7rem;font-size:.85rem}.city-food-list.jsx-7d2afd3da26d3471{gap:.5rem}.city-food-tag.jsx-7d2afd3da26d3471{padding:.4rem .85rem;font-size:.8rem}.city-best-time-text.jsx-7d2afd3da26d3471{padding-left:1.75rem;font-size:.9rem}.city-travel-tip.jsx-7d2afd3da26d3471{font-size:.85rem}}@media (width<=480px){.city-guide-header.jsx-7d2afd3da26d3471{margin-bottom:1.5rem}.city-guide-badge.jsx-7d2afd3da26d3471{padding:.3rem .9rem;font-size:.75rem}.city-guide-title.jsx-7d2afd3da26d3471{margin-top:.65rem;font-size:1.5rem;line-height:1.3}.city-guide-description.jsx-7d2afd3da26d3471{font-size:.85rem;line-height:1.6}.city-guide-card.jsx-7d2afd3da26d3471{border-radius:16px;padding:1rem}.city-guide-overview.jsx-7d2afd3da26d3471{border-radius:12px;margin-bottom:1.25rem;padding:1rem}.city-guide-subtitle.jsx-7d2afd3da26d3471,.city-guide-accordion-title.jsx-7d2afd3da26d3471{font-size:.92rem}.city-guide-overview-text.jsx-7d2afd3da26d3471{font-size:.82rem;line-height:1.65}.city-guide-section-block.jsx-7d2afd3da26d3471{margin-bottom:1.25rem;padding-bottom:1.25rem}.city-guide-accordion.jsx-7d2afd3da26d3471{min-height:40px}.city-attractions-grid.jsx-7d2afd3da26d3471{grid-template-columns:1fr;gap:.6rem;margin-top:.85rem}.city-attraction-item.jsx-7d2afd3da26d3471{padding:.65rem .7rem;font-size:.8rem}.city-food-list.jsx-7d2afd3da26d3471{gap:.45rem;margin-top:.85rem}.city-food-tag.jsx-7d2afd3da26d3471{max-width:100%;padding:.4rem .75rem;font-size:.76rem}.city-best-time-text.jsx-7d2afd3da26d3471{margin-top:.65rem;padding-left:0;font-size:.82rem;line-height:1.65}.city-travel-tips.jsx-7d2afd3da26d3471{gap:.45rem;margin-top:.85rem}.city-travel-tip.jsx-7d2afd3da26d3471{padding:.65rem .7rem;font-size:.8rem;line-height:1.5}}@media (width<=359px){.city-guide-badge.jsx-7d2afd3da26d3471{padding:.28rem .75rem;font-size:.7rem}.city-guide-title.jsx-7d2afd3da26d3471{font-size:1.35rem}.city-guide-description.jsx-7d2afd3da26d3471{font-size:.78rem}.city-guide-card.jsx-7d2afd3da26d3471{border-radius:14px;padding:.8rem}.city-guide-overview.jsx-7d2afd3da26d3471{padding:.85rem}.city-guide-subtitle.jsx-7d2afd3da26d3471,.city-guide-accordion-title.jsx-7d2afd3da26d3471{font-size:.88rem}.city-guide-overview-text.jsx-7d2afd3da26d3471{font-size:.77rem}.city-attraction-item.jsx-7d2afd3da26d3471{padding:.6rem;font-size:.76rem}.city-food-tag.jsx-7d2afd3da26d3471{padding:.35rem .65rem;font-size:.72rem}.city-best-time-text.jsx-7d2afd3da26d3471{font-size:.76rem}.city-travel-tip.jsx-7d2afd3da26d3471{padding:.6rem;font-size:.74rem}}@media (hover:none){.city-guide-accordion.jsx-7d2afd3da26d3471{-webkit-tap-highlight-color:transparent}}@media (prefers-reduced-motion:reduce){.city-guide-wrapper.jsx-7d2afd3da26d3471 .jsx-7d2afd3da26d3471{scroll-behavior:auto;transition:none!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CityGuide.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(CityGuide, "K5y1/xV25B3p3q45Q50knsUioAs=");
_c = CityGuide;
var _c;
__turbopack_context__.k.register(_c, "CityGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RouteTemplate.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/road.mjs [app-client] (ecmascript) <export default as Road>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$luggage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Luggage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/luggage.mjs [app-client] (ecmascript) <export default as Luggage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.mjs [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fuel.mjs [app-client] (ecmascript) <export default as Fuel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.mjs [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.mjs [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.mjs [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2d$front$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BusFront$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bus-front.mjs [app-client] (ecmascript) <export default as BusFront>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.mjs [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.mjs [app-client] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.mjs [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.mjs [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.mjs [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.mjs [app-client] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CityGuide$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CityGuide.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routesData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
// ========== FAQ ITEM COMPONENT ==========
function FAQItem({ question, answer, isOpen, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            borderRadius: "16px",
            border: isOpen ? "1px solid #0052CC" : "1px solid #ecf0f7",
            transition: "all 0.3s ease",
            overflow: "hidden",
            boxShadow: isOpen ? "0 8px 24px rgba(0, 82, 204, 0.08)" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: "1.2rem 1.5rem",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: isOpen ? "#0052CC" : "#0b1a2e",
                    transition: "color 0.3s ease",
                    fontFamily: "inherit"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            flexShrink: 0,
                            marginLeft: "1rem"
                        },
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                            size: 20,
                            color: "#0052CC"
                        }, void 0, false, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 20,
                            color: "#7a8a9e"
                        }, void 0, false, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxHeight: isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: "#4a5a6e",
                        fontSize: "0.95rem",
                        lineHeight: "1.7",
                        borderTop: isOpen ? "1px solid #ecf0f7" : "none",
                        paddingTop: isOpen ? "1.2rem" : "0"
                    },
                    children: answer
                }, void 0, false, {
                    fileName: "[project]/components/RouteTemplate.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RouteTemplate.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = FAQItem;
// ========== SEO COMPONENT ==========
function RouteSeo({ route }) {
    const title = route.metaTitle || `Force Urbania ${route.origin} to ${route.destination} | Tempo Traveller Hire`;
    const description = route.metaDescription || `Book Force Urbania tempo traveller from ${route.origin} to ${route.destination}. ${route.distanceKm}km, ${route.durationHrs} journey with luxury seating, AC, and experienced chauffeurs.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: description
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: "website"
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:locale",
                content: "en_IN"
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "canonical",
                href: `https://hireurbaniatempotraveller.com/routes/${route.routeSlug}`
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: `Urbania Tempo Traveller ${route.origin} to ${route.destination}`,
                        description: description,
                        brand: {
                            "@type": "Brand",
                            name: "Force Urbania"
                        },
                        offers: {
                            "@type": "Offer",
                            availability: "https://schema.org/InStock",
                            priceCurrency: "INR",
                            priceSpecification: {
                                "@type": "UnitPriceSpecification",
                                priceType: "https://schema.org/RentalCarReservation",
                                unitText: "km"
                            }
                        }
                    })
                }
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RouteTemplate.jsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c1 = RouteSeo;
function RouteTemplate({ city, route, relatedRoutes, fleet, cityGuide }) {
    _s();
    const whatsappNumber = "918448445504";
    const whatsappText = encodeURIComponent(`Booking Query for Force Urbania ${route.origin} to ${route.destination}`);
    const roundTripDistance = route.distanceKm * 2;
    // ========== FAQ STATE ==========
    const [openFAQIndex, setOpenFAQIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };
    // Helper to format currency
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount);
    };
    // ========== DYNAMIC FAQS FOR ROUTE ==========
    const generateRouteFAQs = (route)=>{
        const estimatedFare = Math.round(roundTripDistance * 28 + 600 * 3).toLocaleString("en-IN");
        return [
            {
                q: `What is the distance and travel time from ${route.origin} to ${route.destination}?`,
                a: `The distance from ${route.origin} to ${route.destination} is approximately ${route.distanceKm} kilometers, and the travel time is around ${route.durationHrs}. The actual time may vary depending on road conditions, traffic, and weather.`
            },
            {
                q: `How much does it cost to hire a Force Urbania from ${route.origin} to ${route.destination}?`,
                a: `The estimated fare for a round trip from ${route.origin} to ${route.destination} starts from ₹${estimatedFare}. This includes the base fare, driver allowance, and minimum kilometer charges. Final fare may vary based on the seater variant, actual route taken, tolls, taxes, and additional halts. Contact us for a precise quote tailored to your itinerary.`
            },
            {
                q: `What seater options are available for the ${route.origin} to ${route.destination} route?`,
                a: `We offer multiple Force Urbania variants for this route including 9-Seater VIP, 12-Seater Executive, 16-Seater Deluxe, 17-Seater Super Luxury, and 20-Seater Maharaja. Each variant comes with premium features like reclining leather seats, individual AC vents, USB charging ports, and ample luggage space.`
            },
            {
                q: `What amenities are included in the Force Urbania for the ${route.origin} to ${route.destination} trip?`,
                a: `Our Force Urbania fleet comes equipped with plush pushback seats, powerful air conditioning with individual vents, entertainment systems (TV/Music), USB charging ports, reading lights, curtains for privacy, and spacious luggage storage. All vehicles are regularly sanitized and maintained to the highest standards.`
            },
            {
                q: `Can I book a one-way trip from ${route.origin} to ${route.destination}?`,
                a: `Yes, we offer both one-way and round-trip bookings. For one-way trips from ${route.origin} to ${route.destination}, the fare is calculated based on the total distance with applicable rates. Please contact us for a customized one-way quote as charges may vary based on availability and vehicle type.`
            },
            {
                q: `What is the booking process for ${route.origin} to ${route.destination}?`,
                a: `Booking is simple and quick! Click the "Book on WhatsApp" button or call us directly. Share your travel dates, group size, and specific requirements. We'll provide an instant quote, and once you confirm, we'll send vehicle details, driver information, and trip confirmation within 24 hours of departure.`
            },
            {
                q: `How early should I book the Urbania for ${route.origin} to ${route.destination}?`,
                a: `We recommend booking at least 2-3 days in advance to ensure availability, especially during peak seasons, weekends, and holidays. For last-minute bookings, please contact us directly, and we'll do our best to accommodate your request.`
            },
            {
                q: `Are there any hidden charges for the ${route.origin} to ${route.destination} trip?`,
                a: `No, we believe in complete transparency. Our pricing is all-inclusive with no hidden charges. The final fare may include tolls, state taxes, parking fees, and driver allowances, which will be clearly mentioned in your quote before booking. We recommend confirming all charges at the time of booking.`
            },
            {
                q: `Do you provide drivers for the ${route.origin} to ${route.destination} route?`,
                a: `Yes, all our Force Urbania rentals come with experienced, verified, and professional chauffeurs. Our drivers are familiar with the ${route.origin} to ${route.destination} route, ensuring a safe, comfortable, and timely journey.`
            },
            {
                q: `Can I customize the itinerary for my ${route.origin} to ${route.destination} trip?`,
                a: `Absolutely! We offer customized itineraries for ${route.origin} to ${route.destination} travel. Whether you want to add sightseeing stops, visit local attractions, or plan multiple halts, we can tailor the trip to your preferences. Just let us know your requirements when booking.`
            }
        ];
    };
    const routeFAQs = generateRouteFAQs(route);
    // ========== ROUTE GUIDE STATE ==========
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        stopovers: true,
        tips: true
    });
    const toggleSection = (section)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RouteSeo, {
                route: route
            }, void 0, false, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "route-template",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "route-hero",
                        style: {
                            paddingTop: "8.5rem",
                            paddingBottom: "4rem",
                            background: "linear-gradient(160deg, #003ea6 0%, #0770E3 100%)",
                            color: "#FFF",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "-30%",
                                    right: "-10%",
                                    width: "50%",
                                    height: "80%",
                                    background: "radial-gradient(circle, rgba(255,184,0,0.08) 0%, transparent 70%)",
                                    borderRadius: "50%",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container",
                                style: {
                                    maxWidth: "1280px",
                                    margin: "0 auto",
                                    padding: "0 1.5rem",
                                    position: "relative",
                                    zIndex: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        "aria-label": "Breadcrumb",
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.4rem",
                                            fontSize: "0.85rem",
                                            marginBottom: "1.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                style: {
                                                    color: "rgba(255,255,255,0.8)",
                                                    textDecoration: "none"
                                                },
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cities",
                                                style: {
                                                    color: "rgba(255,255,255,0.8)",
                                                    textDecoration: "none"
                                                },
                                                children: "Cities"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#FFB800",
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    route.origin,
                                                    " to ",
                                                    route.destination
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "route-hero-grid",
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1.2fr 0.9fr",
                                            gap: "3rem",
                                            alignItems: "start"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "0.5rem",
                                                            background: "rgba(255,255,255,0.15)",
                                                            backdropFilter: "blur(8px)",
                                                            padding: "0.3rem 1.2rem",
                                                            borderRadius: "40px",
                                                            fontSize: "0.8rem",
                                                            fontWeight: 600,
                                                            letterSpacing: "0.5px",
                                                            color: "#fff",
                                                            marginBottom: "0.5rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 374,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Premium Route"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        style: {
                                                            fontSize: "clamp(2rem, 4vw, 3.2rem)",
                                                            color: "#FFF",
                                                            fontWeight: 800,
                                                            lineHeight: 1.15,
                                                            marginBottom: "0.5rem"
                                                        },
                                                        children: [
                                                            "Force Urbania",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "#FFB800"
                                                                },
                                                                children: [
                                                                    route.origin,
                                                                    " to ",
                                                                    route.destination
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 387,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 377,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "rgba(255,255,255,0.92)",
                                                            fontSize: "1.05rem",
                                                            lineHeight: "1.7",
                                                            maxWidth: "660px"
                                                        },
                                                        children: [
                                                            "Hire a luxury Force Urbania for your",
                                                            " ",
                                                            route.category?.toLowerCase() || "comfortable",
                                                            " journey. Enjoy plush pushback seats, powerful AC, spacious luggage storage, and a verified chauffeur."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 392,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: "1.5rem",
                                                            flexWrap: "wrap",
                                                            margin: "1.5rem 0",
                                                            padding: "1rem 0",
                                                            borderTop: "1px solid rgba(255,255,255,0.1)",
                                                            borderBottom: "1px solid rgba(255,255,255,0.1)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.4rem",
                                                                    fontSize: "0.9rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " ",
                                                                    route.distanceKm,
                                                                    " KM"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 418,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.4rem",
                                                                    fontSize: "0.9rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " ",
                                                                    route.durationHrs
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 428,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.4rem",
                                                                    fontSize: "0.9rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 446,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " Up to 20 Seats"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 438,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 407,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: "1rem",
                                                            flexWrap: "wrap"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "btn btn-whatsapp",
                                                                style: {
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "0.6rem",
                                                                    padding: "0.8rem 2rem",
                                                                    borderRadius: "50px",
                                                                    background: "#25D366",
                                                                    color: "#fff",
                                                                    fontWeight: 700,
                                                                    textDecoration: "none",
                                                                    transition: "0.2s",
                                                                    border: "none",
                                                                    fontSize: "1rem",
                                                                    cursor: "pointer"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 473,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " Book on WhatsApp"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 452,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `tel:+${whatsappNumber}`,
                                                                className: "btn btn-outline",
                                                                style: {
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "0.6rem",
                                                                    padding: "0.8rem 2rem",
                                                                    borderRadius: "50px",
                                                                    background: "transparent",
                                                                    color: "#FFF",
                                                                    fontWeight: 600,
                                                                    textDecoration: "none",
                                                                    transition: "0.2s",
                                                                    border: "1.5px solid rgba(255,255,255,0.3)",
                                                                    fontSize: "1rem",
                                                                    cursor: "pointer"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " Call Us"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 475,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 451,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#FFFFFF",
                                                    borderRadius: "24px",
                                                    padding: "2rem",
                                                    boxShadow: "0 24px 48px -12px rgba(0, 30, 80, 0.35)",
                                                    color: "#1a2634"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: "1.2rem",
                                                            fontWeight: 700,
                                                            marginBottom: "0.2rem"
                                                        },
                                                        children: "Quick Trip Info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 509,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#5b6b7e",
                                                            fontSize: "0.9rem",
                                                            marginBottom: "1.5rem"
                                                        },
                                                        children: "Everything you need to know at a glance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 518,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "1rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.8rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    color: "#7a8a9e"
                                                                                },
                                                                                children: "From"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 544,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: route.origin
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 547,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 543,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        size: 16,
                                                                        color: "#7a8a9e",
                                                                        style: {
                                                                            margin: "0 0.2rem"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 549,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    color: "#7a8a9e"
                                                                                },
                                                                                children: "To"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 555,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: route.destination
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 558,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 554,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 535,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.8rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 569,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    color: "#7a8a9e"
                                                                                },
                                                                                children: "Distance"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 571,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: [
                                                                                    route.distanceKm,
                                                                                    " KM"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 574,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 570,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 562,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.8rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 585,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    color: "#7a8a9e"
                                                                                },
                                                                                children: "Duration"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 587,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: route.durationHrs
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 590,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 586,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 578,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.8rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    color: "#7a8a9e"
                                                                                },
                                                                                children: "Vehicle Type"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 603,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Force Urbania Tempo Traveller"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 602,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 594,
                                                                columnNumber: 19
                                                            }, this),
                                                            route.popularAttractions && route.popularAttractions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: "0.5rem",
                                                                    padding: "1rem",
                                                                    background: "#f0f4fe",
                                                                    borderRadius: "12px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: "0.75rem",
                                                                            color: "#7a8a9e",
                                                                            marginBottom: "0.3rem"
                                                                        },
                                                                        children: "Popular Attractions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 620,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            flexWrap: "wrap",
                                                                            gap: "0.3rem"
                                                                        },
                                                                        children: route.popularAttractions.slice(0, 3).map((attraction, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    background: "#0052CC",
                                                                                    color: "#fff",
                                                                                    padding: "0.1rem 0.6rem",
                                                                                    borderRadius: "12px",
                                                                                    fontSize: "0.7rem"
                                                                                },
                                                                                children: attraction
                                                                            }, idx, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 639,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 629,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 612,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 528,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 500,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "4rem 0",
                            background: "#ffffff"
                        },
                        className: "jsx-43adeaef94dddc0b" + " " + "route-highlights-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: "1280px",
                                    margin: "0 auto",
                                    padding: "0 1.5rem"
                                },
                                className: "jsx-43adeaef94dddc0b" + " " + "container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center",
                                            maxWidth: "780px",
                                            margin: "0 auto 2.5rem"
                                        },
                                        className: "jsx-43adeaef94dddc0b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    background: "#eef3ff",
                                                    color: "#0052CC",
                                                    padding: "0.3rem 1.2rem",
                                                    borderRadius: "40px",
                                                    fontSize: "0.8rem",
                                                    fontWeight: 600,
                                                    letterSpacing: "0.2px"
                                                },
                                                className: "jsx-43adeaef94dddc0b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 699,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Route Information"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 685,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                                                    fontWeight: 700,
                                                    margin: "0.7rem 0 0.75rem",
                                                    color: "#0b1a2e"
                                                },
                                                className: "jsx-43adeaef94dddc0b",
                                                children: [
                                                    route.origin,
                                                    " to ",
                                                    route.destination,
                                                    " Route Highlights"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 703,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: "1rem",
                                                    color: "#4a5a6e",
                                                    lineHeight: "1.7",
                                                    margin: 0
                                                },
                                                className: "jsx-43adeaef94dddc0b",
                                                children: "Get complete travel information including distance, travel time, road condition, and the recommended Force Urbania for your journey."
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 714,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 678,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(4, 1fr)",
                                            gap: "1.25rem"
                                        },
                                        className: "jsx-43adeaef94dddc0b" + " " + "route-highlights-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#f9fafc",
                                                    border: "1px solid #e8edf5",
                                                    borderRadius: "18px",
                                                    padding: "1.5rem 1.2rem",
                                                    textAlign: "center",
                                                    transition: "all 0.3s ease"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-5px)";
                                                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 82, 204, 0.10)";
                                                    e.currentTarget.style.borderColor = "#0052CC";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                    e.currentTarget.style.borderColor = "#e8edf5";
                                                },
                                                className: "jsx-43adeaef94dddc0b" + " " + "route-highlight-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "52px",
                                                            height: "52px",
                                                            margin: "0 auto 0.8rem",
                                                            borderRadius: "50%",
                                                            background: "#eef3ff",
                                                            color: "#0052CC",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                            size: 25
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 773,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 760,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            color: "#7a8a9e",
                                                            fontWeight: 600,
                                                            marginBottom: "0.3rem"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: "Distance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 776,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.35rem",
                                                            fontWeight: 700,
                                                            color: "#0b1a2e"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: [
                                                            route.distanceKm,
                                                            " KM"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 787,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 738,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#f9fafc",
                                                    border: "1px solid #e8edf5",
                                                    borderRadius: "18px",
                                                    padding: "1.5rem 1.2rem",
                                                    textAlign: "center",
                                                    transition: "all 0.3s ease"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-5px)";
                                                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 82, 204, 0.10)";
                                                    e.currentTarget.style.borderColor = "#0052CC";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                    e.currentTarget.style.borderColor = "#e8edf5";
                                                },
                                                className: "jsx-43adeaef94dddc0b" + " " + "route-highlight-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "52px",
                                                            height: "52px",
                                                            margin: "0 auto 0.8rem",
                                                            borderRadius: "50%",
                                                            background: "#eef3ff",
                                                            color: "#0052CC",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 25
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 834,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 821,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            color: "#7a8a9e",
                                                            fontWeight: 600,
                                                            marginBottom: "0.3rem"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: "Travel Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 837,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.35rem",
                                                            fontWeight: 700,
                                                            color: "#0b1a2e"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: route.durationHrs
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 848,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 799,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#f9fafc",
                                                    border: "1px solid #e8edf5",
                                                    borderRadius: "18px",
                                                    padding: "1.5rem 1.2rem",
                                                    textAlign: "center",
                                                    transition: "all 0.3s ease"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-5px)";
                                                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 82, 204, 0.10)";
                                                    e.currentTarget.style.borderColor = "#0052CC";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                    e.currentTarget.style.borderColor = "#e8edf5";
                                                },
                                                className: "jsx-43adeaef94dddc0b" + " " + "route-highlight-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "52px",
                                                            height: "52px",
                                                            margin: "0 auto 0.8rem",
                                                            borderRadius: "50%",
                                                            background: "#eef3ff",
                                                            color: "#0052CC",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 25
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 895,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 882,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            color: "#7a8a9e",
                                                            fontWeight: 600,
                                                            marginBottom: "0.3rem"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: "Road Condition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 898,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.35rem",
                                                            fontWeight: 700,
                                                            color: "#16803c"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: route.roadCondition || "Excellent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 909,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 860,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#f9fafc",
                                                    border: "1px solid #e8edf5",
                                                    borderRadius: "18px",
                                                    padding: "1.5rem 1.2rem",
                                                    textAlign: "center",
                                                    transition: "all 0.3s ease"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-5px)";
                                                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 82, 204, 0.10)";
                                                    e.currentTarget.style.borderColor = "#0052CC";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                    e.currentTarget.style.borderColor = "#e8edf5";
                                                },
                                                className: "jsx-43adeaef94dddc0b" + " " + "route-highlight-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "52px",
                                                            height: "52px",
                                                            margin: "0 auto 0.8rem",
                                                            borderRadius: "50%",
                                                            background: "#eef3ff",
                                                            color: "#0052CC",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                            size: 25
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 956,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 943,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            color: "#7a8a9e",
                                                            fontWeight: 600,
                                                            marginBottom: "0.3rem"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: "Recommended Vehicle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 959,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "1.05rem",
                                                            fontWeight: 700,
                                                            color: "#0b1a2e",
                                                            lineHeight: "1.4"
                                                        },
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: route.recommendedVehicle || "12 Seater Force Urbania"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 970,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 921,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 729,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "2rem",
                                            padding: "1.2rem 1.5rem",
                                            background: "#f0f4fe",
                                            borderRadius: "16px",
                                            border: "1px solid #dce7ff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "0.6rem",
                                            textAlign: "center",
                                            color: "#0b1a2e",
                                            fontSize: "0.95rem",
                                            lineHeight: "1.6"
                                        },
                                        className: "jsx-43adeaef94dddc0b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 18,
                                                color: "#0052CC",
                                                style: {
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1001,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-43adeaef94dddc0b",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: route.origin
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 17
                                                    }, this),
                                                    " → ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-43adeaef94dddc0b",
                                                        children: route.destination
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 17
                                                    }, this),
                                                    " · ",
                                                    route.distanceKm,
                                                    " KM · ",
                                                    route.durationHrs,
                                                    " · Comfortable Force Urbania travel with a professional chauffeur."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1003,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 984,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "43adeaef94dddc0b",
                                children: "@media (width<=1000px){.route-highlights-grid.jsx-43adeaef94dddc0b{grid-template-columns:repeat(2,1fr)!important}}@media (width<=600px){.route-highlights-section.jsx-43adeaef94dddc0b{padding:3rem 0!important}.route-highlights-grid.jsx-43adeaef94dddc0b{grid-template-columns:1fr!important;gap:1rem!important}.route-highlight-card.jsx-43adeaef94dddc0b{padding:1.3rem 1rem!important}}"
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding",
                        style: {
                            padding: "4rem 0",
                            background: "#ffffff"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            style: {
                                maxWidth: "1280px",
                                margin: "0 auto",
                                padding: "0 1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                background: "#eef3ff",
                                                color: "#0052CC",
                                                padding: "0.25rem 1.2rem",
                                                borderRadius: "40px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1072,
                                                    columnNumber: 17
                                                }, this),
                                                " Route Details"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1059,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            children: [
                                                route.origin,
                                                " to ",
                                                route.destination,
                                                " Fare Estimate"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1074,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            children: "Final fare depends on dates, tolls, taxes, and trip duration."
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1084,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1052,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        overflowX: "auto",
                                        borderRadius: "16px",
                                        border: "1px solid #ecf0f7"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: "100%",
                                            borderCollapse: "collapse",
                                            minWidth: "600px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
                                                        color: "#FFF",
                                                        textAlign: "left"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "1rem 1.2rem",
                                                                fontWeight: 600
                                                            },
                                                            children: "Vehicle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 1118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "1rem 1.2rem",
                                                                fontWeight: 600
                                                            },
                                                            children: "Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 1121,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "1rem 1.2rem",
                                                                fontWeight: 600
                                                            },
                                                            children: "Estimated Round Trip"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 1124,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "1rem 1.2rem",
                                                                fontWeight: 600,
                                                                textAlign: "center"
                                                            },
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 1127,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1110,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: fleet.map((model, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: index < fleet.length - 1 ? "1px solid #ecf0f7" : "none",
                                                            transition: "0.2s",
                                                            cursor: "pointer"
                                                        },
                                                        className: "route-table-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "1rem 1.2rem"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            style: {
                                                                                display: "block"
                                                                            },
                                                                            children: model.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 1154,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                            style: {
                                                                                color: "#7a8a9e",
                                                                                fontSize: "0.75rem"
                                                                            },
                                                                            children: [
                                                                                model.capacity,
                                                                                " · ",
                                                                                model.luggageCapacity
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 1157,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 1153,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1152,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "1rem 1.2rem",
                                                                    fontWeight: 600
                                                                },
                                                                children: [
                                                                    formatCurrency(model.ratePerKm),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 400,
                                                                            color: "#7a8a9e",
                                                                            fontSize: "0.85rem"
                                                                        },
                                                                        children: "/km"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1166,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1164,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "1rem 1.2rem",
                                                                    fontWeight: 700,
                                                                    color: "#0b1a2e"
                                                                },
                                                                children: formatCurrency(Math.round(roundTripDistance * model.ratePerKm + model.driverAllowance * 3))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1176,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "1rem 1.2rem",
                                                                    textAlign: "center"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book ${model.name} from ${route.origin} to ${route.destination}`)}`,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "table-book-btn",
                                                                    style: {
                                                                        display: "inline-flex",
                                                                        alignItems: "center",
                                                                        gap: "0.4rem",
                                                                        padding: "0.4rem 1.2rem",
                                                                        borderRadius: "40px",
                                                                        background: "#0052CC",
                                                                        color: "#fff",
                                                                        fontWeight: 600,
                                                                        fontSize: "0.8rem",
                                                                        textDecoration: "none",
                                                                        transition: "0.2s",
                                                                        border: "none",
                                                                        cursor: "pointer"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 1216,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " Get Quote"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 1193,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1190,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, model.id, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1140,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1138,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 1102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1095,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "0.8rem",
                                        color: "#7a8a9e",
                                        textAlign: "center",
                                        marginTop: "1rem"
                                    },
                                    children: "* Estimates include driver allowance for 3 days. Final fare may vary based on actual route, tolls, and taxes."
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1225,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 1044,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 1040,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "why-urbania-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "why-urbania-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "why-urbania-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-badge",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1245,
                                                    columnNumber: 17
                                                }, this),
                                                "Why Choose HireUrbania"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "why-urbania-title",
                                            children: "Why Book Force Urbania With Us?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "why-urbania-description",
                                            children: "Premium Urbania rentals with professional service, transparent pricing, and comfortable travel across India."
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1253,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "why-urbania-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1263,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Transparent Pricing"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1267,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Clear fares with no hidden charges."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1262,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1275,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Verified Drivers"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Experienced and professional chauffeurs."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1280,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1273,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "24×7 Customer Support"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1289,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Assistance before and throughout your journey."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1291,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2d$front$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BusFront$3e$__["BusFront"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Premium Force Urbania"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1300,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Clean, comfortable, and well-maintained vehicles."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1302,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1308,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1307,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "GPS Enabled Vehicles"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1311,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Track your journey with GPS-enabled vehicles."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1319,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1318,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Sanitized Vehicles"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1322,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Clean and hygienic vehicles for every trip."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1330,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1329,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Quick & Easy Booking"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Book your Urbania online or through WhatsApp."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1335,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1328,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "why-urbania-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "why-urbania-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1341,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1340,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Trip Assistance"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1344,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Get route, travel, and trip-planning assistance."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1346,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1339,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 1241,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 1240,
                        columnNumber: 9
                    }, this),
                    cityGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-88295fed7c73eda7" + " " + "city-guide-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-88295fed7c73eda7" + " " + "city-guide-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CityGuide$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    cityData: cityGuide,
                                    route: route
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1356,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 1355,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "88295fed7c73eda7",
                                children: ".city-guide-section.jsx-88295fed7c73eda7{background:#fff;width:100%;padding:4rem 0;overflow:hidden}.city-guide-container.jsx-88295fed7c73eda7{box-sizing:border-box;width:100%;max-width:1280px;margin:0 auto;padding:0 1.5rem}@media (width<=1024px){.city-guide-section.jsx-88295fed7c73eda7{padding:3.5rem 0}.city-guide-container.jsx-88295fed7c73eda7{padding:0 1.25rem}}@media (width<=768px){.city-guide-section.jsx-88295fed7c73eda7{padding:3rem 0}.city-guide-container.jsx-88295fed7c73eda7{padding:0 1rem}}@media (width<=480px){.city-guide-section.jsx-88295fed7c73eda7{padding:2.5rem 0}.city-guide-container.jsx-88295fed7c73eda7{padding:0 .75rem}}@media (width<=359px){.city-guide-section.jsx-88295fed7c73eda7{padding:2rem 0}.city-guide-container.jsx-88295fed7c73eda7{padding:0 .6rem}}"
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 1354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-5bbb38c02dafb863" + " " + "how-booking-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5bbb38c02dafb863" + " " + "how-booking-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-section-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5bbb38c02dafb863" + " " + "booking-section-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-5bbb38c02dafb863",
                                                        children: "How Booking Works"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1425,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1423,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-5bbb38c02dafb863" + " " + "booking-section-title",
                                                children: [
                                                    "Book Your",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-5bbb38c02dafb863",
                                                        children: [
                                                            route.origin,
                                                            " to ",
                                                            route.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1430,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "Urbania in 4 Simple Steps"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1428,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-5bbb38c02dafb863" + " " + "booking-section-description",
                                                children: [
                                                    "Quick and hassle-free booking process for your ",
                                                    route.origin,
                                                    " to",
                                                    " ",
                                                    route.destination,
                                                    " Urbania Tempo Traveller journey."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1436,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 1422,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-steps-grid",
                                        children: [
                                            {
                                                step: "1",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1447,
                                                    columnNumber: 25
                                                }, this),
                                                title: "Contact Us",
                                                desc: `Reach out via WhatsApp or phone with your ${route.origin} to ${route.destination} travel details.`
                                            },
                                            {
                                                step: "2",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1453,
                                                    columnNumber: 25
                                                }, this),
                                                title: "Get Quote",
                                                desc: `Receive a transparent quote based on your ${route.origin} to ${route.destination} itinerary and group size.`
                                            },
                                            {
                                                step: "3",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1459,
                                                    columnNumber: 25
                                                }, this),
                                                title: "Confirm Booking",
                                                desc: `Pay a token advance to confirm your Urbania booking for the ${route.origin} to ${route.destination} route.`
                                            },
                                            {
                                                step: "4",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1465,
                                                    columnNumber: 25
                                                }, this),
                                                title: "Enjoy Travel",
                                                desc: `Our chauffeur arrives on time for your comfortable ${route.origin} to ${route.destination} journey.`
                                            }
                                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-5px)";
                                                    e.currentTarget.style.borderColor = "#0052CC";
                                                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 82, 204, 0.12)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.borderColor = "#ecf0f7";
                                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.02)";
                                                },
                                                className: "jsx-5bbb38c02dafb863" + " " + "booking-step-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-step-number",
                                                        children: item.step
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1487,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-step-icon",
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-step-title",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1493,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-step-description",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1496,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-step-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1499,
                                                        columnNumber: 19
                                                    }, this),
                                                    index < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-step-connector"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1502,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1470,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 1443,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = "#0052CC";
                                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 82, 204, 0.06)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "#ecf0f7";
                                            e.currentTarget.style.boxShadow = "none";
                                        },
                                        className: "jsx-5bbb38c02dafb863" + " " + "booking-quick-cta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-5bbb38c02dafb863" + " " + "booking-cta-text",
                                                children: [
                                                    "Ready to book your Urbania for the",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-5bbb38c02dafb863",
                                                        children: [
                                                            route.origin,
                                                            " to ",
                                                            route.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1522,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    "route?"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1520,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book Force Urbania from ${route.origin} to ${route.destination} - Trip Date: [Your Date] - Group Size: [Number]`)}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.35)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                },
                                                className: "jsx-5bbb38c02dafb863" + " " + "booking-cta-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1545,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-5bbb38c02dafb863",
                                                        children: "Book Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1546,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1528,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 1508,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 1420,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "5bbb38c02dafb863",
                                children: '.how-booking-section.jsx-5bbb38c02dafb863{box-sizing:border-box;background:#f9fafc;width:100%;padding:4rem 0;overflow:hidden}.how-booking-container.jsx-5bbb38c02dafb863{box-sizing:border-box;width:100%;max-width:1280px;margin:0 auto;padding:0 1.5rem}.booking-section-header.jsx-5bbb38c02dafb863{text-align:center;width:100%;max-width:780px;margin:0 auto 3rem}.booking-section-badge.jsx-5bbb38c02dafb863{color:#0052cc;box-sizing:border-box;background:#eef3ff;border-radius:40px;justify-content:center;align-items:center;gap:.5rem;padding:.25rem 1.2rem;font-size:.8rem;font-weight:600;display:inline-flex}.booking-section-title.jsx-5bbb38c02dafb863{color:#0b1a2e;overflow-wrap:anywhere;margin:.5rem 0 .75rem;font-size:2.3rem;font-weight:700;line-height:1.25}.booking-section-title.jsx-5bbb38c02dafb863 span.jsx-5bbb38c02dafb863{color:#0052cc}.booking-section-description.jsx-5bbb38c02dafb863{color:#4a5a6e;overflow-wrap:anywhere;margin:0;font-size:1.05rem;line-height:1.6}.booking-steps-grid.jsx-5bbb38c02dafb863{box-sizing:border-box;grid-template-columns:repeat(4,minmax(0,1fr));gap:2rem;width:100%;display:grid;position:relative}.booking-step-card.jsx-5bbb38c02dafb863{text-align:center;cursor:pointer;box-sizing:border-box;background:#fff;border:1px solid #ecf0f7;border-radius:24px;width:100%;min-width:0;padding:2rem 1.5rem;transition:transform .3s cubic-bezier(.4,0,.2,1),border-color .3s,box-shadow .3s;position:relative;overflow:hidden;box-shadow:0 4px 12px #00000005}.booking-step-number.jsx-5bbb38c02dafb863{color:#0052cc;box-sizing:border-box;background:#eef3ff;border-radius:50%;justify-content:center;align-items:center;width:50px;height:50px;margin:0 auto 1rem;font-size:1.5rem;font-weight:700;transition:background .3s,color .3s,transform .3s;display:flex}.booking-step-card.jsx-5bbb38c02dafb863:hover .booking-step-number.jsx-5bbb38c02dafb863{color:#fff;background:#0052cc;transform:scale(1.08)}.booking-step-icon.jsx-5bbb38c02dafb863{color:#0052cc;justify-content:center;align-items:center;margin-bottom:.5rem;transition:transform .3s;display:flex}.booking-step-card.jsx-5bbb38c02dafb863:hover .booking-step-icon.jsx-5bbb38c02dafb863{transform:scale(1.1)}.booking-step-title.jsx-5bbb38c02dafb863{color:#0b1a2e;margin:0 0 .5rem;font-size:1.1rem;font-weight:700;line-height:1.4;transition:color .3s}.booking-step-card.jsx-5bbb38c02dafb863:hover .booking-step-title.jsx-5bbb38c02dafb863{color:#0052cc}.booking-step-description.jsx-5bbb38c02dafb863{color:#4a5a6e;overflow-wrap:anywhere;margin:0;font-size:.9rem;line-height:1.6;transition:color .3s}.booking-step-card.jsx-5bbb38c02dafb863:hover .booking-step-description.jsx-5bbb38c02dafb863{color:#1a2634}.booking-step-accent.jsx-5bbb38c02dafb863{transform-origin:0;background:linear-gradient(90deg,#0052cc 0%,#0770e3 100%);height:3px;transition:transform .35s cubic-bezier(.4,0,.2,1);position:absolute;bottom:0;left:0;right:0;transform:scaleX(0)}.booking-step-card.jsx-5bbb38c02dafb863:hover .booking-step-accent.jsx-5bbb38c02dafb863{transform:scaleX(1)}.booking-step-connector.jsx-5bbb38c02dafb863{opacity:.3;pointer-events:none;background:#0052cc;width:2rem;height:2px;position:absolute;top:50%;right:-2rem;transform:translateY(-50%)}.booking-quick-cta.jsx-5bbb38c02dafb863{text-align:center;box-sizing:border-box;background:#fff;border:1px solid #ecf0f7;border-radius:20px;width:100%;margin-top:3rem;padding:2rem;transition:border-color .3s,box-shadow .3s}.booking-cta-text.jsx-5bbb38c02dafb863{color:#4a5a6e;overflow-wrap:anywhere;margin:0 0 1rem;font-size:1rem;line-height:1.5}.booking-cta-text.jsx-5bbb38c02dafb863 strong.jsx-5bbb38c02dafb863{color:#0b1a2e;font-weight:700}.booking-cta-btn.jsx-5bbb38c02dafb863{color:#fff;cursor:pointer;box-sizing:border-box;background:#25d366;border-radius:50px;justify-content:center;align-items:center;gap:.6rem;min-height:46px;padding:.8rem 2.5rem;font-size:1rem;font-weight:700;text-decoration:none;transition:transform .3s,box-shadow .3s;display:inline-flex}.booking-cta-btn.jsx-5bbb38c02dafb863 svg{flex-shrink:0}@media (width<=1200px){.how-booking-container.jsx-5bbb38c02dafb863{padding:0 1.25rem}.booking-steps-grid.jsx-5bbb38c02dafb863{gap:1.5rem}.booking-step-card.jsx-5bbb38c02dafb863{padding:1.75rem 1.25rem}.booking-step-connector.jsx-5bbb38c02dafb863{width:1.5rem;right:-1.5rem}}@media (width<=1024px){.how-booking-section.jsx-5bbb38c02dafb863{padding:3.5rem 0}.booking-section-header.jsx-5bbb38c02dafb863{margin-bottom:2.5rem}.booking-section-title.jsx-5bbb38c02dafb863{font-size:2rem}.booking-steps-grid.jsx-5bbb38c02dafb863{grid-template-columns:repeat(2,minmax(0,1fr));gap:1.5rem}.booking-step-card.jsx-5bbb38c02dafb863{padding:1.75rem 1.25rem}.booking-step-connector.jsx-5bbb38c02dafb863{display:none}.booking-quick-cta.jsx-5bbb38c02dafb863{margin-top:2.5rem}}@media (width<=768px){.how-booking-section.jsx-5bbb38c02dafb863{padding:3rem 0}.how-booking-container.jsx-5bbb38c02dafb863{padding:0 1rem}.booking-section-header.jsx-5bbb38c02dafb863{margin-bottom:2rem}.booking-section-badge.jsx-5bbb38c02dafb863{padding:.25rem 1rem;font-size:.75rem}.booking-section-title.jsx-5bbb38c02dafb863{font-size:1.8rem;line-height:1.3}.booking-section-description.jsx-5bbb38c02dafb863{font-size:.95rem}.booking-steps-grid.jsx-5bbb38c02dafb863{grid-template-columns:1fr;gap:1rem}.booking-step-card.jsx-5bbb38c02dafb863{text-align:left;border-radius:18px;grid-template-columns:52px 1fr;grid-template-areas:"number icon""number title""number desc";column-gap:1rem;padding:1.25rem;display:grid}.booking-step-number.jsx-5bbb38c02dafb863{grid-area:number;align-self:center;width:48px;height:48px;margin:0;font-size:1.3rem}.booking-step-icon.jsx-5bbb38c02dafb863{grid-area:icon;justify-content:flex-start;margin-bottom:.15rem}.booking-step-title.jsx-5bbb38c02dafb863{grid-area:title;margin-bottom:.2rem;font-size:1rem}.booking-step-description.jsx-5bbb38c02dafb863{grid-area:desc;font-size:.84rem;line-height:1.5}.booking-step-accent.jsx-5bbb38c02dafb863{height:2px}.booking-quick-cta.jsx-5bbb38c02dafb863{border-radius:17px;margin-top:2rem;padding:1.5rem}.booking-cta-text.jsx-5bbb38c02dafb863{font-size:.92rem}}@media (width<=600px){.booking-step-card.jsx-5bbb38c02dafb863{grid-template-columns:46px 1fr;column-gap:.85rem;padding:1.1rem}.booking-step-number.jsx-5bbb38c02dafb863{width:44px;height:44px;font-size:1.2rem}.booking-step-icon.jsx-5bbb38c02dafb863 svg{width:22px;height:22px}.booking-step-title.jsx-5bbb38c02dafb863{font-size:.95rem}.booking-step-description.jsx-5bbb38c02dafb863{font-size:.8rem}}@media (width<=480px){.how-booking-section.jsx-5bbb38c02dafb863{padding:2.5rem 0}.how-booking-container.jsx-5bbb38c02dafb863{padding:0 .75rem}.booking-section-header.jsx-5bbb38c02dafb863{margin-bottom:1.5rem}.booking-section-badge.jsx-5bbb38c02dafb863{gap:.4rem;padding:.25rem .85rem;font-size:.7rem}.booking-section-badge.jsx-5bbb38c02dafb863 svg{width:13px;height:13px}.booking-section-title.jsx-5bbb38c02dafb863{font-size:1.5rem;line-height:1.3}.booking-section-description.jsx-5bbb38c02dafb863{font-size:.84rem;line-height:1.55}.booking-steps-grid.jsx-5bbb38c02dafb863{gap:.8rem}.booking-step-card.jsx-5bbb38c02dafb863{border-radius:15px;grid-template-columns:40px 1fr;column-gap:.75rem;padding:1rem}.booking-step-number.jsx-5bbb38c02dafb863{width:38px;height:38px;font-size:1rem}.booking-step-icon.jsx-5bbb38c02dafb863{margin-bottom:.1rem}.booking-step-icon.jsx-5bbb38c02dafb863 svg{width:20px;height:20px}.booking-step-title.jsx-5bbb38c02dafb863{margin-bottom:.15rem;font-size:.9rem}.booking-step-description.jsx-5bbb38c02dafb863{font-size:.76rem;line-height:1.45}.booking-quick-cta.jsx-5bbb38c02dafb863{border-radius:14px;margin-top:1.5rem;padding:1.1rem .9rem}.booking-cta-text.jsx-5bbb38c02dafb863{font-size:.8rem;line-height:1.5}.booking-cta-btn.jsx-5bbb38c02dafb863{border-radius:12px;width:100%;min-height:44px;padding:.7rem 1rem;font-size:.85rem}.booking-cta-btn.jsx-5bbb38c02dafb863 svg{width:18px;height:18px}}@media (width<=359px){.how-booking-section.jsx-5bbb38c02dafb863{padding:2rem 0}.how-booking-container.jsx-5bbb38c02dafb863{padding:0 .6rem}.booking-section-title.jsx-5bbb38c02dafb863{font-size:1.35rem}.booking-section-description.jsx-5bbb38c02dafb863{font-size:.77rem}.booking-section-badge.jsx-5bbb38c02dafb863{padding:.22rem .7rem;font-size:.65rem}.booking-step-card.jsx-5bbb38c02dafb863{border-radius:13px;grid-template-columns:36px 1fr;column-gap:.65rem;padding:.85rem}.booking-step-number.jsx-5bbb38c02dafb863{width:34px;height:34px;font-size:.9rem}.booking-step-icon.jsx-5bbb38c02dafb863 svg{width:18px;height:18px}.booking-step-title.jsx-5bbb38c02dafb863{font-size:.84rem}.booking-step-description.jsx-5bbb38c02dafb863{font-size:.7rem;line-height:1.4}.booking-quick-cta.jsx-5bbb38c02dafb863{border-radius:12px;padding:.9rem .7rem}.booking-cta-text.jsx-5bbb38c02dafb863{font-size:.72rem}.booking-cta-btn.jsx-5bbb38c02dafb863{min-height:42px;padding:.65rem .75rem;font-size:.78rem}}@media (hover:none){.booking-step-card.jsx-5bbb38c02dafb863,.booking-step-number.jsx-5bbb38c02dafb863,.booking-step-icon.jsx-5bbb38c02dafb863,.booking-step-accent.jsx-5bbb38c02dafb863,.booking-quick-cta.jsx-5bbb38c02dafb863,.booking-cta-btn.jsx-5bbb38c02dafb863{transition:none}}@media (prefers-reduced-motion:reduce){.booking-step-card.jsx-5bbb38c02dafb863,.booking-step-number.jsx-5bbb38c02dafb863,.booking-step-icon.jsx-5bbb38c02dafb863,.booking-step-accent.jsx-5bbb38c02dafb863,.booking-quick-cta.jsx-5bbb38c02dafb863,.booking-cta-btn.jsx-5bbb38c02dafb863{transition:none}}'
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 1419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-c349b943f3940e88" + " " + "route-guide-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c349b943f3940e88" + " " + "route-guide-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c349b943f3940e88" + " " + "route-guide-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c349b943f3940e88" + " " + "route-guide-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2311,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c349b943f3940e88",
                                                        children: "Route Guide"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2312,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2310,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-c349b943f3940e88" + " " + "route-guide-title",
                                                children: [
                                                    "Complete Travel Guide for",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-c349b943f3940e88",
                                                        children: [
                                                            route.origin,
                                                            " to ",
                                                            route.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2317,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-c349b943f3940e88" + " " + "route-guide-description",
                                                children: [
                                                    "Everything you need to know about your ",
                                                    route.origin,
                                                    " to",
                                                    " ",
                                                    route.destination,
                                                    " journey including route details, stopovers, and travel tips."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2322,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 2309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c349b943f3940e88" + " " + "route-guide-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c349b943f3940e88" + " " + "route-overview-grid",
                                                children: [
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 20,
                                                            color: "#0052CC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 2335,
                                                            columnNumber: 27
                                                        }, this),
                                                        label: "Route",
                                                        value: `${route.origin} → ${route.destination}`
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                            size: 20,
                                                            color: "#0052CC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 2340,
                                                            columnNumber: 27
                                                        }, this),
                                                        label: "Distance",
                                                        value: `${route.distanceKm} KM`
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 20,
                                                            color: "#0052CC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 2345,
                                                            columnNumber: 27
                                                        }, this),
                                                        label: "Travel Time",
                                                        value: route.durationHrs
                                                    },
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                            size: 20,
                                                            color: "#0052CC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 2350,
                                                            columnNumber: 27
                                                        }, this),
                                                        label: "Road Type",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoadType"])(route.category)
                                                    }
                                                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c349b943f3940e88" + " " + "route-overview-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c349b943f3940e88" + " " + "route-overview-icon",
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2356,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c349b943f3940e88" + " " + "route-overview-content",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "route-overview-label",
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2359,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "route-overview-value",
                                                                        children: item.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2361,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2358,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2355,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c349b943f3940e88" + " " + "route-details-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c349b943f3940e88" + " " + "route-detail-column",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-c349b943f3940e88" + " " + "route-detail-title",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2372,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c349b943f3940e88",
                                                                        children: "Route Information"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2373,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2371,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-list",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "route-info-row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-label",
                                                                                children: "Highway Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2378,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-value",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHighwayName"])(route.origin, route.destination)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2380,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2377,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "route-info-row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-label",
                                                                                children: "Road Condition"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2386,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: route.distanceKm > 400 ? "#b33d00" : "#16803c"
                                                                                },
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-value",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoadCondition"])(route.distanceKm)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2388,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2385,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "route-info-row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-label",
                                                                                children: "Night Travel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2399,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: route.distanceKm < 300 ? "#16803c" : "#b33d00"
                                                                                },
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-value",
                                                                                children: route.distanceKm < 300 ? "✓ Safe" : "⚠️ Not Recommended"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2401,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2398,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "route-info-row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-label",
                                                                                children: "Best Season"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2414,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "route-info-value",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBestSeason"])(route.destination)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2416,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2413,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2376,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2370,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c349b943f3940e88" + " " + "route-detail-column",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-c349b943f3940e88" + " " + "route-detail-title",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                                        size: 18,
                                                                        color: "#F59E0B"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2426,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c349b943f3940e88",
                                                                        children: "Quick Tips"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2427,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2425,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c349b943f3940e88" + " " + "quick-tips-list",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "quick-tip quick-tip-green",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                size: 16,
                                                                                color: "#10b981"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2432,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88",
                                                                                children: [
                                                                                    "Start early from ",
                                                                                    route.origin,
                                                                                    " to avoid traffic"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2434,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2431,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "quick-tip quick-tip-yellow",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                                                                                size: 16,
                                                                                color: "#d97706"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2440,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88",
                                                                                children: "Fuel up before entering remote stretches"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2442,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2439,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "quick-tip quick-tip-blue",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                                size: 16,
                                                                                color: "#0284c7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2446,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-c349b943f3940e88",
                                                                                children: "Carry camera for scenic views on the route"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2448,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2445,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2430,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2424,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2368,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c349b943f3940e88" + " " + "route-guide-accordion-section",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleSection("stopovers"),
                                                        "aria-expanded": expandedSections.stopovers,
                                                        className: "jsx-c349b943f3940e88" + " " + "route-guide-accordion-button",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-c349b943f3940e88" + " " + "route-guide-accordion-title",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2463,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c349b943f3940e88",
                                                                        children: "Recommended Stopovers"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2464,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2462,
                                                                columnNumber: 19
                                                            }, this),
                                                            expandedSections.stopovers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2468,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2470,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2456,
                                                        columnNumber: 17
                                                    }, this),
                                                    expandedSections.stopovers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c349b943f3940e88" + " " + "stopovers-grid",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStopovers"])(route.distanceKm).map((stopover, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c349b943f3940e88" + " " + "stopover-card",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "stopover-icon",
                                                                        children: [
                                                                            stopover.icon === "coffee" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2479,
                                                                                columnNumber: 58
                                                                            }, this),
                                                                            stopover.icon === "food" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2481,
                                                                                columnNumber: 56
                                                                            }, this),
                                                                            stopover.icon === "hotel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2483,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            stopover.icon === "rest" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2485,
                                                                                columnNumber: 56
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2478,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "stopover-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "stopover-name",
                                                                                children: stopover.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2489,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-c349b943f3940e88" + " " + "stopover-purpose",
                                                                                children: stopover.purpose
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2491,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2488,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2477,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2475,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2455,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c349b943f3940e88" + " " + "travel-tips-section",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>toggleSection("tips"),
                                                        "aria-expanded": expandedSections.tips,
                                                        className: "jsx-c349b943f3940e88" + " " + "route-guide-accordion-button",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-c349b943f3940e88" + " " + "route-guide-accordion-title",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2510,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c349b943f3940e88",
                                                                        children: "Pro Travel Tips"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2511,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2509,
                                                                columnNumber: 19
                                                            }, this),
                                                            expandedSections.tips ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2515,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2517,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2503,
                                                        columnNumber: 17
                                                    }, this),
                                                    expandedSections.tips && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-c349b943f3940e88" + " " + "travel-tips-grid",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTravelTips"])(route).map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c349b943f3940e88" + " " + "travel-tip-card",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c349b943f3940e88" + " " + "travel-tip-check",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2525,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-c349b943f3940e88",
                                                                        children: tip
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2527,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2524,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2522,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2502,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 2330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 2307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "c349b943f3940e88",
                                children: ".route-guide-section.jsx-c349b943f3940e88{background:#fff;width:100%;padding:4rem 0;overflow:hidden}.route-guide-container.jsx-c349b943f3940e88{box-sizing:border-box;width:100%;max-width:1280px;margin:0 auto;padding:0 1.5rem}.route-guide-header.jsx-c349b943f3940e88{text-align:center;width:100%;max-width:780px;margin:0 auto 2.5rem}.route-guide-badge.jsx-c349b943f3940e88{color:#0052cc;letter-spacing:.2px;background:#eef3ff;border-radius:40px;justify-content:center;align-items:center;gap:.5rem;padding:.3rem 1.2rem;font-size:.8rem;font-weight:600;line-height:1.4;display:inline-flex}.route-guide-title.jsx-c349b943f3940e88{color:#0b1a2e;overflow-wrap:anywhere;margin:.7rem 0 .75rem;font-size:max(1.8rem,min(3vw,2.3rem));font-weight:700;line-height:1.25}.route-guide-title.jsx-c349b943f3940e88 span.jsx-c349b943f3940e88{color:#0052cc}.route-guide-description.jsx-c349b943f3940e88{color:#4a5a6e;margin:0;font-size:1rem;line-height:1.7}.route-guide-card.jsx-c349b943f3940e88{box-sizing:border-box;background:#fff;border:1px solid #ecf0f7;border-radius:24px;width:100%;padding:2rem;box-shadow:0 8px 24px #0014320a}.route-overview-grid.jsx-c349b943f3940e88{border-bottom:1px solid #ecf0f7;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.25rem;margin-bottom:2rem;padding-bottom:2rem;display:grid}.route-overview-item.jsx-c349b943f3940e88{background:#f9fafc;border-radius:12px;align-items:center;gap:.75rem;min-width:0;padding:.75rem;transition:background-color .3s,transform .3s;display:flex}.route-overview-item.jsx-c349b943f3940e88:hover{background:#f0f4fe;transform:translateY(-2px)}.route-overview-icon.jsx-c349b943f3940e88{flex:none;justify-content:center;align-items:center;display:flex}.route-overview-content.jsx-c349b943f3940e88{min-width:0}.route-overview-label.jsx-c349b943f3940e88{color:#7a8a9e;margin-bottom:.15rem;font-size:.7rem;line-height:1.3}.route-overview-value.jsx-c349b943f3940e88{color:#0b1a2e;overflow-wrap:anywhere;word-break:break-word;font-size:.9rem;font-weight:600;line-height:1.4}.route-details-grid.jsx-c349b943f3940e88{border-bottom:1px solid #ecf0f7;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.5rem;margin-bottom:2rem;padding-bottom:2rem;display:grid}.route-detail-column.jsx-c349b943f3940e88{min-width:0}.route-detail-title.jsx-c349b943f3940e88{color:#0b1a2e;align-items:center;gap:.5rem;margin:0 0 1rem;font-size:1rem;font-weight:700;line-height:1.4;display:flex}.route-info-list.jsx-c349b943f3940e88,.quick-tips-list.jsx-c349b943f3940e88{flex-direction:column;gap:.75rem;display:flex}.route-info-row.jsx-c349b943f3940e88{background:#f9fafc;border-radius:8px;justify-content:space-between;align-items:flex-start;gap:1rem;min-width:0;padding:.65rem .75rem;font-size:.9rem;line-height:1.4;display:flex}.route-info-label.jsx-c349b943f3940e88{color:#4a5a6e;flex:none}.route-info-value.jsx-c349b943f3940e88{color:#0b1a2e;text-align:right;overflow-wrap:anywhere;min-width:0;font-weight:600}.quick-tip.jsx-c349b943f3940e88{color:#1a2634;border-radius:8px;align-items:flex-start;gap:.5rem;padding:.65rem .75rem;font-size:.85rem;line-height:1.5;display:flex}.quick-tip.jsx-c349b943f3940e88 svg{flex:none;margin-top:2px}.quick-tip-green.jsx-c349b943f3940e88{background:#f0fdf4}.quick-tip-yellow.jsx-c349b943f3940e88{background:#fef3c7}.quick-tip-blue.jsx-c349b943f3940e88{background:#e0f2fe}.route-guide-accordion-section.jsx-c349b943f3940e88{border-bottom:1px solid #ecf0f7;margin-bottom:1.5rem;padding-bottom:1.5rem}.travel-tips-section.jsx-c349b943f3940e88{width:100%}.route-guide-accordion-button.jsx-c349b943f3940e88{color:#0b1a2e;cursor:pointer;text-align:left;background:0 0;border:none;justify-content:space-between;align-items:center;gap:1rem;width:100%;padding:.35rem 0;font-family:inherit;display:flex}.route-guide-accordion-title.jsx-c349b943f3940e88{color:#0b1a2e;align-items:center;gap:.5rem;min-width:0;font-size:1rem;font-weight:700;line-height:1.4;display:flex}.route-guide-accordion-title.jsx-c349b943f3940e88 span.jsx-c349b943f3940e88{overflow-wrap:anywhere}.stopovers-grid.jsx-c349b943f3940e88{grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;margin-top:1rem;display:grid}.stopover-card.jsx-c349b943f3940e88{background:#f9fafc;border-radius:12px;align-items:flex-start;gap:.75rem;min-width:0;padding:1rem;transition:background-color .3s,transform .3s;display:flex}.stopover-card.jsx-c349b943f3940e88:hover{background:#f0f4fe;transform:translateY(-2px)}.stopover-icon.jsx-c349b943f3940e88{color:#0052cc;background:#eef3ff;border-radius:50%;flex:0 0 32px;justify-content:center;align-items:center;width:32px;height:32px;display:flex}.stopover-content.jsx-c349b943f3940e88{min-width:0}.stopover-name.jsx-c349b943f3940e88{color:#0b1a2e;overflow-wrap:anywhere;font-size:.85rem;font-weight:600;line-height:1.4}.stopover-purpose.jsx-c349b943f3940e88{color:#4a5a6e;overflow-wrap:anywhere;margin-top:.15rem;font-size:.75rem;line-height:1.45}.travel-tips-grid.jsx-c349b943f3940e88{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;margin-top:1rem;display:grid}.travel-tip-card.jsx-c349b943f3940e88{color:#1a2634;background:#f0f4fe;border-radius:10px;align-items:flex-start;gap:.5rem;min-width:0;padding:.75rem;font-size:.85rem;line-height:1.5;display:flex}.travel-tip-check.jsx-c349b943f3940e88{color:#0052cc;flex:none;font-weight:700}@media (width<=1199px){.route-guide-container.jsx-c349b943f3940e88{padding:0 1.25rem}.route-guide-card.jsx-c349b943f3940e88{padding:1.75rem}.route-overview-grid.jsx-c349b943f3940e88,.stopovers-grid.jsx-c349b943f3940e88{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (width<=768px){.route-guide-section.jsx-c349b943f3940e88{padding:3rem 0}.route-guide-container.jsx-c349b943f3940e88{padding:0 1rem}.route-guide-header.jsx-c349b943f3940e88{margin-bottom:2rem}.route-guide-title.jsx-c349b943f3940e88{font-size:max(1.6rem,min(5vw,2rem));line-height:1.3}.route-guide-description.jsx-c349b943f3940e88{font-size:.92rem;line-height:1.65}.route-guide-card.jsx-c349b943f3940e88{border-radius:18px;padding:1.25rem}.route-overview-grid.jsx-c349b943f3940e88{grid-template-columns:repeat(2,minmax(0,1fr));gap:.85rem;margin-bottom:1.5rem;padding-bottom:1.5rem}.route-overview-item.jsx-c349b943f3940e88{gap:.6rem;padding:.7rem}.route-overview-value.jsx-c349b943f3940e88{font-size:.82rem}.route-details-grid.jsx-c349b943f3940e88{grid-template-columns:1fr;gap:1.5rem;margin-bottom:1.5rem;padding-bottom:1.5rem}.stopovers-grid.jsx-c349b943f3940e88{grid-template-columns:repeat(2,minmax(0,1fr))}.travel-tips-grid.jsx-c349b943f3940e88{grid-template-columns:1fr}}@media (width<=480px){.route-guide-section.jsx-c349b943f3940e88{padding:2.5rem 0}.route-guide-container.jsx-c349b943f3940e88{padding:0 .75rem}.route-guide-header.jsx-c349b943f3940e88{margin-bottom:1.5rem}.route-guide-badge.jsx-c349b943f3940e88{padding:.3rem .9rem;font-size:.75rem}.route-guide-title.jsx-c349b943f3940e88{margin-top:.65rem;font-size:1.5rem;line-height:1.3}.route-guide-description.jsx-c349b943f3940e88{font-size:.85rem;line-height:1.6}.route-guide-card.jsx-c349b943f3940e88{border-radius:16px;padding:1rem}.route-overview-grid.jsx-c349b943f3940e88{grid-template-columns:1fr;gap:.7rem;margin-bottom:1.25rem;padding-bottom:1.25rem}.route-overview-item.jsx-c349b943f3940e88{padding:.75rem}.route-overview-label.jsx-c349b943f3940e88{font-size:.68rem}.route-overview-value.jsx-c349b943f3940e88{font-size:.85rem}.route-details-grid.jsx-c349b943f3940e88{gap:1.25rem;margin-bottom:1.25rem;padding-bottom:1.25rem}.route-detail-title.jsx-c349b943f3940e88,.route-guide-accordion-title.jsx-c349b943f3940e88{font-size:.92rem}.route-info-row.jsx-c349b943f3940e88{flex-direction:column;align-items:flex-start;gap:.25rem;padding:.65rem .7rem;font-size:.82rem}.route-info-value.jsx-c349b943f3940e88{text-align:left}.quick-tip.jsx-c349b943f3940e88{padding:.65rem;font-size:.8rem}.route-guide-accordion-section.jsx-c349b943f3940e88{margin-bottom:1.25rem;padding-bottom:1.25rem}.stopovers-grid.jsx-c349b943f3940e88{grid-template-columns:1fr;gap:.7rem}.stopover-card.jsx-c349b943f3940e88{padding:.8rem}.stopover-name.jsx-c349b943f3940e88{font-size:.82rem}.stopover-purpose.jsx-c349b943f3940e88{font-size:.72rem}.travel-tips-grid.jsx-c349b943f3940e88{grid-template-columns:1fr;gap:.65rem}.travel-tip-card.jsx-c349b943f3940e88{padding:.7rem;font-size:.8rem}}@media (width<=359px){.route-guide-section.jsx-c349b943f3940e88{padding:2rem 0}.route-guide-container.jsx-c349b943f3940e88{padding:0 .6rem}.route-guide-card.jsx-c349b943f3940e88{border-radius:14px;padding:.8rem}.route-guide-title.jsx-c349b943f3940e88{font-size:1.35rem}.route-guide-description.jsx-c349b943f3940e88{font-size:.8rem}.route-overview-item.jsx-c349b943f3940e88{padding:.65rem}.route-overview-value.jsx-c349b943f3940e88{font-size:.8rem}.route-info-row.jsx-c349b943f3940e88{font-size:.78rem}.quick-tip.jsx-c349b943f3940e88{font-size:.76rem}.stopover-card.jsx-c349b943f3940e88{padding:.7rem}.travel-tip-card.jsx-c349b943f3940e88{font-size:.76rem}}@media (hover:none){.route-overview-item.jsx-c349b943f3940e88:hover,.stopover-card.jsx-c349b943f3940e88:hover{background:#f9fafc;transform:none}}@media (prefers-reduced-motion:reduce){.route-overview-item.jsx-c349b943f3940e88,.stopover-card.jsx-c349b943f3940e88{transition:none}}"
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 2306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding",
                        style: {
                            padding: "4rem 0",
                            background: "#f9fafc"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "1280px",
                                margin: "0 auto",
                                padding: "0 1.5rem"
                            },
                            className: "jsx-ce4acdc41ab8ce30" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 3rem"
                                    },
                                    className: "jsx-ce4acdc41ab8ce30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                background: "#eef3ff",
                                                color: "#0052CC",
                                                padding: "0.25rem 1.2rem",
                                                borderRadius: "40px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600
                                            },
                                            className: "jsx-ce4acdc41ab8ce30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3217,
                                                    columnNumber: 17
                                                }, this),
                                                " Travel Solutions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            className: "jsx-ce4acdc41ab8ce30",
                                            children: [
                                                "Perfect Travel Solutions for",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#0052CC"
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30",
                                                    children: [
                                                        route.origin,
                                                        " to ",
                                                        route.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3228,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            className: "jsx-ce4acdc41ab8ce30",
                                            children: [
                                                "Whether you're traveling with family, friends, or colleagues, we have the perfect Urbania solution for your ",
                                                route.origin,
                                                " to",
                                                " ",
                                                route.destination,
                                                " journey."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                        gap: "2rem"
                                    },
                                    className: "jsx-ce4acdc41ab8ce30",
                                    children: [
                                        {
                                            icon: "👨‍👩‍👧‍👦",
                                            title: "Family Travel",
                                            description: `Comfortable and spacious Urbania for family trips from ${route.origin} to ${route.destination}. Perfect for vacations, reunions, and weekend getaways.`,
                                            features: [
                                                "Comfortable for elderly & kids",
                                                "Ample luggage space",
                                                "Flexible stops for rest",
                                                "AC comfort throughout journey"
                                            ],
                                            recommendedSeater: route.distanceKm < 300 ? "9/12 Seater" : "12/16 Seater",
                                            gradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9)"
                                        },
                                        {
                                            icon: "👥",
                                            title: "Group Tours",
                                            description: `Plan your group trip from ${route.origin} to ${route.destination} with our spacious Urbania fleet. Ideal for friends, colleagues, and tour groups.`,
                                            features: [
                                                "Large group capacity",
                                                "Multiple vehicle booking",
                                                "Coordination support",
                                                "Flexible itinerary"
                                            ],
                                            recommendedSeater: route.distanceKm < 300 ? "12/16 Seater" : "16/20 Seater",
                                            gradient: "linear-gradient(135deg, #e3f2fd, #bbdefb)"
                                        },
                                        {
                                            icon: "💼",
                                            title: "Corporate Travel",
                                            description: `Professional Urbania service for corporate travel from ${route.origin} to ${route.destination}. Perfect for offsites, client meetings, and business trips.`,
                                            features: [
                                                "Professional drivers",
                                                "On-time guarantee",
                                                "Premium comfort",
                                                "Wi-Fi on request"
                                            ],
                                            recommendedSeater: "9/12 Seater",
                                            gradient: "linear-gradient(135deg, #f3e5f5, #e1bee7)"
                                        },
                                        {
                                            icon: "🛕",
                                            title: "Pilgrimage Tours",
                                            description: `Spiritual journey from ${route.origin} to ${route.destination} with our comfortable Urbania. Experience divine travel with peace and comfort.`,
                                            features: [
                                                "Overnight journey option",
                                                "Early morning darshan arrival",
                                                "Temple-to-temple service",
                                                "Experienced pilgrimage drivers"
                                            ],
                                            recommendedSeater: route.distanceKm < 300 ? "9/12 Seater" : "12/16 Seater",
                                            gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)"
                                        },
                                        {
                                            icon: "💒",
                                            title: "Wedding Transport",
                                            description: `Elegant Urbania fleet for wedding guests traveling from ${route.origin} to ${route.destination}. Make your special day memorable with premium group transport.`,
                                            features: [
                                                "One-way & round trip options",
                                                "Large group capacity",
                                                "Multiple vehicle booking",
                                                "Coordination support"
                                            ],
                                            recommendedSeater: "16/20 Seater",
                                            gradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)"
                                        },
                                        {
                                            icon: "🎓",
                                            title: "Educational Tours",
                                            description: `Reliable Urbania service for college trips, school excursions, and educational tours from ${route.origin} to ${route.destination}.`,
                                            features: [
                                                "Safe & reliable drivers",
                                                "Comfortable seating",
                                                "On-time arrival",
                                                "Flexible scheduling"
                                            ],
                                            recommendedSeater: route.distanceKm < 300 ? "12/16 Seater" : "16/20 Seater",
                                            gradient: "linear-gradient(135deg, #e8eaf6, #c5cae9)"
                                        }
                                    ].map((solution, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "#ffffff",
                                                borderRadius: "24px",
                                                padding: "1.8rem",
                                                border: "1px solid #ecf0f7",
                                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                                                cursor: "pointer",
                                                transform: "scale(1)"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "scale(1.03)";
                                                e.currentTarget.style.borderColor = "#0052CC";
                                                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 82, 204, 0.12)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.borderColor = "#ecf0f7";
                                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.02)";
                                            },
                                            className: "jsx-ce4acdc41ab8ce30" + " " + "travel-solution-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: "56px",
                                                        height: "56px",
                                                        borderRadius: "16px",
                                                        background: solution.gradient,
                                                        fontSize: "2rem",
                                                        marginBottom: "1rem",
                                                        transition: "transform 0.3s ease"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30" + " " + "solution-icon",
                                                    children: solution.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3364,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.2rem",
                                                        fontWeight: 700,
                                                        color: "#0b1a2e",
                                                        marginBottom: "0.5rem",
                                                        transition: "color 0.3s ease"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.color = "#0052CC";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.color = "#0b1a2e";
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30" + " " + "solution-title",
                                                    children: solution.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3390,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.9rem",
                                                        color: "#4a5a6e",
                                                        lineHeight: "1.6",
                                                        marginBottom: "1rem"
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30",
                                                    children: solution.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: "1rem"
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30",
                                                    children: solution.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                                padding: "0.25rem 0",
                                                                fontSize: "0.85rem",
                                                                color: "#1a2634"
                                                            },
                                                            className: "jsx-ce4acdc41ab8ce30",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 14,
                                                                    color: "#0052CC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3435,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-ce4acdc41ab8ce30",
                                                                    children: feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3436,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3424,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "0.5rem 1rem",
                                                        background: "#f0f4fe",
                                                        borderRadius: "12px",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        marginBottom: "1rem"
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "0.75rem",
                                                                color: "#7a8a9e"
                                                            },
                                                            className: "jsx-ce4acdc41ab8ce30",
                                                            children: "Recommended"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3453,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "0.85rem",
                                                                fontWeight: 700,
                                                                color: "#0052CC"
                                                            },
                                                            className: "jsx-ce4acdc41ab8ce30",
                                                            children: solution.recommendedSeater
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3456,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3442,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book ${solution.title} from ${route.origin} to ${route.destination}`)}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "0.5rem",
                                                        width: "100%",
                                                        padding: "0.7rem 1.5rem",
                                                        borderRadius: "40px",
                                                        background: "#0052CC",
                                                        color: "#fff",
                                                        fontWeight: 600,
                                                        fontSize: "0.9rem",
                                                        textDecoration: "none",
                                                        transition: "all 0.3s ease",
                                                        border: "none",
                                                        cursor: "pointer"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.background = "#003ea6";
                                                        e.currentTarget.style.transform = "scale(1.02)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.background = "#0052CC";
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30" + " " + "solution-book-btn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3501,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Book Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3468,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3337,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "3rem",
                                        padding: "2rem",
                                        background: "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
                                        borderRadius: "24px",
                                        textAlign: "center",
                                        color: "#fff",
                                        transition: "all 0.3s ease"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0, 82, 204, 0.25)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.boxShadow = "none";
                                    },
                                    className: "jsx-ce4acdc41ab8ce30" + " " + "quick-quote-cta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "1.5rem",
                                                fontWeight: 700,
                                                marginBottom: "0.5rem"
                                            },
                                            className: "jsx-ce4acdc41ab8ce30",
                                            children: "Need a Custom Travel Solution?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3527,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1rem",
                                                opacity: 0.9,
                                                maxWidth: "600px",
                                                margin: "0 auto 1.5rem",
                                                lineHeight: "1.6"
                                            },
                                            className: "jsx-ce4acdc41ab8ce30",
                                            children: [
                                                "Contact our travel experts for a customized ",
                                                route.origin,
                                                " to",
                                                " ",
                                                route.destination,
                                                " itinerary tailored to your group size and preferences."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3537,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "1rem",
                                                justifyContent: "center",
                                                flexWrap: "wrap"
                                            },
                                            className: "jsx-ce4acdc41ab8ce30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Custom travel solution from ${route.origin} to ${route.destination}`)}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "0.6rem",
                                                        padding: "0.8rem 2rem",
                                                        borderRadius: "50px",
                                                        background: "#25D366",
                                                        color: "#fff",
                                                        fontWeight: 700,
                                                        textDecoration: "none",
                                                        transition: "all 0.3s ease",
                                                        border: "none",
                                                        fontSize: "1rem",
                                                        cursor: "pointer"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1.05)";
                                                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.35)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1)";
                                                        e.currentTarget.style.boxShadow = "none";
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3590,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Get Custom Quote"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3559,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:+${whatsappNumber}`,
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "0.6rem",
                                                        padding: "0.8rem 2rem",
                                                        borderRadius: "50px",
                                                        background: "rgba(255,255,255,0.15)",
                                                        color: "#fff",
                                                        fontWeight: 600,
                                                        textDecoration: "none",
                                                        transition: "all 0.3s ease",
                                                        border: "1px solid rgba(255,255,255,0.3)",
                                                        fontSize: "1rem",
                                                        cursor: "pointer"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                                                        e.currentTarget.style.transform = "scale(1.05)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    },
                                                    className: "jsx-ce4acdc41ab8ce30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3618,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Call Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3592,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3551,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3508,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "ce4acdc41ab8ce30",
                                    children: "@media (width<=768px){.travel-solution-card.jsx-ce4acdc41ab8ce30,.quick-quote-cta.jsx-ce4acdc41ab8ce30{padding:1.5rem!important}.quick-quote-cta.jsx-ce4acdc41ab8ce30 h3.jsx-ce4acdc41ab8ce30{font-size:1.2rem!important}}@media (width<=480px){.travel-solution-card.jsx-ce4acdc41ab8ce30{padding:1rem!important}.solution-icon.jsx-ce4acdc41ab8ce30{width:48px!important;height:48px!important;font-size:1.6rem!important}}"
                                }, void 0, false, void 0, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 3188,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 3184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding",
                        style: {
                            padding: "4rem 0",
                            background: "#ffffff"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "1280px",
                                margin: "0 auto",
                                padding: "0 1.5rem"
                            },
                            className: "jsx-c46bd41bf033792c" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 3rem"
                                    },
                                    className: "jsx-c46bd41bf033792c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                background: "#eef3ff",
                                                color: "#0052CC",
                                                padding: "0.25rem 1.2rem",
                                                borderRadius: "40px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600
                                            },
                                            className: "jsx-c46bd41bf033792c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3688,
                                                    columnNumber: 17
                                                }, this),
                                                " Transparent Pricing"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3675,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            className: "jsx-c46bd41bf033792c",
                                            children: [
                                                "Clear, Transparent Pricing for",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#0052CC"
                                                    },
                                                    className: "jsx-c46bd41bf033792c",
                                                    children: [
                                                        route.origin,
                                                        " to ",
                                                        route.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3699,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3690,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            className: "jsx-c46bd41bf033792c",
                                            children: [
                                                "No hidden charges, no surprises. What you see is what you pay for your",
                                                route.origin,
                                                " to ",
                                                route.destination,
                                                " Urbania rental."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3703,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3668,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                        gap: "1.5rem",
                                        marginBottom: "3rem"
                                    },
                                    className: "jsx-c46bd41bf033792c",
                                    children: [
                                        {
                                            title: "Base Fare",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 3728,
                                                columnNumber: 25
                                            }, this),
                                            description: "Pay only for the distance you travel",
                                            details: [
                                                `₹${Math.round(route.distanceKm * 2 * 26 + 500).toLocaleString()} - ₹${Math.round(route.distanceKm * 2 * 33 + 700).toLocaleString()}`,
                                                `${route.distanceKm * 2} km round trip`,
                                                `${route.minKmPerDay || 250} km minimum per day`
                                            ],
                                            bgColor: "#e8f5e9",
                                            color: "#2e7d32"
                                        },
                                        {
                                            title: "Driver Allowance",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 3740,
                                                columnNumber: 25
                                            }, this),
                                            description: "Professional chauffeur charges",
                                            details: [
                                                `₹${600 - 700} per day`,
                                                "Experienced drivers",
                                                "Familiar with the route"
                                            ],
                                            bgColor: "#e3f2fd",
                                            color: "#1565c0"
                                        },
                                        {
                                            title: "Toll & Taxes",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 3752,
                                                columnNumber: 25
                                            }, this),
                                            description: "Actual charges as per route",
                                            details: [
                                                `₹${Math.round(route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2.5).toLocaleString()}`,
                                                "State taxes included",
                                                "Parking fees included"
                                            ],
                                            bgColor: "#fff3e0",
                                            color: "#e65100"
                                        },
                                        {
                                            title: "Total Estimate",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 3764,
                                                columnNumber: 25
                                            }, this),
                                            description: "Complete trip cost",
                                            details: [
                                                `₹${Math.round(route.distanceKm * 2 * 26 + 600 + route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2 * 33 + 700 + route.distanceKm * 2.5).toLocaleString()}`,
                                                "All-inclusive rate",
                                                "No hidden charges"
                                            ],
                                            bgColor: "#fce4ec",
                                            color: "#c62828"
                                        }
                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "#ffffff",
                                                borderRadius: "20px",
                                                padding: "1.8rem",
                                                border: `2px solid ${item.bgColor}`,
                                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                                                cursor: "pointer",
                                                transform: "scale(1)",
                                                position: "relative",
                                                overflow: "hidden"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-8px)";
                                                e.currentTarget.style.borderColor = "#0052CC";
                                                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 82, 204, 0.12)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.borderColor = item.bgColor;
                                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
                                            },
                                            className: "jsx-c46bd41bf033792c" + " " + "pricing-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        height: "4px",
                                                        background: item.color,
                                                        transition: "height 0.3s ease"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.height = "6px";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.height = "4px";
                                                    },
                                                    className: "jsx-c46bd41bf033792c" + " " + "pricing-bar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3804,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: "48px",
                                                        height: "48px",
                                                        borderRadius: "12px",
                                                        background: item.bgColor,
                                                        color: item.color,
                                                        marginBottom: "0.75rem",
                                                        transition: "all 0.3s ease"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
                                                        e.currentTarget.style.background = item.color;
                                                        e.currentTarget.style.color = "#ffffff";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                                                        e.currentTarget.style.background = item.bgColor;
                                                        e.currentTarget.style.color = item.color;
                                                    },
                                                    className: "jsx-c46bd41bf033792c" + " " + "pricing-icon",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3824,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.1rem",
                                                        fontWeight: 700,
                                                        color: "#0b1a2e",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    className: "jsx-c46bd41bf033792c",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3854,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.85rem",
                                                        color: "#4a5a6e",
                                                        marginBottom: "0.75rem"
                                                    },
                                                    className: "jsx-c46bd41bf033792c",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3866,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.4rem"
                                                    },
                                                    className: "jsx-c46bd41bf033792c",
                                                    children: item.details.map((detail, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                                fontSize: "0.85rem",
                                                                color: "#1a2634",
                                                                padding: "0.2rem 0"
                                                            },
                                                            className: "jsx-c46bd41bf033792c",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 14,
                                                                    color: item.color
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3896,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c46bd41bf033792c",
                                                                    children: detail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3897,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3885,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3877,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3775,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3717,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#ffffff",
                                        borderRadius: "24px",
                                        padding: "2rem",
                                        border: "1px solid #ecf0f7",
                                        marginBottom: "2rem",
                                        transition: "all 0.3s ease"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = "#0052CC";
                                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 82, 204, 0.08)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = "#ecf0f7";
                                        e.currentTarget.style.boxShadow = "none";
                                    },
                                    className: "jsx-c46bd41bf033792c" + " " + "pricing-table-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "1.2rem",
                                                fontWeight: 700,
                                                color: "#0b1a2e",
                                                marginBottom: "1.5rem",
                                                textAlign: "center"
                                            },
                                            className: "jsx-c46bd41bf033792c",
                                            children: [
                                                "Detailed Pricing Breakdown for ",
                                                route.origin,
                                                " to",
                                                " ",
                                                route.destination
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3926,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                overflowX: "auto"
                                            },
                                            className: "jsx-c46bd41bf033792c",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: "100%",
                                                    borderCollapse: "collapse",
                                                    minWidth: "600px"
                                                },
                                                className: "jsx-c46bd41bf033792c",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "jsx-c46bd41bf033792c",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                background: "#f9fafc",
                                                                borderBottom: "2px solid #ecf0f7"
                                                            },
                                                            className: "jsx-c46bd41bf033792c",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "1rem 1.2rem",
                                                                        textAlign: "left",
                                                                        fontWeight: 600,
                                                                        color: "#0b1a2e"
                                                                    },
                                                                    className: "jsx-c46bd41bf033792c",
                                                                    children: "Component"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3954,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "1rem 1.2rem",
                                                                        textAlign: "left",
                                                                        fontWeight: 600,
                                                                        color: "#0b1a2e"
                                                                    },
                                                                    className: "jsx-c46bd41bf033792c",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3964,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "1rem 1.2rem",
                                                                        textAlign: "right",
                                                                        fontWeight: 600,
                                                                        color: "#0b1a2e"
                                                                    },
                                                                    className: "jsx-c46bd41bf033792c",
                                                                    children: "Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3974,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3948,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 3947,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "jsx-c46bd41bf033792c",
                                                        children: [
                                                            {
                                                                component: "Base Fare",
                                                                description: `${route.distanceKm * 2} km @ ₹${26}-${33}/km`,
                                                                amount: `₹${(route.distanceKm * 2 * 26).toLocaleString()} - ₹${(route.distanceKm * 2 * 33).toLocaleString()}`,
                                                                highlight: false
                                                            },
                                                            {
                                                                component: "Driver Allowance",
                                                                description: `${route.distanceKm > 300 ? "2-3 days" : "1-2 days"}`,
                                                                amount: `₹${(route.distanceKm > 300 ? 700 * 3 : 600 * 2).toLocaleString()}`,
                                                                highlight: false
                                                            },
                                                            {
                                                                component: "Minimum KM Charges",
                                                                description: `${route.minKmPerDay || 250} km per day minimum`,
                                                                amount: "Included in base fare",
                                                                highlight: false
                                                            },
                                                            {
                                                                component: "Toll & State Taxes",
                                                                description: "As per actual route",
                                                                amount: `₹${Math.round(route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2.5).toLocaleString()}`,
                                                                highlight: false
                                                            },
                                                            {
                                                                component: "Parking Charges",
                                                                description: "At hotels and tourist spots",
                                                                amount: "Free at most temples & spots",
                                                                highlight: false
                                                            },
                                                            {
                                                                component: "Total Estimate",
                                                                description: "All-inclusive price",
                                                                amount: `₹${Math.round(route.distanceKm * 2 * 26 + 600 + route.distanceKm * 1.5).toLocaleString()} - ₹${Math.round(route.distanceKm * 2 * 33 + 700 + route.distanceKm * 2.5).toLocaleString()}`,
                                                                highlight: true
                                                            }
                                                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    borderBottom: index < 5 ? "1px solid #f0f4fe" : "none",
                                                                    background: item.highlight ? "#f0f4fe" : "transparent",
                                                                    transition: "background 0.3s ease"
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    if (!item.highlight) {
                                                                        e.currentTarget.style.background = "#f9fafc";
                                                                    }
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    if (!item.highlight) {
                                                                        e.currentTarget.style.background = "transparent";
                                                                    }
                                                                },
                                                                className: "jsx-c46bd41bf033792c" + " " + "pricing-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "0.8rem 1.2rem",
                                                                            fontWeight: item.highlight ? 700 : 500,
                                                                            color: item.highlight ? "#0052CC" : "#0b1a2e"
                                                                        },
                                                                        className: "jsx-c46bd41bf033792c",
                                                                        children: item.component
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 4047,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "0.8rem 1.2rem",
                                                                            color: "#4a5a6e"
                                                                        },
                                                                        className: "jsx-c46bd41bf033792c",
                                                                        children: item.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 4056,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "0.8rem 1.2rem",
                                                                            textAlign: "right",
                                                                            fontWeight: item.highlight ? 700 : 500,
                                                                            color: item.highlight ? "#0052CC" : "#0b1a2e"
                                                                        },
                                                                        className: "jsx-c46bd41bf033792c",
                                                                        children: item.amount
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 4064,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 4025,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 3986,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 3940,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3939,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "0.8rem",
                                                color: "#7a8a9e",
                                                textAlign: "center",
                                                marginTop: "1rem"
                                            },
                                            className: "jsx-c46bd41bf033792c",
                                            children: "* Final fare may vary based on actual route, tolls, and additional halts. Contact us for a precise quote."
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4080,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3906,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c46bd41bf033792c" + " " + "included-not-included-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(34, 197, 94, 0.15)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            className: "jsx-c46bd41bf033792c" + " " + "included-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-c46bd41bf033792c" + " " + "included-card-title",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4111,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c46bd41bf033792c",
                                                            children: "What's Included"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4112,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "jsx-c46bd41bf033792c" + " " + "included-list",
                                                    children: [
                                                        `Base fare for ${route.distanceKm * 2} km round trip`,
                                                        "Professional, verified driver",
                                                        "Fuel costs",
                                                        "State permits and taxes",
                                                        "Basic insurance coverage",
                                                        "AC comfort throughout journey",
                                                        "24/7 customer support"
                                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-c46bd41bf033792c" + " " + "included-list-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c46bd41bf033792c" + " " + "included-check",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4126,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c46bd41bf033792c" + " " + "included-item-text",
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4127,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4125,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4115,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4098,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(239, 68, 68, 0.1)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            className: "jsx-c46bd41bf033792c" + " " + "not-included-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-c46bd41bf033792c" + " " + "not-included-card-title",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4147,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c46bd41bf033792c",
                                                            children: "What's Not Included"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4148,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "jsx-c46bd41bf033792c" + " " + "included-list",
                                                    children: [
                                                        "Toll taxes (payable as per actual)",
                                                        "Inter-state permit fees",
                                                        "Parking fees at hotels and attractions",
                                                        "Meals and accommodation for driver",
                                                        "Extended halt charges",
                                                        "Additional KM beyond the limit",
                                                        "Personal expenses and tips"
                                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-c46bd41bf033792c" + " " + "included-list-item",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c46bd41bf033792c" + " " + "not-included-cross",
                                                                    children: "✗"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4162,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c46bd41bf033792c" + " " + "included-item-text",
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4163,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4161,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4151,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4096,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0, 82, 204, 0.3)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.boxShadow = "none";
                                    },
                                    className: "jsx-c46bd41bf033792c" + " " + "pricing-promise",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c46bd41bf033792c" + " " + "pricing-promise-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 28,
                                                color: "#fff"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 4185,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-c46bd41bf033792c" + " " + "pricing-promise-title",
                                            children: "Our Price Promise"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c46bd41bf033792c" + " " + "pricing-promise-text",
                                            children: [
                                                "We guarantee the best price for your ",
                                                route.origin,
                                                " to",
                                                " ",
                                                route.destination,
                                                " journey. If you find a lower price elsewhere, we'll match it."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Price match query for ${route.origin} to ${route.destination}`)}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            className: "jsx-c46bd41bf033792c" + " " + "pricing-promise-btn",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-c46bd41bf033792c",
                                                    children: "Get Best Price Quote"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4217,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "c46bd41bf033792c",
                                    children: ".included-not-included-section.jsx-c46bd41bf033792c{box-sizing:border-box;grid-template-columns:repeat(2,minmax(0,1fr));gap:2rem;width:100%;margin-bottom:2rem;display:grid}.included-card.jsx-c46bd41bf033792c,.not-included-card.jsx-c46bd41bf033792c{box-sizing:border-box;border-radius:20px;width:100%;min-width:0;padding:1.5rem;transition:transform .3s,box-shadow .3s}.included-card.jsx-c46bd41bf033792c{background:#f0fdf4;border:1px solid #bbf7d0}.not-included-card.jsx-c46bd41bf033792c{background:#fef2f2;border:1px solid #fecaca}.included-card-title.jsx-c46bd41bf033792c,.not-included-card-title.jsx-c46bd41bf033792c{align-items:center;gap:.5rem;margin:0 0 1rem;font-size:1.1rem;font-weight:700;line-height:1.4;display:flex}.included-card-title.jsx-c46bd41bf033792c{color:#15803d}.not-included-card-title.jsx-c46bd41bf033792c{color:#dc2626}.included-card-title.jsx-c46bd41bf033792c svg,.not-included-card-title.jsx-c46bd41bf033792c svg{flex-shrink:0}.included-list.jsx-c46bd41bf033792c{margin:0;padding:0;list-style:none}.included-list-item.jsx-c46bd41bf033792c{color:#1a2634;box-sizing:border-box;align-items:flex-start;gap:.5rem;width:100%;padding:.4rem 0;font-size:.9rem;line-height:1.5;display:flex}.included-check.jsx-c46bd41bf033792c,.not-included-cross.jsx-c46bd41bf033792c{text-align:center;flex:0 0 20px;width:20px;font-size:1.1rem;font-weight:700;line-height:1.5}.included-check.jsx-c46bd41bf033792c{color:#22c55e}.not-included-cross.jsx-c46bd41bf033792c{color:#ef4444}.included-item-text.jsx-c46bd41bf033792c{overflow-wrap:anywhere;flex:1;min-width:0}.pricing-promise.jsx-c46bd41bf033792c{text-align:center;color:#fff;box-sizing:border-box;background:linear-gradient(135deg,#0052cc 0%,#0770e3 100%);border-radius:20px;width:100%;padding:2rem;transition:box-shadow .3s,transform .3s}.pricing-promise-icon.jsx-c46bd41bf033792c{background:#ffffff26;border-radius:50%;justify-content:center;align-items:center;width:56px;height:56px;margin:0 auto 1rem;display:inline-flex}.pricing-promise-title.jsx-c46bd41bf033792c{margin:0 0 .5rem;font-size:1.3rem;font-weight:700;line-height:1.4}.pricing-promise-text.jsx-c46bd41bf033792c{opacity:.9;width:100%;max-width:600px;margin:0 auto 1.5rem;font-size:1rem;line-height:1.6}.pricing-promise-btn.jsx-c46bd41bf033792c{color:#0052cc;cursor:pointer;box-sizing:border-box;background:#fff;border:none;border-radius:50px;justify-content:center;align-items:center;gap:.6rem;min-height:46px;padding:.8rem 2rem;font-size:1rem;font-weight:700;text-decoration:none;transition:transform .3s,box-shadow .3s;display:inline-flex}.pricing-promise-btn.jsx-c46bd41bf033792c svg{flex-shrink:0}@media (width<=1024px){.included-not-included-section.jsx-c46bd41bf033792c{gap:1.5rem}.included-card.jsx-c46bd41bf033792c,.not-included-card.jsx-c46bd41bf033792c{border-radius:18px;padding:1.35rem}.included-card-title.jsx-c46bd41bf033792c,.not-included-card-title.jsx-c46bd41bf033792c{font-size:1.05rem}.included-list-item.jsx-c46bd41bf033792c{font-size:.88rem}.pricing-promise.jsx-c46bd41bf033792c{border-radius:18px;padding:1.75rem}}@media (width<=768px){.included-not-included-section.jsx-c46bd41bf033792c{grid-template-columns:1fr;gap:1.25rem;margin-bottom:1.5rem}.included-card.jsx-c46bd41bf033792c,.not-included-card.jsx-c46bd41bf033792c{border-radius:17px;padding:1.25rem}.included-card-title.jsx-c46bd41bf033792c,.not-included-card-title.jsx-c46bd41bf033792c{margin-bottom:.85rem;font-size:1rem}.included-list-item.jsx-c46bd41bf033792c{padding:.38rem 0;font-size:.88rem}.pricing-promise.jsx-c46bd41bf033792c{border-radius:17px;padding:1.5rem}.pricing-promise-icon.jsx-c46bd41bf033792c{width:52px;height:52px}.pricing-promise-title.jsx-c46bd41bf033792c{font-size:1.2rem}.pricing-promise-text.jsx-c46bd41bf033792c{max-width:560px;font-size:.95rem}.pricing-promise-btn.jsx-c46bd41bf033792c{padding:.75rem 1.75rem}}@media (width<=480px){.included-not-included-section.jsx-c46bd41bf033792c{gap:1rem;margin-bottom:1.25rem}.included-card.jsx-c46bd41bf033792c,.not-included-card.jsx-c46bd41bf033792c{border-radius:15px;padding:1rem}.included-card-title.jsx-c46bd41bf033792c,.not-included-card-title.jsx-c46bd41bf033792c{gap:.4rem;margin-bottom:.75rem;font-size:.95rem}.included-card-title.jsx-c46bd41bf033792c svg,.not-included-card-title.jsx-c46bd41bf033792c svg{width:18px;height:18px}.included-list-item.jsx-c46bd41bf033792c{gap:.4rem;padding:.32rem 0;font-size:.82rem;line-height:1.45}.included-check.jsx-c46bd41bf033792c,.not-included-cross.jsx-c46bd41bf033792c{flex-basis:18px;width:18px;font-size:.95rem}.pricing-promise.jsx-c46bd41bf033792c{border-radius:15px;padding:1.25rem 1rem}.pricing-promise-icon.jsx-c46bd41bf033792c{width:48px;height:48px;margin-bottom:.75rem}.pricing-promise-icon.jsx-c46bd41bf033792c svg{width:24px;height:24px}.pricing-promise-title.jsx-c46bd41bf033792c{margin-bottom:.45rem;font-size:1.05rem}.pricing-promise-text.jsx-c46bd41bf033792c{margin-bottom:1.1rem;font-size:.84rem;line-height:1.5}.pricing-promise-btn.jsx-c46bd41bf033792c{border-radius:12px;width:100%;max-width:100%;min-height:44px;padding:.7rem 1rem;font-size:.85rem}.pricing-promise-btn.jsx-c46bd41bf033792c svg{width:17px;height:17px}}@media (width<=359px){.included-not-included-section.jsx-c46bd41bf033792c{gap:.85rem;margin-bottom:1rem}.included-card.jsx-c46bd41bf033792c,.not-included-card.jsx-c46bd41bf033792c{border-radius:13px;padding:.85rem}.included-card-title.jsx-c46bd41bf033792c,.not-included-card-title.jsx-c46bd41bf033792c{gap:.35rem;font-size:.88rem}.included-card-title.jsx-c46bd41bf033792c svg,.not-included-card-title.jsx-c46bd41bf033792c svg{width:17px;height:17px}.included-list-item.jsx-c46bd41bf033792c{gap:.35rem;padding:.28rem 0;font-size:.78rem}.included-check.jsx-c46bd41bf033792c,.not-included-cross.jsx-c46bd41bf033792c{flex-basis:17px;width:17px;font-size:.9rem}.pricing-promise.jsx-c46bd41bf033792c{border-radius:13px;padding:1rem .8rem}.pricing-promise-icon.jsx-c46bd41bf033792c{width:44px;height:44px}.pricing-promise-icon.jsx-c46bd41bf033792c svg{width:22px;height:22px}.pricing-promise-title.jsx-c46bd41bf033792c{font-size:.98rem}.pricing-promise-text.jsx-c46bd41bf033792c{font-size:.78rem;line-height:1.45}.pricing-promise-btn.jsx-c46bd41bf033792c{padding:.65rem .75rem;font-size:.78rem}}@media (hover:none){.included-card.jsx-c46bd41bf033792c,.not-included-card.jsx-c46bd41bf033792c,.pricing-promise.jsx-c46bd41bf033792c,.pricing-promise-btn.jsx-c46bd41bf033792c{transition:none}}@media (prefers-reduced-motion:reduce){.included-card.jsx-c46bd41bf033792c,.not-included-card.jsx-c46bd41bf033792c,.pricing-promise.jsx-c46bd41bf033792c,.pricing-promise-btn.jsx-c46bd41bf033792c{transition:none}}"
                                }, void 0, false, void 0, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 3659,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 3655,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding fleet-section",
                        style: {
                            padding: "4rem 0",
                            background: "#f9fafc"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            style: {
                                maxWidth: "1280px",
                                margin: "0 auto",
                                padding: "0 1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                background: "#eef3ff",
                                                color: "#0052CC",
                                                padding: "0.25rem 1.2rem",
                                                borderRadius: "40px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4718,
                                                    columnNumber: 17
                                                }, this),
                                                " Transparent Pricing"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4705,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            children: [
                                                "Urbania Fleet in ",
                                                city.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4720,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            children: "Choose the vehicle that fits your group and luggage."
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4730,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4698,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fleet-grid",
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                        gap: "2rem"
                                    },
                                    children: fleet.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fleet-card",
                                            style: {
                                                background: "#fff",
                                                borderRadius: "24px",
                                                overflow: "hidden",
                                                boxShadow: "0 8px 24px rgba(0,20,50,0.06)",
                                                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                                                border: "1px solid #f0f4fe",
                                                cursor: "pointer",
                                                position: "relative"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fleet-image-wrapper",
                                                    style: {
                                                        position: "relative",
                                                        height: "220px",
                                                        background: "#eef3ff",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        overflow: "hidden"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: model.image,
                                                            alt: model.name,
                                                            width: 400,
                                                            height: 220,
                                                            className: "fleet-image",
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                                transition: "transform 0.5s ease"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4777,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "fleet-badge",
                                                            style: {
                                                                position: "absolute",
                                                                top: "12px",
                                                                right: "12px",
                                                                background: "#0052CC",
                                                                color: "#fff",
                                                                padding: "0.25rem 1rem",
                                                                borderRadius: "40px",
                                                                fontWeight: 600,
                                                                fontSize: "0.8rem",
                                                                zIndex: 2,
                                                                transition: "transform 0.3s ease"
                                                            },
                                                            children: model.capacity
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4790,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                bottom: "12px",
                                                                left: "12px",
                                                                background: "rgba(0,0,0,0.7)",
                                                                backdropFilter: "blur(8px)",
                                                                color: "#FFB800",
                                                                padding: "0.2rem 0.8rem",
                                                                borderRadius: "20px",
                                                                fontSize: "0.75rem",
                                                                fontWeight: 600,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.3rem",
                                                                zIndex: 2
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    size: 14,
                                                                    fill: "#FFB800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4827,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " 4.9"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4809,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4765,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "1.5rem 1.2rem 1.8rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "fleet-title",
                                                            style: {
                                                                fontSize: "1.25rem",
                                                                fontWeight: 700,
                                                                marginBottom: "0.2rem",
                                                                transition: "color 0.3s ease"
                                                            },
                                                            children: model.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4833,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "fleet-tagline",
                                                            style: {
                                                                color: "#4a5a6e",
                                                                fontSize: "0.85rem",
                                                                marginBottom: "0.75rem",
                                                                minHeight: "40px",
                                                                transition: "color 0.3s ease"
                                                            },
                                                            children: model.tagline
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4844,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                gap: "1rem",
                                                                flexWrap: "wrap",
                                                                marginBottom: "0.75rem",
                                                                padding: "0.5rem 0",
                                                                borderTop: "1px solid #f0f4fe",
                                                                borderBottom: "1px solid #f0f4fe"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "0.8rem",
                                                                        color: "#4a5a6e"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                            size: 14,
                                                                            style: {
                                                                                display: "inline",
                                                                                marginRight: "0.2rem"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 4870,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        model.seater,
                                                                        " Seats"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4869,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "0.8rem",
                                                                        color: "#4a5a6e"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$luggage$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Luggage$3e$__["Luggage"], {
                                                                            size: 14,
                                                                            style: {
                                                                                display: "inline",
                                                                                marginRight: "0.2rem"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 4877,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        model.luggageCapacity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4876,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4858,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                marginBottom: "0.5rem"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: "0.75rem",
                                                                                color: "#7a8a9e"
                                                                            },
                                                                            children: "Starting from"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 4895,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: "1.3rem",
                                                                                fontWeight: 700,
                                                                                color: "#0b1a2e",
                                                                                margin: 0
                                                                            },
                                                                            children: [
                                                                                formatCurrency(model.ratePerKm),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: "0.9rem",
                                                                                        fontWeight: 400,
                                                                                        color: "#7a8a9e"
                                                                                    },
                                                                                    children: "/km"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                                    lineNumber: 4907,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 4898,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4894,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "0.7rem",
                                                                        color: "#7a8a9e",
                                                                        background: "#f0f4fe",
                                                                        padding: "0.2rem 0.8rem",
                                                                        borderRadius: "20px"
                                                                    },
                                                                    children: [
                                                                        model.minKmPerDay,
                                                                        "+ km/day"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4918,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4886,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book ${model.name} in ${city.name}`)}`,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "book-button",
                                                            style: {
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                gap: "0.5rem",
                                                                width: "100%",
                                                                padding: "0.7rem 1.5rem",
                                                                borderRadius: "40px",
                                                                background: "#0052CC",
                                                                color: "#fff",
                                                                fontWeight: 600,
                                                                fontSize: "0.9rem",
                                                                textDecoration: "none",
                                                                transition: "all 0.3s ease",
                                                                border: "none",
                                                                marginTop: "0.5rem",
                                                                cursor: "pointer"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4958,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Book This Vehicle"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4932,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4832,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, model.id, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4750,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4741,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 4690,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 4686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding",
                        style: {
                            padding: "4rem 0",
                            background: "#ffffff"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            style: {
                                maxWidth: "1280px",
                                margin: "0 auto",
                                padding: "0 1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                background: "#eef3ff",
                                                color: "#0052CC",
                                                padding: "0.25rem 1.2rem",
                                                borderRadius: "40px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5000,
                                                    columnNumber: 17
                                                }, this),
                                                " Customer Reviews"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4987,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            children: [
                                                "What Our Customers Say About",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#0052CC"
                                                    },
                                                    children: [
                                                        route.origin,
                                                        " to ",
                                                        route.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5011,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 5002,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            children: [
                                                "Real reviews from happy travelers who booked Urbania Tempo Traveller for the ",
                                                route.origin,
                                                " to ",
                                                route.destination,
                                                " route."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 5015,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4980,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                        gap: "2rem"
                                    },
                                    children: [
                                        {
                                            name: "Rahul Sharma",
                                            location: route.origin,
                                            rating: 5,
                                            text: `Excellent service from ${route.origin} to ${route.destination}! The Urbania was spotless and the driver was very professional and punctual. Highly recommend for group travel.`,
                                            date: "2 weeks ago",
                                            avatar: "R"
                                        },
                                        {
                                            name: "Priya Patel",
                                            location: route.destination,
                                            rating: 5,
                                            text: `Booked a family trip from ${route.origin} to ${route.destination}. The vehicle was comfortable, and the pricing was transparent with no hidden charges. Will definitely book again!`,
                                            date: "1 month ago",
                                            avatar: "P"
                                        },
                                        {
                                            name: "Amit Kumar",
                                            location: route.origin,
                                            rating: 4,
                                            text: `Great experience on the ${route.origin} to ${route.destination} route. The 12-seater was perfect for our corporate team outing. Punctual and well-maintained vehicle.`,
                                            date: "3 weeks ago",
                                            avatar: "A"
                                        },
                                        {
                                            name: "Sneha Reddy",
                                            location: route.destination,
                                            rating: 5,
                                            text: `We had an amazing trip from ${route.origin} to ${route.destination} with Urbania. The vehicle was luxurious, and the driver was very knowledgeable about the route.`,
                                            date: "2 months ago",
                                            avatar: "S"
                                        }
                                    ].map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "#f9fafc",
                                                padding: "1.5rem",
                                                borderRadius: "20px",
                                                border: "1px solid #ecf0f7",
                                                transition: "all 0.3s ease"
                                            },
                                            className: "review-card",
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.borderColor = "#0052CC";
                                                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 82, 204, 0.08)";
                                                e.currentTarget.style.background = "#ffffff";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.borderColor = "#ecf0f7";
                                                e.currentTarget.style.boxShadow = "none";
                                                e.currentTarget.style.background = "#f9fafc";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.2rem",
                                                        marginBottom: "0.5rem"
                                                    },
                                                    children: [
                                                        ...Array(5)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 16,
                                                            fill: i < review.rating ? "#FFB800" : "none",
                                                            color: i < review.rating ? "#FFB800" : "#d1d5db"
                                                        }, i, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 5102,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5093,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "#1a2634",
                                                        fontSize: "0.95rem",
                                                        lineHeight: "1.6",
                                                        marginBottom: "1rem",
                                                        fontStyle: "italic"
                                                    },
                                                    children: [
                                                        '"',
                                                        review.text,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.8rem",
                                                        borderTop: "1px solid #ecf0f7",
                                                        paddingTop: "1rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "40px",
                                                                height: "40px",
                                                                borderRadius: "50%",
                                                                background: "#0052CC",
                                                                color: "#fff",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontWeight: 700,
                                                                fontSize: "1rem"
                                                            },
                                                            children: review.avatar
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 5134,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600,
                                                                        color: "#0b1a2e",
                                                                        fontSize: "0.95rem"
                                                                    },
                                                                    children: review.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5151,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.75rem",
                                                                        color: "#7a8a9e"
                                                                    },
                                                                    children: [
                                                                        review.date,
                                                                        " · ",
                                                                        review.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5160,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 5150,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 5068,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 5027,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 4972,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 4968,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding",
                        style: {
                            padding: "4rem 0",
                            background: "#ffffff"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            style: {
                                maxWidth: "1280px",
                                margin: "0 auto",
                                padding: "0 1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "section-title",
                                        children: "More Popular Routes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 5190,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 5189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "routes-grid",
                                    children: relatedRoutes.slice(0, 15).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "route-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "route-dest",
                                                    children: [
                                                        item.origin,
                                                        " to ",
                                                        item.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "route-meta",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 5200,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        item.distanceKm,
                                                        " KM ·",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 5201,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        item.durationHrs
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5199,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/routes/${item.routeSlug}`,
                                                    className: "btn btn-primary btn-sm",
                                                    children: "View Route"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.routeSlug, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 5195,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 5193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 5181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 5177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-33d2df6929a81fec" + " " + "journey-preview-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-33d2df6929a81fec" + " " + "journey-preview-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33d2df6929a81fec" + " " + "journey-preview-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-33d2df6929a81fec" + " " + "journey-preview-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5221,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-33d2df6929a81fec",
                                                        children: "Journey Preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5222,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 5220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-33d2df6929a81fec" + " " + "journey-preview-title",
                                                children: [
                                                    "Experience a Smooth Ride from",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-33d2df6929a81fec",
                                                        children: [
                                                            route.origin,
                                                            " to ",
                                                            route.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5227,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 5225,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-33d2df6929a81fec" + " " + "journey-preview-description",
                                                children: [
                                                    "Travel with comfort, safety, and flexibility. Your journey from",
                                                    " ",
                                                    route.origin,
                                                    " to ",
                                                    route.destination,
                                                    " starts here."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 5232,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 5219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33d2df6929a81fec" + " " + "journey-preview-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-33d2df6929a81fec" + " " + "journey-preview-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-premium-badge",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2d$front$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BusFront$3e$__["BusFront"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 5244,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-33d2df6929a81fec",
                                                                children: "Premium Travel Experience"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 5245,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5243,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-preview-subtitle",
                                                        children: [
                                                            "Travel from ",
                                                            route.origin,
                                                            " to ",
                                                            route.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5248,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-preview-text",
                                                        children: [
                                                            route.distanceKm,
                                                            "km journey in ",
                                                            route.durationHrs,
                                                            ". Perfect for",
                                                            route.category?.toLowerCase() === "pilgrimage" ? " pilgrimage" : "",
                                                            route.category?.toLowerCase() === "hill station" ? " hill station" : "",
                                                            route.category?.toLowerCase() === "tourist" ? " tourism" : "",
                                                            " ",
                                                            "group travel."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5252,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-preview-features",
                                                        children: [
                                                            {
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    size: 16,
                                                                    color: "#0052CC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5271,
                                                                    columnNumber: 29
                                                                }, this),
                                                                text: "Door-to-door pickup & drop"
                                                            },
                                                            {
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                    size: 16,
                                                                    color: "#0052CC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5275,
                                                                    columnNumber: 29
                                                                }, this),
                                                                text: "Safe & verified drivers"
                                                            },
                                                            {
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    size: 16,
                                                                    color: "#0052CC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5279,
                                                                    columnNumber: 29
                                                                }, this),
                                                                text: "Highly rated by travelers"
                                                            },
                                                            {
                                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    size: 16,
                                                                    color: "#0052CC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5283,
                                                                    columnNumber: 29
                                                                }, this),
                                                                text: "On-time service guarantee"
                                                            }
                                                        ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.background = "#f0f4fe";
                                                                    e.currentTarget.style.transform = "translateX(4px)";
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.background = "#f9fafc";
                                                                    e.currentTarget.style.transform = "translateX(0)";
                                                                },
                                                                className: "jsx-33d2df6929a81fec" + " " + "journey-feature",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-feature-icon",
                                                                        children: feature.icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 5299,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-feature-text",
                                                                        children: feature.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 5303,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 5287,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5268,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book Urbania from ${route.origin} to ${route.destination}`)}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.transform = "translateY(-2px)";
                                                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(37, 211, 102, 0.35)";
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.transform = "translateY(0)";
                                                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.25)";
                                                        },
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-book-btn",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 5329,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-33d2df6929a81fec",
                                                                children: "Book Your Ride →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 5330,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5311,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 5241,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 82, 204, 0.12)";
                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,20,50,0.06)";
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                },
                                                className: "jsx-33d2df6929a81fec" + " " + "journey-map-card",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-33d2df6929a81fec" + " " + "journey-map-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-33d2df6929a81fec" + " " + "journey-map-container",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                                src: `https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${encodeURIComponent(route.origin)}&destination=${encodeURIComponent(route.destination)}&mode=driving`,
                                                                width: "100%",
                                                                height: "100%",
                                                                style: {
                                                                    border: 0
                                                                },
                                                                allowFullScreen: "",
                                                                loading: "lazy",
                                                                referrerPolicy: "no-referrer-when-downgrade",
                                                                title: `Map showing route from ${route.origin} to ${route.destination}`,
                                                                className: "jsx-33d2df6929a81fec"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 5351,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 5350,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: ()=>{
                                                                window.open(`https://www.google.com/maps/dir/${encodeURIComponent(route.origin)}/${encodeURIComponent(route.destination)}`, "_blank");
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.background = "rgba(255,255,255,0.98)";
                                                                e.currentTarget.style.boxShadow = "inset 0 0 0 2px #0052CC";
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                                                                e.currentTarget.style.boxShadow = "none";
                                                            },
                                                            className: "jsx-33d2df6929a81fec" + " " + "map-overlay",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-33d2df6929a81fec" + " " + "map-overlay-icon",
                                                                    children: "🗺️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5390,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "jsx-33d2df6929a81fec",
                                                                    children: "View Route Map"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5392,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-33d2df6929a81fec",
                                                                    children: [
                                                                        "Click to load live Google Map for ",
                                                                        route.origin,
                                                                        " to",
                                                                        " ",
                                                                        route.destination
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5394,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-33d2df6929a81fec" + " " + "map-overlay-link",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 5400,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-33d2df6929a81fec",
                                                                            children: "Open Google Maps"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 5401,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 5399,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 5368,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5348,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 5335,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 5239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-33d2df6929a81fec" + " " + "journey-preview-stats",
                                        children: [
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                    size: 20,
                                                    color: "#0052CC"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5412,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Total Distance",
                                                value: `${route.distanceKm} km`
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 20,
                                                    color: "#0052CC"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5417,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Travel Time",
                                                value: route.durationHrs
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    size: 20,
                                                    color: "#0052CC"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5422,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Max Capacity",
                                                value: "20 Passengers"
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                    size: 20,
                                                    color: "#0052CC"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 5427,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Vehicle Type",
                                                value: "Force Urbania"
                                            }
                                        ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = "#0052CC";
                                                    e.currentTarget.style.transform = "translateY(-4px)";
                                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 82, 204, 0.06)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = "#ecf0f7";
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                },
                                                className: "jsx-33d2df6929a81fec" + " " + "journey-stat-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-stat-icon",
                                                        children: stat.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5447,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-stat-label",
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5449,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-33d2df6929a81fec" + " " + "journey-stat-value",
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 5451,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 5432,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 5409,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 5217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "33d2df6929a81fec",
                                children: ".journey-preview-section.jsx-33d2df6929a81fec{box-sizing:border-box;background:#fff;width:100%;padding:4rem 0;overflow:hidden}.journey-preview-container.jsx-33d2df6929a81fec{box-sizing:border-box;width:100%;max-width:1280px;margin:0 auto;padding:0 1.5rem}.journey-preview-header.jsx-33d2df6929a81fec{text-align:center;width:100%;max-width:780px;margin:0 auto 2.5rem}.journey-preview-badge.jsx-33d2df6929a81fec{color:#0052cc;box-sizing:border-box;background:#eef3ff;border-radius:40px;justify-content:center;align-items:center;gap:.5rem;padding:.25rem 1.2rem;font-size:.8rem;font-weight:600;display:inline-flex}.journey-preview-title.jsx-33d2df6929a81fec{color:#0b1a2e;overflow-wrap:anywhere;margin:.5rem 0 .75rem;font-size:2.3rem;font-weight:700;line-height:1.25}.journey-preview-title.jsx-33d2df6929a81fec span.jsx-33d2df6929a81fec{color:#0052cc}.journey-preview-description.jsx-33d2df6929a81fec{color:#4a5a6e;margin:0;font-size:1.05rem;line-height:1.6}.journey-preview-grid.jsx-33d2df6929a81fec{box-sizing:border-box;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:center;gap:3rem;width:100%;display:grid}.journey-preview-content.jsx-33d2df6929a81fec{width:100%;min-width:0}.journey-premium-badge.jsx-33d2df6929a81fec{color:#fff;letter-spacing:.5px;box-sizing:border-box;background:#0052cc;border-radius:40px;justify-content:center;align-items:center;gap:.5rem;max-width:100%;margin-bottom:1rem;padding:.3rem 1.2rem;font-size:.75rem;font-weight:600;display:inline-flex}.journey-preview-subtitle.jsx-33d2df6929a81fec{color:#0b1a2e;overflow-wrap:anywhere;margin:0 0 .5rem;font-size:1.5rem;font-weight:700;line-height:1.35}.journey-preview-text.jsx-33d2df6929a81fec{color:#4a5a6e;overflow-wrap:anywhere;margin:0 0 1.5rem;font-size:1rem;line-height:1.7}.journey-preview-features.jsx-33d2df6929a81fec{grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;width:100%;margin-bottom:1.5rem;display:grid}.journey-feature.jsx-33d2df6929a81fec{box-sizing:border-box;background:#f9fafc;border-radius:10px;align-items:center;gap:.5rem;min-width:0;padding:.5rem;transition:background .3s,transform .3s;display:flex}.journey-feature-icon.jsx-33d2df6929a81fec{flex:none;justify-content:center;align-items:center;display:flex}.journey-feature-text.jsx-33d2df6929a81fec{color:#1a2634;overflow-wrap:anywhere;min-width:0;font-size:.85rem;font-weight:500;line-height:1.4}.journey-book-btn.jsx-33d2df6929a81fec{color:#fff;cursor:pointer;box-sizing:border-box;background:#25d366;border-radius:50px;justify-content:center;align-items:center;gap:.6rem;min-height:46px;padding:.8rem 2.5rem;font-size:1rem;font-weight:700;text-decoration:none;transition:transform .3s,box-shadow .3s;display:inline-flex;box-shadow:0 8px 24px #25d36640}.journey-book-btn.jsx-33d2df6929a81fec svg{flex-shrink:0}.journey-map-card.jsx-33d2df6929a81fec{box-sizing:border-box;border:1px solid #ecf0f7;border-radius:24px;width:100%;min-width:0;transition:transform .3s,box-shadow .3s;overflow:hidden;box-shadow:0 8px 24px #0014320f}.journey-map-wrapper.jsx-33d2df6929a81fec{background:#eef3ff;width:100%;height:0;padding-bottom:75%;position:relative;overflow:hidden}.journey-map-container.jsx-33d2df6929a81fec{width:100%;height:100%;position:absolute;inset:0}.journey-map-container.jsx-33d2df6929a81fec iframe.jsx-33d2df6929a81fec{width:100%;height:100%;display:block}.map-overlay.jsx-33d2df6929a81fec{z-index:2;color:#0b1a2e;text-align:center;cursor:pointer;box-sizing:border-box;background:#fffffff2;flex-direction:column;justify-content:center;align-items:center;padding:2rem;transition:background .3s,box-shadow .3s;display:flex;position:absolute;inset:0}.map-overlay-icon.jsx-33d2df6929a81fec{margin-bottom:.75rem;font-size:3rem;line-height:1}.map-overlay.jsx-33d2df6929a81fec h4.jsx-33d2df6929a81fec{color:#0b1a2e;margin:0 0 .5rem;font-size:1.2rem;font-weight:700}.map-overlay.jsx-33d2df6929a81fec p.jsx-33d2df6929a81fec{color:#4a5a6e;max-width:300px;margin:0 0 .5rem;font-size:.9rem;line-height:1.5}.map-overlay-link.jsx-33d2df6929a81fec{color:#0052cc;justify-content:center;align-items:center;gap:.4rem;margin-top:.5rem;font-size:.85rem;font-weight:600;display:inline-flex}.journey-preview-stats.jsx-33d2df6929a81fec{box-sizing:border-box;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.5rem;width:100%;margin-top:3rem;display:grid}.journey-stat-card.jsx-33d2df6929a81fec{text-align:center;box-sizing:border-box;background:#fff;border:1px solid #ecf0f7;border-radius:16px;min-width:0;padding:1.2rem;transition:border-color .3s,transform .3s,box-shadow .3s}.journey-stat-icon.jsx-33d2df6929a81fec{background:#eef3ff;border-radius:50%;justify-content:center;align-items:center;width:40px;height:40px;margin-bottom:.5rem;display:inline-flex}.journey-stat-label.jsx-33d2df6929a81fec{color:#7a8a9e;text-transform:uppercase;letter-spacing:.5px;overflow-wrap:anywhere;font-size:.7rem;font-weight:600;line-height:1.4}.journey-stat-value.jsx-33d2df6929a81fec{color:#0b1a2e;overflow-wrap:anywhere;margin-top:.2rem;font-size:1.1rem;font-weight:700;line-height:1.35}@media (width<=1200px){.journey-preview-container.jsx-33d2df6929a81fec{padding:0 1.25rem}.journey-preview-grid.jsx-33d2df6929a81fec{gap:2rem}.journey-preview-stats.jsx-33d2df6929a81fec{gap:1rem}}@media (width<=1024px){.journey-preview-section.jsx-33d2df6929a81fec{padding:3.5rem 0}.journey-preview-title.jsx-33d2df6929a81fec{font-size:2rem}.journey-preview-grid.jsx-33d2df6929a81fec{grid-template-columns:1fr;gap:2rem}.journey-preview-content.jsx-33d2df6929a81fec,.journey-map-card.jsx-33d2df6929a81fec{max-width:900px;margin:0 auto}.journey-preview-stats.jsx-33d2df6929a81fec{grid-template-columns:repeat(2,minmax(0,1fr));max-width:900px;margin-left:auto;margin-right:auto}}@media (width<=768px){.journey-preview-section.jsx-33d2df6929a81fec{padding:3rem 0}.journey-preview-container.jsx-33d2df6929a81fec{padding:0 1rem}.journey-preview-header.jsx-33d2df6929a81fec{margin-bottom:2rem}.journey-preview-title.jsx-33d2df6929a81fec{font-size:1.8rem;line-height:1.3}.journey-preview-description.jsx-33d2df6929a81fec{font-size:.95rem}.journey-preview-grid.jsx-33d2df6929a81fec{gap:1.5rem}.journey-preview-subtitle.jsx-33d2df6929a81fec{font-size:1.3rem}.journey-preview-text.jsx-33d2df6929a81fec{font-size:.92rem}.journey-preview-features.jsx-33d2df6929a81fec{grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem}.journey-feature.jsx-33d2df6929a81fec{padding:.5rem}.journey-feature-text.jsx-33d2df6929a81fec{font-size:.8rem}.journey-book-btn.jsx-33d2df6929a81fec{padding:.75rem 2rem}.journey-map-card.jsx-33d2df6929a81fec{border-radius:20px}.journey-map-wrapper.jsx-33d2df6929a81fec{padding-bottom:68%}.map-overlay.jsx-33d2df6929a81fec{padding:1.5rem}.map-overlay-icon.jsx-33d2df6929a81fec{font-size:2.5rem}.map-overlay.jsx-33d2df6929a81fec h4.jsx-33d2df6929a81fec{font-size:1rem}.map-overlay.jsx-33d2df6929a81fec p.jsx-33d2df6929a81fec{font-size:.8rem}.journey-preview-stats.jsx-33d2df6929a81fec{gap:.75rem;margin-top:2rem}.journey-stat-card.jsx-33d2df6929a81fec{padding:1rem .75rem}.journey-stat-value.jsx-33d2df6929a81fec{font-size:1rem}}@media (width<=600px){.journey-preview-features.jsx-33d2df6929a81fec{grid-template-columns:1fr}.journey-feature.jsx-33d2df6929a81fec{min-height:42px}.journey-map-wrapper.jsx-33d2df6929a81fec{padding-bottom:72%}}@media (width<=480px){.journey-preview-section.jsx-33d2df6929a81fec{padding:2.5rem 0}.journey-preview-container.jsx-33d2df6929a81fec{padding:0 .75rem}.journey-preview-header.jsx-33d2df6929a81fec{margin-bottom:1.5rem}.journey-preview-badge.jsx-33d2df6929a81fec{padding:.25rem .9rem;font-size:.72rem}.journey-preview-title.jsx-33d2df6929a81fec{font-size:1.55rem;line-height:1.3}.journey-preview-description.jsx-33d2df6929a81fec{font-size:.86rem;line-height:1.55}.journey-preview-grid.jsx-33d2df6929a81fec{gap:1.25rem}.journey-premium-badge.jsx-33d2df6929a81fec{margin-bottom:.75rem;padding:.3rem .85rem;font-size:.68rem}.journey-preview-subtitle.jsx-33d2df6929a81fec{font-size:1.15rem;line-height:1.35}.journey-preview-text.jsx-33d2df6929a81fec{margin-bottom:1.1rem;font-size:.85rem;line-height:1.6}.journey-preview-features.jsx-33d2df6929a81fec{grid-template-columns:1fr;gap:.5rem;margin-bottom:1.1rem}.journey-feature.jsx-33d2df6929a81fec{border-radius:9px;padding:.5rem .6rem}.journey-feature-text.jsx-33d2df6929a81fec{font-size:.78rem}.journey-book-btn.jsx-33d2df6929a81fec{border-radius:12px;width:100%;min-height:44px;padding:.75rem 1rem;font-size:.88rem}.journey-book-btn.jsx-33d2df6929a81fec svg{width:18px;height:18px}.journey-map-card.jsx-33d2df6929a81fec{border-radius:16px}.journey-map-wrapper.jsx-33d2df6929a81fec{padding-bottom:78%}.map-overlay.jsx-33d2df6929a81fec{padding:1rem}.map-overlay-icon.jsx-33d2df6929a81fec{margin-bottom:.5rem;font-size:2rem}.map-overlay.jsx-33d2df6929a81fec h4.jsx-33d2df6929a81fec{margin-bottom:.35rem;font-size:.9rem}.map-overlay.jsx-33d2df6929a81fec p.jsx-33d2df6929a81fec{max-width:240px;font-size:.72rem;line-height:1.4}.map-overlay-link.jsx-33d2df6929a81fec{margin-top:.3rem;font-size:.75rem}.map-overlay-link.jsx-33d2df6929a81fec svg{width:14px;height:14px}.journey-preview-stats.jsx-33d2df6929a81fec{grid-template-columns:repeat(2,minmax(0,1fr));gap:.6rem;margin-top:1.5rem}.journey-stat-card.jsx-33d2df6929a81fec{border-radius:12px;padding:.85rem .5rem}.journey-stat-icon.jsx-33d2df6929a81fec{width:34px;height:34px;margin-bottom:.4rem}.journey-stat-icon.jsx-33d2df6929a81fec svg{width:17px;height:17px}.journey-stat-label.jsx-33d2df6929a81fec{letter-spacing:.3px;font-size:.62rem}.journey-stat-value.jsx-33d2df6929a81fec{margin-top:.15rem;font-size:.85rem}}@media (width<=359px){.journey-preview-section.jsx-33d2df6929a81fec{padding:2rem 0}.journey-preview-container.jsx-33d2df6929a81fec{padding:0 .6rem}.journey-preview-title.jsx-33d2df6929a81fec{font-size:1.35rem}.journey-preview-description.jsx-33d2df6929a81fec{font-size:.8rem}.journey-premium-badge.jsx-33d2df6929a81fec{padding:.28rem .7rem;font-size:.62rem}.journey-preview-subtitle.jsx-33d2df6929a81fec{font-size:1.05rem}.journey-preview-text.jsx-33d2df6929a81fec{font-size:.78rem}.journey-feature.jsx-33d2df6929a81fec{padding:.45rem .5rem}.journey-feature-text.jsx-33d2df6929a81fec{font-size:.72rem}.journey-book-btn.jsx-33d2df6929a81fec{padding:.7rem .75rem;font-size:.8rem}.journey-map-wrapper.jsx-33d2df6929a81fec{padding-bottom:82%}.map-overlay.jsx-33d2df6929a81fec{padding:.75rem}.map-overlay-icon.jsx-33d2df6929a81fec{font-size:1.7rem}.map-overlay.jsx-33d2df6929a81fec h4.jsx-33d2df6929a81fec{font-size:.8rem}.map-overlay.jsx-33d2df6929a81fec p.jsx-33d2df6929a81fec{max-width:200px;font-size:.65rem}.map-overlay-link.jsx-33d2df6929a81fec{font-size:.68rem}.journey-preview-stats.jsx-33d2df6929a81fec{gap:.5rem}.journey-stat-card.jsx-33d2df6929a81fec{border-radius:10px;padding:.7rem .35rem}.journey-stat-icon.jsx-33d2df6929a81fec{width:30px;height:30px}.journey-stat-label.jsx-33d2df6929a81fec{font-size:.55rem}.journey-stat-value.jsx-33d2df6929a81fec{font-size:.75rem}}@media (hover:none){.journey-feature.jsx-33d2df6929a81fec,.journey-map-card.jsx-33d2df6929a81fec,.journey-stat-card.jsx-33d2df6929a81fec,.journey-book-btn.jsx-33d2df6929a81fec{transition:none}}@media (prefers-reduced-motion:reduce){.journey-feature.jsx-33d2df6929a81fec,.journey-map-card.jsx-33d2df6929a81fec,.journey-stat-card.jsx-33d2df6929a81fec,.journey-book-btn.jsx-33d2df6929a81fec,.map-overlay.jsx-33d2df6929a81fec{transition:none}}"
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 5216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding",
                        style: {
                            padding: "4rem 0",
                            background: "#ffffff"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            style: {
                                maxWidth: "1280px",
                                margin: "0 auto",
                                padding: "0 1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                background: "#eef3ff",
                                                color: "#0052CC",
                                                padding: "0.25rem 1.2rem",
                                                borderRadius: "40px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 6321,
                                                    columnNumber: 17
                                                }, this),
                                                " FAQ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 6308,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            children: [
                                                "Frequently Asked Questions About ",
                                                route.origin,
                                                " to",
                                                " ",
                                                route.destination
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 6323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            children: [
                                                "Common questions about hiring a Force Urbania Tempo Traveller for the ",
                                                route.origin,
                                                " to ",
                                                route.destination,
                                                " route."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 6334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 6301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.75rem",
                                        maxWidth: "820px",
                                        margin: "0 auto"
                                    },
                                    children: routeFAQs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                                            question: faq.q,
                                            answer: faq.a,
                                            isOpen: openFAQIndex === index,
                                            onToggle: ()=>toggleFAQ(index)
                                        }, index, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 6356,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 6346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                                    type: "application/ld+json",
                                    dangerouslySetInnerHTML: {
                                        __html: JSON.stringify({
                                            "@context": "https://schema.org",
                                            "@type": "FAQPage",
                                            mainEntity: routeFAQs.map((faq)=>({
                                                    "@type": "Question",
                                                    name: faq.q,
                                                    acceptedAnswer: {
                                                        "@type": "Answer",
                                                        text: faq.a
                                                    }
                                                }))
                                        })
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 6367,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 6293,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 6289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "5rem 0",
                            background: "linear-gradient(145deg, #003ea6 0%, #0770E3 100%)",
                            color: "#fff",
                            position: "relative",
                            overflow: "hidden",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "-50%",
                                    right: "-20%",
                                    width: "60%",
                                    height: "200%",
                                    background: "radial-gradient(circle, rgba(255,184,0,0.06) 0%, transparent 70%)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 6399,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "-30%",
                                    left: "-10%",
                                    width: "40%",
                                    height: "150%",
                                    background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 6411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container",
                                style: {
                                    maxWidth: "900px",
                                    margin: "0 auto",
                                    padding: "0 1.5rem",
                                    position: "relative",
                                    zIndex: 2,
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            background: "rgba(255,255,255,0.15)",
                                            backdropFilter: "blur(8px)",
                                            padding: "0.3rem 1.2rem",
                                            borderRadius: "40px",
                                            fontSize: "0.8rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.5px",
                                            color: "#FFB800",
                                            marginBottom: "1.5rem",
                                            marginLeft: "auto",
                                            marginRight: "auto"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                size: 14,
                                                fill: "#FFB800"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 6454,
                                                columnNumber: 15
                                            }, this),
                                            " ⭐⭐⭐ Limited Availability"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 6436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "clamp(2rem, 4vw, 3rem)",
                                            fontWeight: 800,
                                            marginBottom: "1rem",
                                            color: "#fff",
                                            lineHeight: 1.2,
                                            textAlign: "center"
                                        },
                                        children: [
                                            "Ready to Book Your",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#FFB800"
                                                },
                                                children: [
                                                    route.origin,
                                                    " to ",
                                                    route.destination
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 6469,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            "Trip?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 6458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1.1rem",
                                            color: "rgba(255,255,255,0.9)",
                                            maxWidth: "650px",
                                            margin: "0 auto 2rem",
                                            lineHeight: 1.7,
                                            textAlign: "center"
                                        },
                                        children: "Secure your luxury Force Urbania Tempo Traveller now. Get instant confirmation, transparent pricing, and a dedicated chauffeur for your journey."
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 6476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                                            gap: "1rem",
                                            maxWidth: "750px",
                                            margin: "0 auto 2.5rem",
                                            padding: "1.5rem",
                                            background: "rgba(255,255,255,0.08)",
                                            borderRadius: "20px",
                                            backdropFilter: "blur(10px)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            textAlign: "center"
                                        },
                                        children: [
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 6509,
                                                    columnNumber: 25
                                                }, this),
                                                text: "Instant Confirmation"
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 6512,
                                                    columnNumber: 25
                                                }, this),
                                                text: "Verified Chauffeur"
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 6513,
                                                    columnNumber: 25
                                                }, this),
                                                text: "Best Price Guarantee"
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 6514,
                                                    columnNumber: 25
                                                }, this),
                                                text: "24/7 Support"
                                            }
                                        ].map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    justifyContent: "center",
                                                    fontSize: "0.9rem",
                                                    fontWeight: 500,
                                                    color: "rgba(255,255,255,0.95)",
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#25D366"
                                                        },
                                                        children: benefit.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 6529,
                                                        columnNumber: 19
                                                    }, this),
                                                    benefit.text
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 6516,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 6492,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "1rem",
                                            justifyContent: "center",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book Force Urbania from ${route.origin} to ${route.destination} - Trip Date: [Your Date] - Group Size: [Number]`)}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.8rem",
                                                    padding: "1.2rem 3rem",
                                                    borderRadius: "60px",
                                                    background: "#25D366",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    fontSize: "1.1rem",
                                                    textDecoration: "none",
                                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)",
                                                    textAlign: "center"
                                                },
                                                className: "cta-whatsapp-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 6570,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Book Now on WhatsApp"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 6545,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:+${whatsappNumber}`,
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.8rem",
                                                    padding: "1.2rem 2.5rem",
                                                    borderRadius: "60px",
                                                    background: "transparent",
                                                    color: "#fff",
                                                    fontWeight: 600,
                                                    fontSize: "1.05rem",
                                                    textDecoration: "none",
                                                    transition: "all 0.3s ease",
                                                    border: "2px solid rgba(255,255,255,0.3)",
                                                    cursor: "pointer",
                                                    textAlign: "center"
                                                },
                                                className: "cta-phone-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 6594,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Call Now"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 6574,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 6536,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: "2rem",
                                            flexWrap: "wrap",
                                            marginTop: "2.5rem",
                                            paddingTop: "2rem",
                                            borderTop: "1px solid rgba(255,255,255,0.1)",
                                            textAlign: "center"
                                        },
                                        children: [
                                            {
                                                icon: "✓",
                                                text: "No Hidden Charges"
                                            },
                                            {
                                                icon: "✓",
                                                text: "Free Cancellation*"
                                            },
                                            {
                                                icon: "✓",
                                                text: "Pay Later Option"
                                            },
                                            {
                                                icon: "✓",
                                                text: "100% Refund*"
                                            }
                                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.4rem",
                                                    fontSize: "0.85rem",
                                                    color: "rgba(255,255,255,0.8)",
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#25D366",
                                                            fontWeight: 700,
                                                            fontSize: "1rem"
                                                        },
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 6628,
                                                        columnNumber: 19
                                                    }, this),
                                                    item.text
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 6617,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 6599,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 6424,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 6388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RouteTemplate.jsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RouteTemplate.jsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
_s(RouteTemplate, "ytxhoCYppTOVEWhRJhmuUmrd710=");
_c2 = RouteTemplate;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FAQItem");
__turbopack_context__.k.register(_c1, "RouteSeo");
__turbopack_context__.k.register(_c2, "RouteTemplate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_1rp72he._.js.map