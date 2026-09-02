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
// components/CityGuide.jsx
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
        className: "jsx-8c9cc2151cd472e3" + " " + "city-guide-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    maxWidth: "780px",
                    margin: "0 auto 2.5rem"
                },
                className: "jsx-8c9cc2151cd472e3",
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
                        className: "jsx-8c9cc2151cd472e3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            "City Guide"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                            fontWeight: 700,
                            margin: "0.7rem 0 0.75rem",
                            color: "#0b1a2e"
                        },
                        className: "jsx-8c9cc2151cd472e3",
                        children: [
                            "Discover ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#0052CC"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: route?.destination
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 68,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "1rem",
                            color: "#4a5a6e",
                            lineHeight: "1.7",
                            margin: 0
                        },
                        className: "jsx-8c9cc2151cd472e3",
                        children: cityData.overview
                    }, void 0, false, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CityGuide.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "#ffffff",
                    borderRadius: "24px",
                    padding: "2rem",
                    border: "1px solid #ecf0f7",
                    boxShadow: "0 8px 24px rgba(0,20,50,0.04)"
                },
                className: "jsx-8c9cc2151cd472e3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "2rem",
                            padding: "1.5rem",
                            background: "#f0f4fe",
                            borderRadius: "16px"
                        },
                        className: "jsx-8c9cc2151cd472e3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#0b1a2e",
                                    marginBottom: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 18,
                                        color: "#0052CC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    "About ",
                                    route?.destination
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4a5a6e",
                                    fontSize: "0.95rem",
                                    lineHeight: "1.7",
                                    margin: 0
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: cityData.detailedDescription
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    cityData.topAttractions && cityData.topAttractions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "1.5rem",
                            borderBottom: "1px solid #ecf0f7",
                            paddingBottom: "1.5rem"
                        },
                        className: "jsx-8c9cc2151cd472e3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection("attractions"),
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "0.25rem 0",
                                    fontFamily: "inherit"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#0b1a2e",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            margin: 0
                                        },
                                        className: "jsx-8c9cc2151cd472e3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                size: 18,
                                                color: "#0052CC"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            "Top Attractions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    expandedSections.attractions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            expandedSections.attractions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "1rem",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "0.75rem"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: cityData.topAttractions.slice(0, 8).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "0.5rem",
                                            padding: "0.5rem",
                                            background: "#f9fafc",
                                            borderRadius: "10px",
                                            fontSize: "0.9rem",
                                            color: "#1a2634",
                                            lineHeight: "1.4"
                                        },
                                        className: "jsx-8c9cc2151cd472e3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#0052CC",
                                                    flexShrink: 0
                                                },
                                                className: "jsx-8c9cc2151cd472e3",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 195,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8c9cc2151cd472e3",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 181,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    cityData.localFood && cityData.localFood.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "1.5rem",
                            borderBottom: "1px solid #ecf0f7",
                            paddingBottom: "1.5rem"
                        },
                        className: "jsx-8c9cc2151cd472e3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection("food"),
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "0.25rem 0",
                                    fontFamily: "inherit"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#0b1a2e",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            margin: 0
                                        },
                                        className: "jsx-8c9cc2151cd472e3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                size: 18,
                                                color: "#FF6B35"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            "Local Food"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    expandedSections.food ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            expandedSections.food && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "1rem",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.6rem"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: cityData.localFood.map((food, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: "#fff3e8",
                                            color: "#b33d00",
                                            padding: "0.4rem 1rem",
                                            borderRadius: "20px",
                                            fontSize: "0.85rem",
                                            fontWeight: 500
                                        },
                                        className: "jsx-8c9cc2151cd472e3",
                                        children: food
                                    }, index, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 258,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    cityData.bestTimeToVisit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "1.5rem",
                            borderBottom: "1px solid #ecf0f7",
                            paddingBottom: "1.5rem"
                        },
                        className: "jsx-8c9cc2151cd472e3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#0b1a2e",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginBottom: "0.5rem"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 18,
                                        color: "#0891b2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this),
                                    "Best Time to Visit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4a5a6e",
                                    fontSize: "0.95rem",
                                    margin: 0,
                                    paddingLeft: "2rem"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: cityData.bestTimeToVisit
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    cityData.travelTips && cityData.travelTips.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8c9cc2151cd472e3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection("tips"),
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "0.25rem 0",
                                    fontFamily: "inherit"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#0b1a2e",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            margin: 0
                                        },
                                        className: "jsx-8c9cc2151cd472e3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                size: 18,
                                                color: "#F59E0B"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            "Travel Tips"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this),
                                    expandedSections.tips ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 345,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 20,
                                        color: "#7a8a9e"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            expandedSections.tips && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    marginTop: "1rem",
                                    listStyle: "none",
                                    padding: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem"
                                },
                                className: "jsx-8c9cc2151cd472e3",
                                children: cityData.travelTips.map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "0.5rem",
                                            padding: "0.5rem 0.75rem",
                                            background: "#f0fdf4",
                                            borderRadius: "10px",
                                            fontSize: "0.9rem",
                                            color: "#1a2634",
                                            lineHeight: "1.5"
                                        },
                                        className: "jsx-8c9cc2151cd472e3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#10b981",
                                                    flexShrink: 0
                                                },
                                                className: "jsx-8c9cc2151cd472e3",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 377,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-8c9cc2151cd472e3",
                                                children: tip
                                            }, void 0, false, {
                                                fileName: "[project]/components/CityGuide.jsx",
                                                lineNumber: 378,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/CityGuide.jsx",
                                        lineNumber: 363,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CityGuide.jsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityGuide.jsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CityGuide.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8c9cc2151cd472e3",
                children: '@media (width<=768px){.city-guide-wrapper.jsx-8c9cc2151cd472e3{padding:0}.city-guide-wrapper.jsx-8c9cc2151cd472e3 [style*="grid-template-columns: 1fr 1fr"].jsx-8c9cc2151cd472e3{grid-template-columns:1fr!important}.city-guide-wrapper.jsx-8c9cc2151cd472e3 [style*="padding: 2rem"].jsx-8c9cc2151cd472e3{padding:1.25rem!important}}@media (width<=480px){.city-guide-wrapper.jsx-8c9cc2151cd472e3 h2.jsx-8c9cc2151cd472e3{font-size:1.5rem!important}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CityGuide.jsx",
        lineNumber: 34,
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CityGuide$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                cityData: cityGuide,
                                route: route
                            }, void 0, false, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 1366,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 1358,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 1354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section-padding",
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1404,
                                                    columnNumber: 17
                                                }, this),
                                                " How Booking Works"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1391,
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
                                                "Book Your",
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
                                                    lineNumber: 1415,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                "Urbania in 4 Simple Steps"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1406,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
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
                                            lineNumber: 1420,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                        gap: "2rem",
                                        position: "relative"
                                    },
                                    children: [
                                        {
                                            step: "1",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                size: 28
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1443,
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
                                                lineNumber: 1449,
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
                                                lineNumber: 1455,
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
                                                lineNumber: 1461,
                                                columnNumber: 25
                                            }, this),
                                            title: "Enjoy Travel",
                                            desc: `Our chauffeur arrives on time for your comfortable ${route.origin} to ${route.destination} journey.`
                                        }
                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "relative",
                                                background: "#fff",
                                                padding: "2rem 1.5rem",
                                                borderRadius: "24px",
                                                textAlign: "center",
                                                border: "1px solid #ecf0f7",
                                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                                                cursor: "pointer",
                                                transform: "scale(1)"
                                            },
                                            className: "step-card",
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "scale(1.05)";
                                                e.currentTarget.style.borderColor = "#0052CC";
                                                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 82, 204, 0.12)";
                                                e.currentTarget.style.background = "#ffffff";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.borderColor = "#ecf0f7";
                                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.02)";
                                                e.currentTarget.style.background = "#fff";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: "50px",
                                                        height: "50px",
                                                        margin: "0 auto 1rem",
                                                        background: "#eef3ff",
                                                        color: "#0052CC",
                                                        borderRadius: "50%",
                                                        fontSize: "1.5rem",
                                                        fontWeight: 700,
                                                        transition: "all 0.3s ease"
                                                    },
                                                    className: "step-number",
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.background = "#0052CC";
                                                        e.currentTarget.style.color = "#ffffff";
                                                        e.currentTarget.style.transform = "scale(1.1)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.background = "#eef3ff";
                                                        e.currentTarget.style.color = "#0052CC";
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    },
                                                    children: item.step
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "#0052CC",
                                                        marginBottom: "0.5rem",
                                                        transition: "transform 0.3s ease"
                                                    },
                                                    className: "step-icon",
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1.15)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    },
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.1rem",
                                                        fontWeight: 700,
                                                        marginBottom: "0.5rem",
                                                        color: "#0b1a2e",
                                                        transition: "color 0.3s ease"
                                                    },
                                                    className: "step-title",
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.color = "#0052CC";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.color = "#0b1a2e";
                                                    },
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1546,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.9rem",
                                                        color: "#4a5a6e",
                                                        lineHeight: "1.6",
                                                        transition: "color 0.3s ease"
                                                    },
                                                    className: "step-desc",
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.color = "#1a2634";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.color = "#4a5a6e";
                                                    },
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1566,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        height: "3px",
                                                        background: "linear-gradient(90deg, #0052CC 0%, #0770E3 100%)",
                                                        transform: "scaleX(0)",
                                                        transformOrigin: "left",
                                                        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                                                    },
                                                    className: "step-bottom-line",
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.transform = "scaleX(1)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.transform = "scaleX(0)";
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1585,
                                                    columnNumber: 19
                                                }, this),
                                                index < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: "30%",
                                                        right: "-1rem",
                                                        width: "2rem",
                                                        height: "2px",
                                                        background: "#0052CC",
                                                        opacity: 0.3,
                                                        display: "none"
                                                    },
                                                    className: "step-connector"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1610,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1466,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        marginTop: "3rem",
                                        padding: "2rem",
                                        background: "#ffffff",
                                        borderRadius: "20px",
                                        border: "1px solid #ecf0f7",
                                        transition: "all 0.3s ease"
                                    },
                                    className: "booking-cta",
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = "#0052CC";
                                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 82, 204, 0.06)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = "#ecf0f7";
                                        e.currentTarget.style.boxShadow = "none";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1rem",
                                                color: "#4a5a6e",
                                                marginBottom: "1rem"
                                            },
                                            children: [
                                                "Ready to book your Urbania for the",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        route.origin,
                                                        " to ",
                                                        route.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1658,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                "route?"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1650,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book Force Urbania from ${route.origin} to ${route.destination} - Trip Date: [Your Date] - Group Size: [Number]`)}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.6rem",
                                                padding: "0.8rem 2.5rem",
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
                                            className: "booking-cta-btn",
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "scale(1.05)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.35)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 1695,
                                                    columnNumber: 17
                                                }, this),
                                                " Book Now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 1663,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 1629,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 1376,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 1372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "4rem 0",
                            background: "#ffffff"
                        },
                        className: "jsx-751477fed6e52f0d" + " " + "section-padding",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: "1280px",
                                    margin: "0 auto",
                                    padding: "0 1.5rem"
                                },
                                className: "jsx-751477fed6e52f0d" + " " + "container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center",
                                            maxWidth: "780px",
                                            margin: "0 auto 2.5rem"
                                        },
                                        className: "jsx-751477fed6e52f0d",
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
                                                className: "jsx-751477fed6e52f0d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1736,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Route Guide"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1722,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                                                    fontWeight: 700,
                                                    margin: "0.7rem 0 0.75rem",
                                                    color: "#0b1a2e"
                                                },
                                                className: "jsx-751477fed6e52f0d",
                                                children: [
                                                    "Complete Travel Guide for",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#0052CC"
                                                        },
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: [
                                                            route.origin,
                                                            " to ",
                                                            route.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1748,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1739,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: "1rem",
                                                    color: "#4a5a6e",
                                                    lineHeight: "1.7",
                                                    margin: 0
                                                },
                                                className: "jsx-751477fed6e52f0d",
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
                                                lineNumber: 1752,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 1715,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "#ffffff",
                                            borderRadius: "24px",
                                            padding: "2rem",
                                            border: "1px solid #ecf0f7",
                                            boxShadow: "0 8px 24px rgba(0,20,50,0.04)"
                                        },
                                        className: "jsx-751477fed6e52f0d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                                    gap: "1.5rem",
                                                    marginBottom: "2rem",
                                                    paddingBottom: "2rem",
                                                    borderBottom: "1px solid #ecf0f7"
                                                },
                                                className: "jsx-751477fed6e52f0d",
                                                children: [
                                                    {
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 20,
                                                            color: "#0052CC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 1789,
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
                                                            lineNumber: 1794,
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
                                                            lineNumber: 1799,
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
                                                            lineNumber: 1804,
                                                            columnNumber: 27
                                                        }, this),
                                                        label: "Road Type",
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoadType"])(route.category)
                                                    }
                                                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.75rem",
                                                            padding: "0.75rem",
                                                            background: "#f9fafc",
                                                            borderRadius: "12px",
                                                            transition: "all 0.3s ease"
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.background = "#f0f4fe";
                                                            e.currentTarget.style.transform = "translateY(-2px)";
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = "#f9fafc";
                                                            e.currentTarget.style.transform = "translateY(0)";
                                                        },
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flexShrink: 0
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1829,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: "0.7rem",
                                                                            color: "#7a8a9e"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1831,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: "0.9rem",
                                                                            fontWeight: 600,
                                                                            color: "#0b1a2e"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: item.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1834,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1830,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1809,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1777,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: "1.5rem",
                                                    marginBottom: "2rem",
                                                    paddingBottom: "2rem",
                                                    borderBottom: "1px solid #ecf0f7"
                                                },
                                                className: "jsx-751477fed6e52f0d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "1rem",
                                                                    fontWeight: 700,
                                                                    color: "#0b1a2e",
                                                                    marginBottom: "1rem",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.5rem"
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1872,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    "Route Information"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1861,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: "0.75rem"
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            padding: "0.5rem 0.75rem",
                                                                            background: "#f9fafc",
                                                                            borderRadius: "8px",
                                                                            fontSize: "0.9rem"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "#4a5a6e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: "Highway Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1893,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 600,
                                                                                    color: "#0b1a2e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHighwayName"])(route.origin, route.destination)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1894,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1883,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            padding: "0.5rem 0.75rem",
                                                                            background: "#f9fafc",
                                                                            borderRadius: "8px",
                                                                            fontSize: "0.9rem"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "#4a5a6e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: "Road Condition"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1908,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 600,
                                                                                    color: route.distanceKm > 400 ? "#b33d00" : "#16803c"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoadCondition"])(route.distanceKm)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1909,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1898,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            padding: "0.5rem 0.75rem",
                                                                            background: "#f9fafc",
                                                                            borderRadius: "8px",
                                                                            fontSize: "0.9rem"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "#4a5a6e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: "Night Travel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1928,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 600,
                                                                                    color: route.distanceKm < 300 ? "#16803c" : "#b33d00"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: route.distanceKm < 300 ? "✓ Safe" : "⚠️ Not Recommended"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1929,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1918,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            padding: "0.5rem 0.75rem",
                                                                            background: "#f9fafc",
                                                                            borderRadius: "8px",
                                                                            fontSize: "0.9rem"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "#4a5a6e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: "Best Season"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1950,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontWeight: 600,
                                                                                    color: "#0b1a2e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBestSeason"])(route.destination)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1951,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1940,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1876,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1860,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "1rem",
                                                                    fontWeight: 700,
                                                                    color: "#0b1a2e",
                                                                    marginBottom: "1rem",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.5rem"
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                                        size: 18,
                                                                        color: "#F59E0B"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1971,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    "Quick Tips"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1960,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: "0.75rem"
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "flex-start",
                                                                            gap: "0.5rem",
                                                                            padding: "0.5rem 0.75rem",
                                                                            background: "#f0fdf4",
                                                                            borderRadius: "8px",
                                                                            fontSize: "0.85rem",
                                                                            color: "#1a2634",
                                                                            lineHeight: "1.5"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                size: 16,
                                                                                color: "#10b981",
                                                                                style: {
                                                                                    flexShrink: 0,
                                                                                    marginTop: "2px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 1995,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: [
                                                                                    "Start early from ",
                                                                                    route.origin,
                                                                                    " to avoid traffic"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2000,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 1982,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "flex-start",
                                                                            gap: "0.5rem",
                                                                            padding: "0.5rem 0.75rem",
                                                                            background: "#fef3c7",
                                                                            borderRadius: "8px",
                                                                            fontSize: "0.85rem",
                                                                            color: "#1a2634",
                                                                            lineHeight: "1.5"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fuel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fuel$3e$__["Fuel"], {
                                                                                size: 16,
                                                                                color: "#d97706",
                                                                                style: {
                                                                                    flexShrink: 0,
                                                                                    marginTop: "2px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2017,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: "Fuel up before entering remote stretches"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2022,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2004,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "flex-start",
                                                                            gap: "0.5rem",
                                                                            padding: "0.5rem 0.75rem",
                                                                            background: "#e0f2fe",
                                                                            borderRadius: "8px",
                                                                            fontSize: "0.85rem",
                                                                            color: "#1a2634",
                                                                            lineHeight: "1.5"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                                size: 16,
                                                                                color: "#0284c7",
                                                                                style: {
                                                                                    flexShrink: 0,
                                                                                    marginTop: "2px"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2037,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: "Carry camera for scenic views on the route"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2042,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2024,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 1975,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 1959,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 1849,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: "1.5rem",
                                                    borderBottom: "1px solid #ecf0f7",
                                                    paddingBottom: "1.5rem"
                                                },
                                                className: "jsx-751477fed6e52f0d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleSection("stopovers"),
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            width: "100%",
                                                            background: "transparent",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            padding: "0.25rem 0",
                                                            fontFamily: "inherit"
                                                        },
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "1rem",
                                                                    fontWeight: 700,
                                                                    color: "#0b1a2e",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.5rem",
                                                                    margin: 0
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2081,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    "Recommended Stopovers"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2070,
                                                                columnNumber: 19
                                                            }, this),
                                                            expandedSections.stopovers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2085,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2087,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2056,
                                                        columnNumber: 17
                                                    }, this),
                                                    expandedSections.stopovers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: "1rem",
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                                            gap: "1rem"
                                                        },
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStopovers"])(route.distanceKm).map((stopover, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "flex-start",
                                                                    gap: "0.75rem",
                                                                    padding: "1rem",
                                                                    background: "#f9fafc",
                                                                    borderRadius: "12px",
                                                                    transition: "all 0.3s ease"
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.background = "#f0f4fe";
                                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.background = "#f9fafc";
                                                                    e.currentTarget.style.transform = "translateY(0)";
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            flexShrink: 0,
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "50%",
                                                                            background: "#eef3ff",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            color: "#0052CC"
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            stopover.icon === "coffee" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2135,
                                                                                columnNumber: 58
                                                                            }, this),
                                                                            stopover.icon === "food" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2136,
                                                                                columnNumber: 56
                                                                            }, this),
                                                                            stopover.icon === "hotel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2137,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            stopover.icon === "rest" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2138,
                                                                                columnNumber: 56
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2122,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.85rem",
                                                                                    fontWeight: 600,
                                                                                    color: "#0b1a2e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: stopover.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2141,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.75rem",
                                                                                    color: "#4a5a6e"
                                                                                },
                                                                                className: "jsx-751477fed6e52f0d",
                                                                                children: stopover.purpose
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                                lineNumber: 2150,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2140,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2102,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2092,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2049,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-751477fed6e52f0d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleSection("tips"),
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            width: "100%",
                                                            background: "transparent",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            padding: "0.25rem 0",
                                                            fontFamily: "inherit"
                                                        },
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "1rem",
                                                                    fontWeight: 700,
                                                                    color: "#0b1a2e",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.5rem",
                                                                    margin: 0
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                        size: 18,
                                                                        color: "#0052CC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2189,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    "Pro Travel Tips"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2178,
                                                                columnNumber: 19
                                                            }, this),
                                                            expandedSections.tips ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2193,
                                                                columnNumber: 21
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 20,
                                                                color: "#7a8a9e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2195,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2164,
                                                        columnNumber: 17
                                                    }, this),
                                                    expandedSections.tips && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: "1rem",
                                                            display: "grid",
                                                            gridTemplateColumns: "1fr 1fr",
                                                            gap: "0.75rem"
                                                        },
                                                        className: "jsx-751477fed6e52f0d",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTravelTips"])(route).map((tip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "flex-start",
                                                                    gap: "0.5rem",
                                                                    padding: "0.75rem",
                                                                    background: "#f0f4fe",
                                                                    borderRadius: "10px",
                                                                    fontSize: "0.85rem",
                                                                    color: "#1a2634",
                                                                    lineHeight: "1.5"
                                                                },
                                                                className: "jsx-751477fed6e52f0d",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#0052CC",
                                                                            flexShrink: 0
                                                                        },
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2223,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-751477fed6e52f0d",
                                                                        children: tip
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 2226,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 2209,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 2200,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2163,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 1767,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 1706,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "751477fed6e52f0d",
                                children: '@media (width<=768px){.route-guide-wrapper.jsx-751477fed6e52f0d{padding:0}.route-guide-wrapper.jsx-751477fed6e52f0d [style*="grid-template-columns: 1fr 1fr"].jsx-751477fed6e52f0d{grid-template-columns:1fr!important}.route-guide-wrapper.jsx-751477fed6e52f0d [style*="padding: 2rem"].jsx-751477fed6e52f0d{padding:1.25rem!important}.route-guide-wrapper.jsx-751477fed6e52f0d [style*="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))"].jsx-751477fed6e52f0d{grid-template-columns:repeat(2,1fr)!important}}@media (width<=480px){.route-guide-wrapper.jsx-751477fed6e52f0d h2.jsx-751477fed6e52f0d{font-size:1.5rem!important}.route-guide-wrapper.jsx-751477fed6e52f0d [style*="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))"].jsx-751477fed6e52f0d{grid-template-columns:1fr!important}}'
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 1702,
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
                                                    lineNumber: 2303,
                                                    columnNumber: 17
                                                }, this),
                                                " Travel Solutions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2290,
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
                                                    lineNumber: 2314,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2305,
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
                                            lineNumber: 2318,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 2283,
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
                                                    lineNumber: 2450,
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
                                                    lineNumber: 2476,
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
                                                    lineNumber: 2496,
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
                                                                    lineNumber: 2521,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-ce4acdc41ab8ce30",
                                                                    children: feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 2522,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 2510,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2508,
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
                                                            lineNumber: 2539,
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
                                                            lineNumber: 2542,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2528,
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
                                                            lineNumber: 2587,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Book Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2554,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2423,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 2332,
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
                                            lineNumber: 2613,
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
                                            lineNumber: 2623,
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
                                                            lineNumber: 2676,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Get Custom Quote"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2645,
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
                                                            lineNumber: 2704,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Call Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2678,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2637,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 2594,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "ce4acdc41ab8ce30",
                                    children: "@media (width<=768px){.travel-solution-card.jsx-ce4acdc41ab8ce30,.quick-quote-cta.jsx-ce4acdc41ab8ce30{padding:1.5rem!important}.quick-quote-cta.jsx-ce4acdc41ab8ce30 h3.jsx-ce4acdc41ab8ce30{font-size:1.2rem!important}}@media (width<=480px){.travel-solution-card.jsx-ce4acdc41ab8ce30{padding:1rem!important}.solution-icon.jsx-ce4acdc41ab8ce30{width:48px!important;height:48px!important;font-size:1.6rem!important}}"
                                }, void 0, false, void 0, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 2274,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 2270,
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
                            className: "jsx-76150aa2d72024ce" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 3rem"
                                    },
                                    className: "jsx-76150aa2d72024ce",
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
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2774,
                                                    columnNumber: 17
                                                }, this),
                                                " Transparent Pricing"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2761,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                "Clear, Transparent Pricing for",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#0052CC"
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: [
                                                        route.origin,
                                                        " to ",
                                                        route.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2785,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2776,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                "No hidden charges, no surprises. What you see is what you pay for your",
                                                route.origin,
                                                " to ",
                                                route.destination,
                                                " Urbania rental."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2789,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 2754,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                        gap: "1.5rem",
                                        marginBottom: "3rem"
                                    },
                                    className: "jsx-76150aa2d72024ce",
                                    children: [
                                        {
                                            title: "Base Fare",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 2814,
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
                                                lineNumber: 2826,
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
                                                lineNumber: 2838,
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
                                                lineNumber: 2850,
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
                                            className: "jsx-76150aa2d72024ce" + " " + "pricing-card",
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
                                                    className: "jsx-76150aa2d72024ce" + " " + "pricing-bar"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2890,
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
                                                    className: "jsx-76150aa2d72024ce" + " " + "pricing-icon",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2910,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.1rem",
                                                        fontWeight: 700,
                                                        color: "#0b1a2e",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2940,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.85rem",
                                                        color: "#4a5a6e",
                                                        marginBottom: "0.75rem"
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2952,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.4rem"
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: item.details.map((detail, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                                fontSize: "0.85rem",
                                                                color: "#1a2634",
                                                                padding: "0.2rem 0"
                                                            },
                                                            className: "jsx-76150aa2d72024ce",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 14,
                                                                    color: item.color
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 2982,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-76150aa2d72024ce",
                                                                    children: detail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 2983,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 2971,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 2963,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 2861,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 2803,
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
                                    className: "jsx-76150aa2d72024ce" + " " + "pricing-table-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "1.2rem",
                                                fontWeight: 700,
                                                color: "#0b1a2e",
                                                marginBottom: "1.5rem",
                                                textAlign: "center"
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                "Detailed Pricing Breakdown for ",
                                                route.origin,
                                                " to",
                                                " ",
                                                route.destination
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3012,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                overflowX: "auto"
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: "100%",
                                                    borderCollapse: "collapse",
                                                    minWidth: "600px"
                                                },
                                                className: "jsx-76150aa2d72024ce",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "jsx-76150aa2d72024ce",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                background: "#f9fafc",
                                                                borderBottom: "2px solid #ecf0f7"
                                                            },
                                                            className: "jsx-76150aa2d72024ce",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "1rem 1.2rem",
                                                                        textAlign: "left",
                                                                        fontWeight: 600,
                                                                        color: "#0b1a2e"
                                                                    },
                                                                    className: "jsx-76150aa2d72024ce",
                                                                    children: "Component"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3040,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "1rem 1.2rem",
                                                                        textAlign: "left",
                                                                        fontWeight: 600,
                                                                        color: "#0b1a2e"
                                                                    },
                                                                    className: "jsx-76150aa2d72024ce",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3050,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: "1rem 1.2rem",
                                                                        textAlign: "right",
                                                                        fontWeight: 600,
                                                                        color: "#0b1a2e"
                                                                    },
                                                                    className: "jsx-76150aa2d72024ce",
                                                                    children: "Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3060,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3034,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 3033,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "jsx-76150aa2d72024ce",
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
                                                                className: "jsx-76150aa2d72024ce" + " " + "pricing-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "0.8rem 1.2rem",
                                                                            fontWeight: item.highlight ? 700 : 500,
                                                                            color: item.highlight ? "#0052CC" : "#0b1a2e"
                                                                        },
                                                                        className: "jsx-76150aa2d72024ce",
                                                                        children: item.component
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 3133,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "0.8rem 1.2rem",
                                                                            color: "#4a5a6e"
                                                                        },
                                                                        className: "jsx-76150aa2d72024ce",
                                                                        children: item.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 3142,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: "0.8rem 1.2rem",
                                                                            textAlign: "right",
                                                                            fontWeight: item.highlight ? 700 : 500,
                                                                            color: item.highlight ? "#0052CC" : "#0b1a2e"
                                                                        },
                                                                        className: "jsx-76150aa2d72024ce",
                                                                        children: item.amount
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 3150,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 3111,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 3072,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 3026,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3025,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "0.8rem",
                                                color: "#7a8a9e",
                                                textAlign: "center",
                                                marginTop: "1rem"
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: "* Final fare may vary based on actual route, tolls, and additional halts. Contact us for a precise quote."
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 2992,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "2rem",
                                        marginBottom: "2rem"
                                    },
                                    className: "jsx-76150aa2d72024ce",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "#f0fdf4",
                                                borderRadius: "20px",
                                                padding: "1.5rem",
                                                border: "1px solid #bbf7d0",
                                                transition: "all 0.3s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "scale(1.02)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(34, 197, 94, 0.15)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.1rem",
                                                        fontWeight: 700,
                                                        color: "#15803d",
                                                        marginBottom: "1rem",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.5rem"
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3218,
                                                            columnNumber: 19
                                                        }, this),
                                                        " What's Included"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3207,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: "none",
                                                        padding: 0,
                                                        margin: 0
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: [
                                                        `Base fare for ${route.distanceKm * 2} km round trip`,
                                                        "Professional, verified driver",
                                                        "Fuel costs",
                                                        "State permits and taxes",
                                                        "Basic insurance coverage",
                                                        "AC comfort throughout journey",
                                                        "24/7 customer support"
                                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                                padding: "0.4rem 0",
                                                                fontSize: "0.9rem",
                                                                color: "#1a2634"
                                                            },
                                                            className: "jsx-76150aa2d72024ce",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: "#22c55e",
                                                                        fontSize: "1.1rem"
                                                                    },
                                                                    className: "jsx-76150aa2d72024ce",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3241,
                                                                    columnNumber: 23
                                                                }, this),
                                                                item
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3230,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3220,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "#fef2f2",
                                                borderRadius: "20px",
                                                padding: "1.5rem",
                                                border: "1px solid #fecaca",
                                                transition: "all 0.3s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "scale(1.02)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(239, 68, 68, 0.1)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.1rem",
                                                        fontWeight: 700,
                                                        color: "#dc2626",
                                                        marginBottom: "1rem",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.5rem"
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3280,
                                                            columnNumber: 19
                                                        }, this),
                                                        " What's Not Included"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3269,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: "none",
                                                        padding: 0,
                                                        margin: 0
                                                    },
                                                    className: "jsx-76150aa2d72024ce",
                                                    children: [
                                                        "Toll taxes (payable as per actual)",
                                                        "Inter-state permit fees",
                                                        "Parking fees at hotels and attractions",
                                                        "Meals and accommodation for driver",
                                                        "Extended halt charges",
                                                        "Additional KM beyond the limit",
                                                        "Personal expenses and tips"
                                                    ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                                padding: "0.4rem 0",
                                                                fontSize: "0.9rem",
                                                                color: "#1a2634"
                                                            },
                                                            className: "jsx-76150aa2d72024ce",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: "#ef4444",
                                                                        fontSize: "1.1rem"
                                                                    },
                                                                    className: "jsx-76150aa2d72024ce",
                                                                    children: "✗"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3303,
                                                                    columnNumber: 23
                                                                }, this),
                                                                item
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3292,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3251,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "linear-gradient(135deg, #0052CC 0%, #0770E3 100%)",
                                        borderRadius: "20px",
                                        padding: "2rem",
                                        textAlign: "center",
                                        color: "#fff",
                                        transition: "all 0.3s ease"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0, 82, 204, 0.3)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.boxShadow = "none";
                                    },
                                    className: "jsx-76150aa2d72024ce",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "50%",
                                                background: "rgba(255,255,255,0.15)",
                                                marginBottom: "1rem"
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 28,
                                                color: "#fff"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 3343,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: "1.3rem",
                                                fontWeight: 700,
                                                marginBottom: "0.5rem"
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: "Our Price Promise"
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3345,
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
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                "We guarantee the best price for your ",
                                                route.origin,
                                                " to",
                                                " ",
                                                route.destination,
                                                "journey. If you find a lower price elsewhere, we'll match it."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Price match query for ${route.origin} to ${route.destination}`)}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.6rem",
                                                padding: "0.8rem 2rem",
                                                borderRadius: "50px",
                                                background: "#fff",
                                                color: "#0052CC",
                                                fontWeight: 700,
                                                textDecoration: "none",
                                                transition: "all 0.3s ease",
                                                border: "none",
                                                fontSize: "1rem",
                                                cursor: "pointer"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "scale(1.05)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            className: "jsx-76150aa2d72024ce",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3398,
                                                    columnNumber: 17
                                                }, this),
                                                " Get Best Price Quote"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3367,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "76150aa2d72024ce",
                                    children: '@media (width<=768px){.pricing-card.jsx-76150aa2d72024ce{padding:1.5rem!important}.pricing-table-wrapper.jsx-76150aa2d72024ce{padding:1.25rem!important}.pricing-table-wrapper.jsx-76150aa2d72024ce [style*="grid-template-columns: 1fr 1fr"].jsx-76150aa2d72024ce{grid-template-columns:1fr!important}.pricing-row.jsx-76150aa2d72024ce td.jsx-76150aa2d72024ce{padding:.6rem .8rem!important;font-size:.85rem!important}}@media (width<=480px){.pricing-card.jsx-76150aa2d72024ce{padding:1rem!important}.pricing-icon.jsx-76150aa2d72024ce{width:40px!important;height:40px!important}.pricing-icon.jsx-76150aa2d72024ce svg.jsx-76150aa2d72024ce{width:20px!important;height:20px!important}.pricing-table-wrapper.jsx-76150aa2d72024ce{padding:1rem!important}}'
                                }, void 0, false, void 0, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 2745,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 2741,
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
                                                    lineNumber: 3480,
                                                    columnNumber: 17
                                                }, this),
                                                " Transparent Pricing"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3467,
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
                                            lineNumber: 3482,
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
                                            lineNumber: 3492,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3460,
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
                                                            lineNumber: 3539,
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
                                                            lineNumber: 3552,
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
                                                                    lineNumber: 3589,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " 4.9"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3571,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3527,
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
                                                            lineNumber: 3595,
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
                                                            lineNumber: 3606,
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
                                                                            lineNumber: 3632,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        model.seater,
                                                                        " Seats"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3631,
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
                                                                            lineNumber: 3639,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        model.luggageCapacity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3638,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3620,
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
                                                                            lineNumber: 3657,
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
                                                                                    lineNumber: 3669,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                                            lineNumber: 3660,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 3656,
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
                                                                    lineNumber: 3680,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3648,
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
                                                                    lineNumber: 3720,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Book This Vehicle"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3694,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3594,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, model.id, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3512,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3503,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 3452,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 3448,
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
                                                    lineNumber: 3762,
                                                    columnNumber: 17
                                                }, this),
                                                " Customer Reviews"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3749,
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
                                                    lineNumber: 3773,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3764,
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
                                            lineNumber: 3777,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3742,
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
                                                            lineNumber: 3864,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3855,
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
                                                    lineNumber: 3874,
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
                                                            lineNumber: 3896,
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
                                                                    lineNumber: 3913,
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
                                                                    lineNumber: 3922,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3912,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3887,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3830,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3789,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 3734,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 3730,
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
                                        lineNumber: 3952,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3951,
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
                                                    lineNumber: 3958,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "route-meta",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 3962,
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
                                                            lineNumber: 3963,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        item.durationHrs
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3961,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/routes/${item.routeSlug}`,
                                                    className: "btn btn-primary btn-sm",
                                                    children: "View Route"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 3965,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.routeSlug, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3957,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3955,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 3943,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 3939,
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
                            className: "jsx-548d48f0ecff5dd6" + " " + "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        maxWidth: "780px",
                                        margin: "0 auto 2.5rem"
                                    },
                                    className: "jsx-548d48f0ecff5dd6",
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
                                            className: "jsx-548d48f0ecff5dd6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4011,
                                                    columnNumber: 17
                                                }, this),
                                                " Journey Preview"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 3998,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "2.3rem",
                                                fontWeight: 700,
                                                margin: "0.5rem 0 0.75rem",
                                                color: "#0b1a2e"
                                            },
                                            className: "jsx-548d48f0ecff5dd6",
                                            children: [
                                                "Experience a Smooth Ride from",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#0052CC"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: [
                                                        route.origin,
                                                        " to ",
                                                        route.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4022,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4013,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1.05rem",
                                                color: "#4a5a6e",
                                                lineHeight: "1.6"
                                            },
                                            className: "jsx-548d48f0ecff5dd6",
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
                                            lineNumber: 4026,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 3991,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "3rem",
                                        alignItems: "center"
                                    },
                                    className: "jsx-548d48f0ecff5dd6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-548d48f0ecff5dd6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "0.5rem",
                                                        background: "#0052CC",
                                                        color: "#fff",
                                                        padding: "0.3rem 1.2rem",
                                                        borderRadius: "40px",
                                                        fontSize: "0.75rem",
                                                        fontWeight: 600,
                                                        letterSpacing: "0.5px",
                                                        marginBottom: "1rem"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2d$front$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BusFront$3e$__["BusFront"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4064,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Premium Travel Experience"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4049,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.5rem",
                                                        fontWeight: 700,
                                                        color: "#0b1a2e",
                                                        marginBottom: "0.5rem"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: [
                                                        "Travel from ",
                                                        route.origin,
                                                        " to ",
                                                        route.destination
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4067,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "1rem",
                                                        color: "#4a5a6e",
                                                        lineHeight: "1.7",
                                                        marginBottom: "1.5rem"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
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
                                                    lineNumber: 4078,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: "1fr 1fr",
                                                        gap: "0.75rem",
                                                        marginBottom: "1.5rem"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: [
                                                        {
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 16,
                                                                color: "#0052CC"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 4111,
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
                                                                lineNumber: 4115,
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
                                                                lineNumber: 4119,
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
                                                                lineNumber: 4123,
                                                                columnNumber: 29
                                                            }, this),
                                                            text: "On-time service guarantee"
                                                        }
                                                    ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                                padding: "0.5rem",
                                                                background: "#f9fafc",
                                                                borderRadius: "10px",
                                                                transition: "all 0.3s ease"
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.background = "#f0f4fe";
                                                                e.currentTarget.style.transform = "translateX(4px)";
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.background = "#f9fafc";
                                                                e.currentTarget.style.transform = "translateX(0)";
                                                            },
                                                            className: "jsx-548d48f0ecff5dd6",
                                                            children: [
                                                                feature.icon,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "0.85rem",
                                                                        color: "#1a2634",
                                                                        fontWeight: 500
                                                                    },
                                                                    className: "jsx-548d48f0ecff5dd6",
                                                                    children: feature.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                                    lineNumber: 4148,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4127,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book Urbania from ${route.origin} to ${route.destination}`)}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "0.6rem",
                                                        padding: "0.8rem 2.5rem",
                                                        borderRadius: "50px",
                                                        background: "#25D366",
                                                        color: "#fff",
                                                        fontWeight: 700,
                                                        textDecoration: "none",
                                                        transition: "all 0.3s ease",
                                                        border: "none",
                                                        fontSize: "1rem",
                                                        cursor: "pointer",
                                                        boxShadow: "0 8px 24px rgba(37, 211, 102, 0.25)"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1.05)";
                                                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(37, 211, 102, 0.35)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.transform = "scale(1)";
                                                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.25)";
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4195,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Book Your Ride →"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4047,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                borderRadius: "24px",
                                                overflow: "hidden",
                                                border: "1px solid #ecf0f7",
                                                boxShadow: "0 8px 24px rgba(0,20,50,0.06)",
                                                transition: "all 0.3s ease"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 82, 204, 0.12)";
                                                e.currentTarget.style.transform = "scale(1.01)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,20,50,0.06)";
                                                e.currentTarget.style.transform = "scale(1)";
                                            },
                                            className: "jsx-548d48f0ecff5dd6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative",
                                                    width: "100%",
                                                    paddingBottom: "75%",
                                                    background: "#eef3ff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                className: "jsx-548d48f0ecff5dd6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            width: "100%",
                                                            height: "100%"
                                                        },
                                                        className: "jsx-548d48f0ecff5dd6",
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
                                                            className: "jsx-548d48f0ecff5dd6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/RouteTemplate.jsx",
                                                            lineNumber: 4240,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 4231,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            width: "100%",
                                                            height: "100%",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            background: "rgba(255,255,255,0.95)",
                                                            color: "#0b1a2e",
                                                            padding: "2rem",
                                                            textAlign: "center",
                                                            cursor: "pointer",
                                                            transition: "all 0.3s ease",
                                                            zIndex: 1
                                                        },
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
                                                        className: "jsx-548d48f0ecff5dd6" + " " + "map-overlay",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: "3rem",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                className: "jsx-548d48f0ecff5dd6",
                                                                children: "🗺️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 4291,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: "1.2rem",
                                                                    fontWeight: 700,
                                                                    color: "#0b1a2e",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                className: "jsx-548d48f0ecff5dd6",
                                                                children: "View Route Map"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 4299,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: "0.9rem",
                                                                    color: "#4a5a6e",
                                                                    maxWidth: "300px",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                className: "jsx-548d48f0ecff5dd6",
                                                                children: [
                                                                    "Click to load live Google Map for ",
                                                                    route.origin,
                                                                    " to",
                                                                    " ",
                                                                    route.destination
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 4309,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "0.4rem",
                                                                    color: "#0052CC",
                                                                    fontWeight: 600,
                                                                    fontSize: "0.85rem",
                                                                    marginTop: "0.5rem"
                                                                },
                                                                className: "jsx-548d48f0ecff5dd6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                                        lineNumber: 4331,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Open Google Maps"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                                lineNumber: 4320,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/RouteTemplate.jsx",
                                                        lineNumber: 4253,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 4219,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4038,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                        gap: "1.5rem",
                                        marginTop: "3rem"
                                    },
                                    className: "jsx-548d48f0ecff5dd6",
                                    children: [
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$road$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Road$3e$__["Road"], {
                                                size: 20,
                                                color: "#0052CC"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 4350,
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
                                                lineNumber: 4355,
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
                                                lineNumber: 4360,
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
                                                lineNumber: 4365,
                                                columnNumber: 25
                                            }, this),
                                            label: "Vehicle Type",
                                            value: "Force Urbania"
                                        }
                                    ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "#ffffff",
                                                padding: "1.2rem",
                                                borderRadius: "16px",
                                                border: "1px solid #ecf0f7",
                                                textAlign: "center",
                                                transition: "all 0.3s ease"
                                            },
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
                                            className: "jsx-548d48f0ecff5dd6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "50%",
                                                        background: "#eef3ff",
                                                        marginBottom: "0.5rem"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: stat.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4392,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "0.7rem",
                                                        color: "#7a8a9e",
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4406,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "1.1rem",
                                                        fontWeight: 700,
                                                        color: "#0b1a2e",
                                                        marginTop: "0.2rem"
                                                    },
                                                    className: "jsx-548d48f0ecff5dd6",
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4417,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4370,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4340,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "548d48f0ecff5dd6",
                                    children: "@media (width<=968px){.journey-preview-grid.jsx-548d48f0ecff5dd6{grid-template-columns:1fr!important;gap:2rem!important}}@media (width<=768px){.journey-preview-section.jsx-548d48f0ecff5dd6{padding:3rem 0!important}.journey-preview-grid.jsx-548d48f0ecff5dd6{gap:1.5rem!important}.journey-preview-features.jsx-548d48f0ecff5dd6{grid-template-columns:1fr!important}.journey-preview-stats.jsx-548d48f0ecff5dd6{grid-template-columns:repeat(2,1fr)!important}.journey-preview.jsx-548d48f0ecff5dd6 h3.jsx-548d48f0ecff5dd6{font-size:1.3rem!important}.map-overlay.jsx-548d48f0ecff5dd6 h4.jsx-548d48f0ecff5dd6{font-size:1rem!important}.map-overlay.jsx-548d48f0ecff5dd6 p.jsx-548d48f0ecff5dd6{font-size:.8rem!important}}@media (width<=480px){.journey-preview-stats.jsx-548d48f0ecff5dd6{grid-template-columns:1fr 1fr!important;gap:.75rem!important}.journey-preview.jsx-548d48f0ecff5dd6 h2.jsx-548d48f0ecff5dd6{font-size:1.8rem!important}.journey-preview.jsx-548d48f0ecff5dd6 .book-btn.jsx-548d48f0ecff5dd6{justify-content:center!important;width:100%!important}}"
                                }, void 0, false, void 0, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 3982,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 3978,
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
                                                    lineNumber: 4522,
                                                    columnNumber: 17
                                                }, this),
                                                " FAQ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/RouteTemplate.jsx",
                                            lineNumber: 4509,
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
                                            lineNumber: 4524,
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
                                            lineNumber: 4535,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4502,
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
                                            lineNumber: 4557,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/RouteTemplate.jsx",
                                    lineNumber: 4547,
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
                                    lineNumber: 4568,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RouteTemplate.jsx",
                            lineNumber: 4494,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 4490,
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
                                lineNumber: 4600,
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
                                lineNumber: 4612,
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
                                                lineNumber: 4655,
                                                columnNumber: 15
                                            }, this),
                                            " ⭐⭐⭐ Limited Availability"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 4637,
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
                                                lineNumber: 4670,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            "Trip?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 4659,
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
                                        lineNumber: 4677,
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
                                                    lineNumber: 4710,
                                                    columnNumber: 25
                                                }, this),
                                                text: "Instant Confirmation"
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4713,
                                                    columnNumber: 25
                                                }, this),
                                                text: "Verified Chauffeur"
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4714,
                                                    columnNumber: 25
                                                }, this),
                                                text: "Best Price Guarantee"
                                            },
                                            {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/RouteTemplate.jsx",
                                                    lineNumber: 4715,
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
                                                        lineNumber: 4730,
                                                        columnNumber: 19
                                                    }, this),
                                                    benefit.text
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 4717,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 4693,
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
                                                        lineNumber: 4771,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Book Now on WhatsApp"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 4746,
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
                                                        lineNumber: 4795,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Call Now"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 4775,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 4737,
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
                                                        lineNumber: 4829,
                                                        columnNumber: 19
                                                    }, this),
                                                    item.text
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/RouteTemplate.jsx",
                                                lineNumber: 4818,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RouteTemplate.jsx",
                                        lineNumber: 4800,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RouteTemplate.jsx",
                                lineNumber: 4625,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 4589,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/RouteTemplate.jsx",
                        lineNumber: 4845,
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