/* Hermes — single concatenated bundle (auto-generated) */

/* ==================== js/icons.jsx ==================== */
/* Hermes — icons.jsx : Lucide-style stroke icons + brand glyph + mascot */
(function () {
  const S = (paths, props = {}) => function Icon(p) {
    const { size = 18, sw = 2, ...rest } = p || {};
    return React.createElement("svg", {
      width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      stroke: "currentColor", strokeWidth: sw, strokeLinecap: "round",
      strokeLinejoin: "round", "aria-hidden": "true", ...props, ...rest,
    }, paths.map((d, i) =>
      typeof d === "string"
        ? React.createElement("path", { key: i, d })
        : React.createElement(d.t, { key: i, ...d.a })
    ));
  };
  // Filled brand glyph: solid currentColor fill, no stroke.
  const F = (paths) => function Icon(p) {
    const { size = 18, ...rest } = p || {};
    return React.createElement("svg", {
      width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor",
      stroke: "none", "aria-hidden": "true", ...rest,
    }, paths.map((d, i) => React.createElement("path", { key: i, d })));
  };
  const C = (a) => ({ t: "circle", a });
  const R = (a) => ({ t: "rect", a });
  const L = (a) => ({ t: "line", a });
  const PL = (a) => ({ t: "polyline", a });

  const Icons = {
    Menu: S(["M3 6h18", "M3 12h18", "M3 18h18"]),
    PanelLeft: S([R({ x: 3, y: 3, width: 18, height: 18, rx: 2 }), "M9 3v18"]),
    Plus: S(["M12 5v14", "M5 12h14"]),
    Search: S([C({ cx: 11, cy: 11, r: 8 }), "M21 21l-4.3-4.3"]),
    Notebook: S(["M2 6h4", "M2 12h4", "M2 18h4", R({ x: 6, y: 3, width: 16, height: 18, rx: 2 }), "M12 3v18"]),
    Folder: S(["M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"]),
    Layers: S(["M12 2 2 7l10 5 10-5-10-5Z", "m2 17 10 5 10-5", "m2 12 10 5 10-5"]),
    ChevronDown: S(["m6 9 6 6 6-6"]),
    ChevronRight: S(["m9 6 6 6-6 6"]),
    ChevronUp: S(["m6 15 6-6 6 6"]),
    Settings: S([C({ cx: 12, cy: 12, r: 3 }), "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"]),
    Bell: S(["M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", "M10.3 21a1.94 1.94 0 0 0 3.4 0"]),
    MoreVertical: S([C({ cx: 12, cy: 5, r: 1 }), C({ cx: 12, cy: 12, r: 1 }), C({ cx: 12, cy: 19, r: 1 })]),
    MoreHorizontal: S([C({ cx: 5, cy: 12, r: 1 }), C({ cx: 12, cy: 12, r: 1 }), C({ cx: 19, cy: 12, r: 1 })]),
    Pin: S(["M12 17v5", "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1Z"]),
    Archive: S([R({ x: 3, y: 4, width: 18, height: 4, rx: 1 }), "M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8", "M10 12h4"]),
    Share: S(["M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", "M16 6l-4-4-4 4", "M12 2v13"]),
    Download: S(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"]),
    Upload: S(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M17 8l-5-5-5 5", "M12 3v12"]),
    Trash: S(["M3 6h18", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", "M10 11v6", "M14 11v6"]),
    Tag: S(["M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.41 8.41a2 2 0 0 0 2.83 0l6.59-6.59a2 2 0 0 0 0-2.83Z", C({ cx: 7, cy: 7, r: 1.2 })]),
    Pencil: S(["M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z"]),
    Copy: S([R({ x: 9, y: 9, width: 12, height: 12, rx: 2 }), "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"]),
    Check: S(["M20 6 9 17l-5-5"]),
    CheckCircle: S(["M22 11.08V12a10 10 0 1 1-5.93-9.14", "m22 4-10 10.01-3-3"]),
    X: S(["M18 6 6 18", "M6 6l12 12"]),
    Volume: S(["M11 5 6 9H2v6h4l5 4z", "M15.54 8.46a5 5 0 0 1 0 7.07", "M19.07 4.93a10 10 0 0 1 0 14.14"]),
    Info: S([C({ cx: 12, cy: 12, r: 10 }), "M12 16v-4", "M12 8h.01"]),
    ThumbsUp: S(["M7 10v12", "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"]),
    ThumbsDown: S(["M17 14V2", "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"]),
    Refresh: S(["M3 12a9 9 0 0 1 15-6.7L21 8", "M21 3v5h-5", "M21 12a9 9 0 0 1-15 6.7L3 16", "M3 21v-5h5"]),
    Paperclip: S(["m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"]),
    Mic: S([R({ x: 9, y: 2, width: 6, height: 11, rx: 3 }), "M19 10v1a7 7 0 0 1-14 0v-1", "M12 18v4", "M8 22h8"]),
    ArrowUp: S(["M12 19V5", "m5 12 7-7 7 7"]),
    ArrowDown: S(["M12 5v14", "m19 12-7 7-7-7"]),
    Sun: S([C({ cx: 12, cy: 12, r: 4 }), "M12 2v2", "M12 20v2", "m4.93 4.93 1.41 1.41", "m17.66 17.66 1.41 1.41", "M2 12h2", "M20 12h2", "m6.34 17.66-1.41 1.41", "m19.07 4.93-1.41 1.41"]),
    Moon: S(["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"]),
    Monitor: S([R({ x: 2, y: 3, width: 20, height: 14, rx: 2 }), "M8 21h8", "M12 17v4"]),
    LogOut: S(["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "m16 17 5-5-5-5", "M21 12H9"]),
    Keyboard: S([R({ x: 2, y: 4, width: 20, height: 16, rx: 2 }), "M6 8h.01", "M10 8h.01", "M14 8h.01", "M18 8h.01", "M6 12h.01", "M10 12h.01", "M14 12h.01", "M18 12h.01", "M7 16h10"]),
    User: S([C({ cx: 12, cy: 8, r: 4 }), "M4 21a8 8 0 0 1 16 0"]),
    Lock: S([R({ x: 4, y: 11, width: 16, height: 10, rx: 2 }), "M8 11V7a4 4 0 0 1 8 0v4"]),
    Key: S([C({ cx: 7.5, cy: 15.5, r: 4.5 }), "m10.5 12.5 7-7", "M16 5l3 3", "m20 9-3-3"]),
    Sliders: S(["M4 21v-7", "M4 10V3", "M12 21v-9", "M12 8V3", "M20 21v-5", "M20 12V3", "M1 14h6", "M9 8h6", "M17 16h6"]),
    Palette: S([C({ cx: 13.5, cy: 6.5, r: 1.2 }), C({ cx: 17.5, cy: 10.5, r: 1.2 }), C({ cx: 8.5, cy: 7.5, r: 1.2 }), C({ cx: 6.5, cy: 12.5, r: 1.2 }), "M12 2a10 10 0 0 0 0 20c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"]),
    Globe: S([C({ cx: 12, cy: 12, r: 10 }), "M2 12h20", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"]),
    Server: S([R({ x: 2, y: 3, width: 20, height: 8, rx: 2 }), R({ x: 2, y: 13, width: 20, height: 8, rx: 2 }), "M6 7h.01", "M6 17h.01"]),
    Database: S(["M3 5c0-1.66 4-3 9-3s9 1.34 9 3-4 3-9 3-9-1.34-9-3Z", "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5", "M3 12c0 1.66 4 3 9 3s9-1.34 9-3"]),
    Headphones: S(["M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-6a9 9 0 0 1 18 0v6a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"]),
    Zap: S(["M13 2 3 14h9l-1 8 10-12h-9l1-8Z"]),
    Sparkle: S(["M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"]),
    Brain: S(["M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z", "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"]),
    BookOpen: S(["M12 7v14", "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z"]),
    Code: S(["m16 18 6-6-6-6", "m8 6-6 6 6 6"]),
    Lightbulb: S(["M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", "M9 18h6", "M10 22h4"]),
    Image: S([R({ x: 3, y: 3, width: 18, height: 18, rx: 2 }), C({ cx: 9, cy: 9, r: 2 }), "m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"]),
    File: S(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z", "M14 2v6h6"]),
    FileText: S(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z", "M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"]),
    Stop: S([R({ x: 5, y: 5, width: 14, height: 14, rx: 2 })]),
    Edit: S(["M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]),
    Clock: S([C({ cx: 12, cy: 12, r: 10 }), "M12 6v6l4 2"]),
    Command: S(["M15 6a3 3 0 1 0 3 3h-3V6Zm0 12a3 3 0 1 0 3-3h-3v3ZM9 6a3 3 0 1 1-3 3h3V6Zm0 12a3 3 0 1 1-3-3h3v3Z", "M9 9h6v6H9z"]),
    CornerDownLeft: S(["M9 10 4 15l5 5", "M20 4v7a4 4 0 0 1-4 4H4"]),
    Gift: S([R({ x: 3, y: 8, width: 18, height: 4, rx: 1 }), "M12 8v13", "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", "M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"]),
    Wand: S(["m3 21 9-9", "M15 4V2", "M15 16v-2", "M8 9h2", "M20 9h2", "M17.8 11.8 19 13", "M15 9h0", "M17.8 6.2 19 5", "m3 21 9-9", "M12.2 6.2 11 5"]),
    QrCode: S([R({ x: 3, y: 3, width: 7, height: 7, rx: 1 }), R({ x: 14, y: 3, width: 7, height: 7, rx: 1 }), R({ x: 3, y: 14, width: 7, height: 7, rx: 1 }), "M14 14h3v3", "M21 14v.01", "M14 21h.01", "M21 21v.01", "M17 21h.01", "M21 17h.01"]),
    Play: S(["m6 3 14 9-14 9V3Z"]),
    Pause: S([R({ x: 6, y: 4, width: 4, height: 16, rx: 1 }), R({ x: 14, y: 4, width: 4, height: 16, rx: 1 })]),
    Filter: S(["M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"]),
    AlertTriangle: S(["M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z", "M12 9v4", "M12 17h.01"]),
    Languages: S(["m5 8 6 6", "m4 14 6-6 2-3", "M2 5h12", "M7 2h1", "m22 22-5-10-5 10", "M14 18h6"]),
    Type: S(["M4 7V4h16v3", "M9 20h6", "M12 4v16"]),
    Bot: S([R({ x: 3, y: 11, width: 18, height: 10, rx: 2 }), C({ cx: 9, cy: 16, r: 1 }), C({ cx: 15, cy: 16, r: 1 }), "M12 7v4", "M8 7h8", C({ cx: 12, cy: 5, r: 2 })]),
    Mail: S([R({ x: 2, y: 4, width: 20, height: 16, rx: 2 }), "m2 7 10 6 10-6"]),
    Plug: S(["M9 2v6", "M15 2v6", "M6 8h12v3a6 6 0 0 1-12 0Z", "M12 17v5"]),
    // ---- Brand glyphs (filled, monochrome via currentColor) ----
    Telegram: F(["M21.94 4.31 18.9 19.1c-.23 1.01-.83 1.26-1.68.79l-4.65-3.43-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.74 8.63-7.8c.38-.33-.08-.52-.59-.19l-10.66 6.71-4.59-1.44c-1-.31-1.02-1 .21-1.48l17.94-6.92c.83-.31 1.56.19 1.29 1.48Z"]),
    Discord: F(["M20.32 4.93A19.5 19.5 0 0 0 15.5 3.4l-.24.43c-.83.2-1.6.45-2.32.74-.72-.29-1.49-.54-2.32-.74L8.5 3.4A19.5 19.5 0 0 0 3.68 4.93C.96 8.95.21 12.86.58 16.72A19.7 19.7 0 0 0 6.55 19.7l.7-1.01c-.46-.17-.9-.38-1.32-.62l.33-.24c1.7.79 3.6 1.2 5.74 1.2s4.04-.41 5.74-1.2l.33.24c-.42.24-.86.45-1.32.62l.7 1.01a19.7 19.7 0 0 0 5.97-2.98c.43-4.47-.74-8.35-3.1-11.79ZM9.18 14.6c-.94 0-1.71-.86-1.71-1.91s.76-1.92 1.71-1.92 1.72.87 1.71 1.92c0 1.05-.76 1.91-1.71 1.91Zm5.64 0c-.94 0-1.71-.86-1.71-1.91s.76-1.92 1.71-1.92 1.72.87 1.71 1.92c0 1.05-.76 1.91-1.71 1.91Z"]),
    Slack: F(["M5.04 14.7a2.1 2.1 0 1 1-2.1-2.1h2.1v2.1Zm1.06 0a2.1 2.1 0 0 1 4.2 0v5.26a2.1 2.1 0 1 1-4.2 0V14.7ZM9.3 5.04a2.1 2.1 0 1 1 2.1-2.1v2.1H9.3Zm0 1.06a2.1 2.1 0 0 1 0 4.2H4.04a2.1 2.1 0 1 1 0-4.2H9.3Zm9.66 4.2a2.1 2.1 0 1 1 2.1 2.1h-2.1v-2.1Zm-1.06 0a2.1 2.1 0 0 1-4.2 0V4.04a2.1 2.1 0 1 1 4.2 0V10.3Zm-3.16 8.66a2.1 2.1 0 1 1-2.1 2.1v-2.1h2.1Zm0-1.06a2.1 2.1 0 0 1 0-4.2h5.26a2.1 2.1 0 1 1 0 4.2H14.7Z"]),
    WhatsApp: F(["M12.01 2C6.5 2 2.02 6.48 2.02 11.99c0 1.76.46 3.48 1.34 5L2 22l5.13-1.34a9.96 9.96 0 0 0 4.88 1.25h.01c5.5 0 9.98-4.48 9.98-9.99C22 6.48 17.52 2 12.01 2Zm5.84 14.2c-.25.69-1.44 1.32-1.99 1.37-.51.05-1.15.21-3.72-.78-3.13-1.23-5.12-4.42-5.28-4.63-.15-.21-1.26-1.68-1.26-3.2 0-1.52.8-2.27 1.08-2.58.25-.28.55-.35.74-.35.18 0 .37 0 .53.01.17.01.4-.07.62.47.25.6.84 2.08.91 2.23.07.15.12.32.02.52-.1.21-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.31-.13.62.18.3.79 1.3 1.69 2.11 1.17 1.04 2.15 1.36 2.46 1.51.31.15.49.13.67-.08.18-.21.77-.9.98-1.21.21-.31.41-.25.69-.15.28.1 1.76.83 2.07.98.31.15.51.23.59.36.07.13.07.74-.18 1.43Z"]),
    GoogleChat: F(["M4 2h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5l-5 4v-4H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"]),
    Signal: F(["M12 1.5a10.5 10.5 0 0 0-8.9 16.06l-1.07 3.3 3.36-1.05A10.5 10.5 0 1 0 12 1.5Zm0 2a8.5 8.5 0 1 1-4.4 15.77l-.4-.24-1.62.5.52-1.58-.25-.4A8.5 8.5 0 0 1 12 3.5Z"]),
    Matrix: F(["M2 2v20h2v-1H3V3h1V2H2Zm3.6 4.2v11.6h1.9v-6.2c0-1 .5-1.7 1.4-1.7.8 0 1.2.6 1.2 1.6v6.3h1.9v-6.3c0-1 .5-1.6 1.4-1.6.8 0 1.2.5 1.2 1.6v6.3h1.9v-6.8c0-1.9-1-2.9-2.6-2.9-1.1 0-2 .5-2.5 1.4-.4-.9-1.2-1.4-2.3-1.4-1 0-1.8.5-2.2 1.3v-1.1H5.6ZM20 2v1h1v18h-1v1h2V2h-2Z"]),
    Mattermost: F(["M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm3.4 14.3c-1.9 1.5-4.6 1.4-6.3-.2-1.9-1.8-2-4.8-.3-7l.1 3.2c0 1.4.9 2.6 2.3 2.9 1.8.4 3.4-.8 3.6-2.5l.2-5.9 1.4 1.7c1.5 2.4 1.1 5.9-1 7.8l-.1.2Z"]),
  };

  // Brand winged glyph — Hermes. amber wings flanking a caduceus staff.
  function HermesGlyph(p) {
    const size = (p && p.size) || 40;
    const flap = p && p.flap;
    return React.createElement("svg", {
      width: size, height: size, viewBox: "0 0 48 48", fill: "none", "aria-hidden": "true",
      style: p && p.style,
    }, [
      // left wing
      React.createElement("path", {
        key: "wl", className: flap ? "wing-l" : "",
        d: "M23 16 C16 13 9 13 4 17 C9 17 10 19 8 21 C12 19 14 20 13 23 C16 20 19 19 23 21 Z",
        fill: "var(--accent)", opacity: ".92",
      }),
      // right wing
      React.createElement("path", {
        key: "wr", className: flap ? "wing-r" : "",
        d: "M25 16 C32 13 39 13 44 17 C39 17 38 19 40 21 C36 19 34 20 35 23 C32 20 29 19 25 21 Z",
        fill: "var(--accent)", opacity: ".92",
      }),
      // staff
      React.createElement("path", { key: "st", d: "M24 14 L24 40", stroke: "var(--accent-deep)", strokeWidth: 3, strokeLinecap: "round" }),
      // orb
      React.createElement("circle", { key: "or", cx: 24, cy: 11, r: 4, fill: "var(--accent-deep)" }),
      React.createElement("circle", { key: "or2", cx: 22.6, cy: 9.6, r: 1.2, fill: "rgba(255,255,255,.55)" }),
      // entwined coils
      React.createElement("path", { key: "c1", d: "M24 22 C19 24 29 28 24 30 C19 32 29 36 24 38", stroke: "var(--accent)", strokeWidth: 2.4, strokeLinecap: "round" }),
    ]);
  }

  function Mascot(p) {
    const label = (p && p.label) || "Thinking";
    return React.createElement("span", { className: "mascot" }, [
      React.createElement("span", { key: "g", className: "glyph" },
        React.createElement(HermesGlyph, { size: 26, flap: true })),
      React.createElement("span", { key: "l", className: "label" },
        React.createElement("span", { className: "shimmer-text" }, label + "…")),
    ]);
  }

  window.Icons = Icons;
  window.HermesGlyph = HermesGlyph;
  window.Mascot = Mascot;
})();


/* ==================== js/data.jsx ==================== */
/* Hermes — data.jsx : models, sessions, canned replies, markdown renderer */
(function () {
  // Models shown in the chat menu are the user-ENABLED models, fetched live
  // from /api/enabled-models. Each entry id = "provider::model".
  const PROVIDER_ICON = { openai: "Sparkle", anthropic: "Brain", deepseek: "Wand", gemini: "Globe", groq: "Zap", openrouter: "Layers", mistral: "Bot", nous: "Gift", local: "Server", agent: "Bot" };
  // When every model runs through the on-device agent they share provider "agent";
  // pick the icon from the underlying provider label instead.
  const LABEL_ICON = { "Nous Portal": "Gift", "AWS Bedrock": "Layers", "GitHub Copilot": "Sparkle", "Custom endpoint": "Server", "On this device": "Server" };
  const MODELS = [];   // mutated in place by refreshModels() so references hold
  function refreshModels() {
    return fetch("/api/enabled-models").then((r) => r.json()).then((d) => {
      MODELS.length = 0;
      (d.models || []).forEach((m) => MODELS.push({
        id: m.provider + "::" + m.model, name: m.label || m.model, desc: m.provider_label,
        group: m.provider_label || "Models",
        icon: LABEL_ICON[m.provider_label] || PROVIDER_ICON[m.provider] || "Bot",
        provider: m.provider, model: m.model,
      }));
      return MODELS;
    }).catch(() => MODELS);
  }

  const TALL = (n) => Array.from({ length: n });

  // suggestion cards (randomized per session)
  const SUGGESTIONS = [
    { icon: "BookOpen",  t1: "Help me study",        t2: "Make flashcards from my notes", prompt: "Help me study for a biology exam on cell structure. Make me 5 flashcards." },
    { icon: "Lightbulb", t1: "Tell me a fun fact",   t2: "Something surprising about space", prompt: "Tell me a genuinely surprising fun fact about the ocean." },
    { icon: "Code",      t1: "Show me a code snippet", t2: "A debounce function in JS", prompt: "Show me a clean debounce function in JavaScript and explain how it works." },
    { icon: "Type",      t1: "Help me write",        t2: "Polish a tricky email", prompt: "Help me write a friendly but firm email asking a client to pay an overdue invoice." },
    { icon: "Brain",     t1: "Explain a concept",    t2: "Like I'm five", prompt: "Explain how vaccines work like I'm five years old." },
    { icon: "Sparkle",   t1: "Brainstorm ideas",     t2: "Names for a coffee shop", prompt: "Brainstorm 10 cozy, original names for a neighborhood coffee shop." },
  ];

  function pickSuggestions() {
    const a = [...SUGGESTIONS];
    for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
    return a.slice(0, 3);
  }

  // ---- seed sessions ----
  const M = (role, content, extra = {}) => ({ role, content, ...extra });

  const reply_debounce =
`Great question. A **debounce** waits until the activity stops before running your function — perfect for search inputs and resize handlers.

\`\`\`js
function debounce(fn, wait = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

// usage
input.addEventListener("input", debounce(e => {
  search(e.target.value);
}, 250));
\`\`\`

Here's what's happening:

1. Every call **clears** the previous timer.
2. A fresh timer is set for \`wait\` ms.
3. \`fn\` only fires once the calls *stop* for that whole window.

> Tip: use \`throttle\` instead when you want a steady cadence (e.g. scroll position) rather than "wait for quiet."`;

  const reply_space =
`Here's a fun one 🌊 — well, about water on a *moon*:

Jupiter's moon **Europa** likely hides a salty ocean beneath its icy shell that holds **more than twice the liquid water of all of Earth's oceans combined**.

A few things that make it remarkable:

- The ice crust is estimated at **15–25 km** thick.
- Tidal flexing from Jupiter keeps the interior warm enough to stay liquid.
- NASA's *Europa Clipper* will make ~50 close flybys to study it.

The math, roughly:

$$V_{ocean} \\approx 3 \\times 10^{9}\\ \\text{km}^3$$

That's a lot of water for a moon smaller than ours.`;

  const SEED = [
    { id: "s1", title: "Debounce vs throttle in JS", model: "hermes-pro", group: "Today", pinned: true, tags: ["code"], updated: Date.now() - 6e5,
      messages: [ M("user", "What's the difference between debounce and throttle? Show me a code snippet."),
        M("assistant", reply_debounce, { model: "hermes-pro", thought: 4, ts: "2:14 PM" }) ] },
    { id: "s2", title: "Surprising ocean facts", model: "hermes-fast", group: "Today", tags: [], updated: Date.now() - 36e5,
      messages: [ M("user", "Tell me a genuinely surprising fun fact about the ocean."),
        M("assistant", reply_space, { model: "hermes-fast", thought: 2, ts: "11:02 AM" }) ] },
    { id: "s3", title: "Cozy coffee shop names", model: "hermes-pro", group: "Yesterday", tags: ["writing"], updated: Date.now() - 9e7,
      messages: [ M("user", "Brainstorm 10 cozy, original names for a neighborhood coffee shop.") ] },
    { id: "s4", title: "Invoice follow-up email", model: "hermes-fast", group: "Yesterday", tags: ["writing"], updated: Date.now() - 1.1e8,
      messages: [ M("user", "Help me write a friendly but firm email about an overdue invoice.") ] },
    { id: "s5", title: "Explain vaccines simply", model: "hermes-reason", group: "Previous 7 Days", tags: [], updated: Date.now() - 3.5e8,
      messages: [ M("user", "Explain how vaccines work like I'm five.") ] },
    { id: "s6", title: "Biology flashcards: cells", model: "hermes-pro", group: "Previous 7 Days", tags: ["study"], updated: Date.now() - 4.2e8,
      messages: [ M("user", "Make me 5 flashcards on cell structure.") ] },
    { id: "s7", title: "Trip plan: 3 days in Lisbon", model: "hermes-pro", group: "Previous 30 Days", tags: ["travel"], updated: Date.now() - 12e8,
      messages: [ M("user", "Plan a relaxed 3-day Lisbon itinerary.") ] },
    { id: "s8", title: "Resignation letter draft", model: "hermes-fast", group: "Previous 30 Days", tags: ["writing"], updated: Date.now() - 16e8,
      messages: [ M("user", "Draft a polite two-week resignation letter.") ] },
    { id: "s9", title: "SQL group by help", model: "hermes-reason", group: "Older", tags: ["code"], updated: Date.now() - 50e8,
      messages: [ M("user", "Why is my GROUP BY query returning duplicates?") ] },
    { id: "s10", title: "Sourdough troubleshooting", model: "hermes-fast", group: "Older", tags: [], updated: Date.now() - 70e8,
      messages: [ M("user", "My sourdough is too dense. What went wrong?") ] },
  ];

  const GROUP_ORDER = ["Today", "Yesterday", "Previous 7 Days", "Previous 30 Days", "Older"];

  // ---- canned reply generator (heuristic, keyword-based) ----
  function generateReply(prompt) {
    const p = prompt.toLowerCase();
    if (/debounce|throttle|code|javascript|function|snippet/.test(p)) return reply_debounce;
    if (/ocean|space|fact|europa|water/.test(p)) return reply_space;
    if (/coffee|name|brainstorm/.test(p))
      return `Here are some cozy, original options 🍂\n\n1. **The Slow Pour**\n2. **Marigold & Bean**\n3. **Hearth & Crema**\n4. **The Quiet Cup**\n5. **Northbound Coffee**\n6. **Ember Lane**\n7. **Folk & Foam**\n8. **The Daily Drift**\n9. **Mornings, Maybe**\n10. **Pocket Park Coffee**\n\nWant me to riff on a particular vibe — woodsy, retro, minimalist?`;
    if (/email|invoice|write|letter|resign/.test(p))
      return `Here's a draft you can adapt:\n\n> **Subject:** Quick note on invoice #1042\n>\n> Hi Jordan,\n>\n> Hope you're doing well! I'm following up on invoice **#1042** ($2,400), which was due on the 15th. I wanted to make sure it didn't slip through the cracks.\n>\n> Could you let me know the expected payment date? Happy to resend the invoice if helpful.\n>\n> Thanks so much,\n> Alex\n\nKeeps it warm but clear. Want a firmer second-reminder version too?`;
    if (/vaccine|explain|how does|eli5|five/.test(p))
      return `Imagine your body has a tiny army 🛡️ that fights germs.\n\nA **vaccine** is like showing that army a *wanted poster* of a germ — a harmless picture of it. The army studies the poster and practices fighting.\n\nSo later, if the **real** germ shows up, your army already knows exactly what it looks like and beats it *fast* — before you even feel sick.\n\nThat's it: a vaccine is practice for your immune system, using a safe stand-in instead of the dangerous germ.`;
    return `Happy to help with that! Here's how I'd approach it:\n\n- First, let's clarify the goal so the answer is actually useful.\n- Then I'll give you a concrete, step-by-step path.\n- Finally, a couple of options depending on your constraints.\n\nTo tailor this: what's the **context** here, and is there a deadline or format you need? Tell me a bit more and I'll get specific.`;
  }

  function genFollowups(prompt) {
    const p = prompt.toLowerCase();
    if (/debounce|throttle|code|function/.test(p))
      return ["Show me the throttle version too", "How do I cancel a pending debounce?", "Add a leading-edge option", "Write a React useDebounce hook"];
    if (/ocean|space|fact/.test(p))
      return ["Tell me another surprising one", "How deep is the Europa ocean really?", "What's the Europa Clipper mission?", "Compare it to Earth's oceans"];
    if (/coffee|name/.test(p))
      return ["Make 5 more with a woodsy vibe", "Check if any are trademarked", "Suggest a tagline for #2", "What about a logo concept?"];
    return ["Can you give an example?", "Make it shorter", "Explain the first point more", "What are the trade-offs?"];
  }

  // ---- minimal, safe markdown renderer → HTML string ----
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function inline(s) {
    s = esc(s);
    // math is left intact for KaTeX auto-render ($$…$$, \[…\], \(…\)) — see enhanceRich
    s = s.replace(/`([^`]+)`/g, (_, m) => `<code>${m}</code>`);
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
    // images ![alt](url) — must run before the link rule below
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g, '<img class="md-img" alt="$1" src="$2" loading="lazy" />');
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return s;
  }

  function renderMarkdown(src) {
    const lines = src.split("\n");
    let html = "", i = 0;
    let codeId = 0;
    while (i < lines.length) {
      const line = lines[i];
      // code fence
      const fence = line.match(/^```(\w*)/);
      if (fence) {
        const lang = fence[1] || "text";
        const buf = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        const id = "cb" + (codeId++) + "_" + ((Math.random() * 1e6) | 0);
        const code = esc(buf.join("\n"));
        html += `<div class="codeblock"><div class="codeblock-head"><span>${lang}</span><button class="copy-float" data-copy="${id}"><span class="cf-ic"></span><span class="cf-tx">Copy</span></button></div><pre><code id="${id}" class="language-${lang}">${code}</code></pre></div>`;
        continue;
      }
      // GFM table: a header row of cells, then a |---|:--:| separator, then body rows
      if (line.includes("|") && i + 1 < lines.length
          && /^\s*\|?[\s:|-]*-[\s:|-]*\|[\s:|-]*$/.test(lines[i + 1])) {
        const cells = (r) => { let t = r.trim(); if (t.startsWith("|")) t = t.slice(1); if (t.endsWith("|")) t = t.slice(0, -1); return t.split("|").map((c) => c.trim()); };
        const headers = cells(line);
        const aligns = cells(lines[i + 1]).map((s) => { const l = s.startsWith(":"), r = s.endsWith(":"); return (l && r) ? "center" : r ? "right" : l ? "left" : ""; });
        i += 2;
        const body = [];
        while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") { body.push(cells(lines[i])); i++; }
        const al = (ci) => aligns[ci] ? ` style="text-align:${aligns[ci]}"` : "";
        const thead = "<thead><tr>" + headers.map((c, ci) => `<th${al(ci)}>${inline(c)}</th>`).join("") + "</tr></thead>";
        const tbody = "<tbody>" + body.map((row) => "<tr>" + headers.map((_, ci) => `<td${al(ci)}>${inline(row[ci] || "")}</td>`).join("") + "</tr>").join("") + "</tbody>";
        html += `<div class="md-table"><table>${thead}${tbody}</table></div>`;
        continue;
      }
      // headings
      const h = line.match(/^(#{1,3})\s+(.*)/);
      if (h) { const lvl = h[1].length; html += `<h${lvl}>${inline(h[2])}</h${lvl}>`; i++; continue; }
      // hr
      if (/^---+$/.test(line)) { html += "<hr/>"; i++; continue; }
      // blockquote
      if (/^>\s?/.test(line)) {
        const buf = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, "")); i++; }
        html += `<blockquote>${renderMarkdown(buf.join("\n"))}</blockquote>`;
        continue;
      }
      // unordered list
      if (/^\s*[-*]\s+/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*[-*]\s+/, "")); i++; }
        html += "<ul>" + buf.map((b) => `<li>${inline(b)}</li>`).join("") + "</ul>";
        continue;
      }
      // ordered list
      if (/^\s*\d+\.\s+/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*\d+\.\s+/, "")); i++; }
        html += "<ol>" + buf.map((b) => `<li>${inline(b)}</li>`).join("") + "</ol>";
        continue;
      }
      // blank
      if (line.trim() === "") { i++; continue; }
      // paragraph
      const buf = [line]; i++;
      while (i < lines.length && lines[i].trim() !== "" && !/^(#{1,3}\s|```|>|\s*[-*]\s|\s*\d+\.\s|---+$)/.test(lines[i])) { buf.push(lines[i]); i++; }
      html += `<p>${inline(buf.join(" "))}</p>`;
    }
    return html;
  }

  // Post-render enhancement: syntax-highlight code + typeset math. Runs after the
  // markdown HTML is in the DOM; retries briefly while the CDN libs finish loading.
  function enhanceRich(el) {
    if (!el || !el.isConnected) return;
    let ready = true;
    try {
      if (window.hljs) {
        el.querySelectorAll("pre code").forEach((b) => {
          if (!b.dataset.hl) { try { window.hljs.highlightElement(b); } catch (e) {} b.dataset.hl = "1"; }
        });
      } else { ready = false; }
    } catch (e) {}
    try {
      if (window.renderMathInElement) {
        window.renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false },
          ],
          throwOnError: false, ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        });
      } else { ready = false; }
    } catch (e) {}
    // mermaid diagrams: ```mermaid fenced blocks → rendered SVG
    try {
      const mer = el.querySelectorAll("code.language-mermaid");
      if (mer.length) {
        if (window.mermaid) {
          const dark = document.documentElement.getAttribute("data-theme") === "dark";
          try { window.mermaid.initialize({ startOnLoad: false, theme: dark ? "dark" : "default", securityLevel: "strict" }); } catch (e) {}
          mer.forEach((c, i) => {
            const block = c.closest(".codeblock") || c;
            if (block.dataset.mer) return; block.dataset.mer = "1";
            const src = c.textContent;
            const id = "mer-" + (Date.now() % 1e7) + "-" + i;
            Promise.resolve().then(() => window.mermaid.render(id, src)).then(({ svg }) => {
              const d = document.createElement("div"); d.className = "md-mermaid"; d.innerHTML = svg;
              if (block.isConnected) block.replaceWith(d);
            }).catch(() => { delete block.dataset.mer; });
          });
        } else { ready = false; }
      }
    } catch (e) {}
    if (!ready) setTimeout(() => enhanceRich(el), 400);   // libs still loading
  }

  window.HermesData = {
    MODELS, SUGGESTIONS, SEED, GROUP_ORDER, refreshModels, PROVIDER_ICON,
    pickSuggestions, generateReply, genFollowups, renderMarkdown, enhanceRich,
  };
})();


/* ==================== js/ui.jsx ==================== */
/* Hermes — ui.jsx : shared primitives (Modal, Toasts, Confetti, Popover, hooks) */
(function () {
  const { useState, useEffect, useRef, useCallback, createContext, useContext } = React;
  const I = window.Icons;

  /* ---------- Modal ---------- */
  function Modal({ children, onClose, width = 520, className = "", labelledBy }) {
    useEffect(() => {
      const onKey = (e) => { if (e.key === "Escape") { e.stopPropagation(); onClose && onClose(); } };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
    return (
      <div className="overlay" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        <div className="overlay-scrim" onClick={onClose} />
        <div className={"modal " + className} style={{ maxWidth: width }} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }

  function ModalHead({ title, onClose, id }) {
    return (
      <div className="modal-head">
        <h2 id={id}>{title}</h2>
        <button className="x-btn" aria-label="Close" onClick={onClose}><I.X size={18} /></button>
      </div>
    );
  }

  /* ---------- Toasts ---------- */
  const ToastCtx = createContext(null);
  function useToast() { return useContext(ToastCtx); }

  function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const push = useCallback((t) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((x) => [...x, { id, type: "info", ...t }]);
      const dur = t.duration || 4000;
      setTimeout(() => setToasts((x) => x.filter((y) => y.id !== id)), dur);
    }, []);
    const remove = (id) => setToasts((x) => x.filter((y) => y.id !== id));
    const icon = { success: <I.Check size={13} />, error: <I.X size={13} />, info: <I.Info size={13} /> };
    return (
      <ToastCtx.Provider value={push}>
        {children}
        <div className="toasts" aria-live="polite">
          {toasts.map((t) => (
            <div key={t.id} className={"toast " + t.type} onClick={() => remove(t.id)} role="status">
              <span className="ti">{icon[t.type]}</span>
              <span className="tx">
                <span className="tt">{t.title}</span>
                {t.desc && <span className="td">{t.desc}</span>}
              </span>
            </div>
          ))}
        </div>
      </ToastCtx.Provider>
    );
  }

  /* ---------- Confetti (amber/warm) ---------- */
  function fireConfetti() {
    if (document.body.classList.contains("no-anim")) return;
    const root = document.createElement("div");
    root.className = "confetti-root";
    document.body.appendChild(root);
    const colors = ["#d9a36b", "#c98e4f", "#b67d3f", "#f3e3d1", "#e8c79a", "#9e6b34"];
    const N = 70;
    for (let i = 0; i < N; i++) {
      const p = document.createElement("div");
      p.className = "confetti-piece";
      const left = Math.random() * 100;
      const delay = Math.random() * 0.25;
      const dur = 1.4 + Math.random() * 1.3;
      const size = 6 + Math.random() * 7;
      p.style.left = left + "vw";
      p.style.top = (-10 - Math.random() * 20) + "px";
      p.style.width = size + "px";
      p.style.height = size * 1.4 + "px";
      p.style.background = colors[(Math.random() * colors.length) | 0];
      p.style.opacity = "0.95";
      p.style.borderRadius = Math.random() > 0.6 ? "50%" : "2px";
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      p.style.animationDuration = dur + "s";
      p.style.animationDelay = delay + "s";
      root.appendChild(p);
    }
    setTimeout(() => root.remove(), 3200);
  }

  /* ---------- Popover (click-outside + positioning) ---------- */
  function Popover({ anchorRef, onClose, children, align = "left", side = "bottom", className = "", offset = 6, width }) {
    const ref = useRef(null);
    const [pos, setPos] = useState(null);
    useEffect(() => {
      const place = () => {
        const a = anchorRef.current; if (!a) return;
        const r = a.getBoundingClientRect();
        const pop = ref.current;
        const pw = pop ? pop.offsetWidth : (width || 220);
        const ph = pop ? pop.offsetHeight : 200;
        let top = side === "top" ? r.top - ph - offset : r.bottom + offset;
        let left = align === "right" ? r.right - pw : r.left;
        // clamp
        left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
        if (top + ph > window.innerHeight - 8) top = Math.max(8, r.top - ph - offset);
        top = Math.max(8, top);
        setPos({ top, left });
      };
      place();
      const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target) && anchorRef.current && !anchorRef.current.contains(e.target)) onClose && onClose(); };
      const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
      const t = setTimeout(() => document.addEventListener("mousedown", onDoc), 0);
      window.addEventListener("keydown", onKey);
      window.addEventListener("resize", place);
      window.addEventListener("scroll", place, true);
      return () => { clearTimeout(t); document.removeEventListener("mousedown", onDoc); window.removeEventListener("keydown", onKey); window.removeEventListener("resize", place); window.removeEventListener("scroll", place, true); };
    }, []);
    return (
      <div ref={ref} className={"popover " + className} style={{ top: pos ? pos.top : -9999, left: pos ? pos.left : -9999, width }} role="menu">
        {children}
      </div>
    );
  }

  /* ---------- Switch ---------- */
  function Switch({ on, onChange, label }) {
    return (
      <button className={"switch " + (on ? "on" : "")} role="switch" aria-checked={on} aria-label={label}
        onClick={() => onChange(!on)}><span className="knob" /></button>
    );
  }

  /* ---------- Segmented ---------- */
  function Segmented({ value, onChange, options }) {
    return (
      <div className="segmented" role="tablist">
        {options.map((o) => (
          <button key={o.value} className={value === o.value ? "active" : ""} role="tab" aria-selected={value === o.value}
            onClick={() => onChange(o.value)}>{o.label}</button>
        ))}
      </div>
    );
  }

  /* ---------- useLocalState ---------- */
  function useLocal(key, initial) {
    const [v, setV] = useState(() => {
      try { const s = localStorage.getItem(key); return s !== null ? JSON.parse(s) : initial; } catch { return initial; }
    });
    useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key, v]);
    return [v, setV];
  }

  function relTime(ms) {
    const d = Date.now() - ms, m = d / 6e4, h = m / 60, day = h / 24;
    if (m < 1) return "just now";
    if (h < 1) return Math.floor(m) + "m ago";
    if (day < 1) return Math.floor(h) + "h ago";
    if (day < 7) return Math.floor(day) + "d ago";
    return new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }

  window.UI = { Modal, ModalHead, ToastProvider, useToast, fireConfetti, Popover, Switch, Segmented, useLocal, relTime };
})();


/* ==================== js/sidebar.jsx ==================== */
/* Hermes — sidebar.jsx : left rail (S4) */
(function () {
  const { useState, useRef, useEffect } = React;
  const I = window.Icons;
  const { Popover, relTime } = window.UI;

  function ChatRow({ s, active, onOpen, onMenu }) {
    const btnRef = useRef(null);
    return (
      <div className={"chat-row" + (active ? " active" : "")} onClick={() => onOpen(s.id)} title={s.title}>
        {s.pinned && <span className="pin"><I.Pin size={12} /></span>}
        <span className="title">{s.title}</span>
        <button ref={btnRef} className="row-menu" aria-label="Chat options"
          onClick={(e) => { e.stopPropagation(); onMenu(s, btnRef); }}>
          <I.MoreHorizontal size={16} />
        </button>
      </div>
    );
  }

  function Sidebar(props) {
    const {
      collapsed, mobileOpen, sessions, activeId, folders,
      onNewChat, onOpenChat, onOpenSearch, onOpenNotes, onOpenProjects, onOpenAgents, showAgents, onOpenSkills, showSkills,
      onNewFolder, onChatMenu, onToggleCollapse, user, onUserClick, onResize,
      groupOrder, theme,
    } = props;

    const [filter, setFilter] = useState("");
    const userRef = useRef(null);

    const filtered = sessions.filter((s) => !filter || s.title.toLowerCase().includes(filter.toLowerCase()));
    const pinned = filtered.filter((s) => s.pinned);
    const groups = {};
    filtered.filter((s) => !s.pinned).forEach((s) => { (groups[s.group] = groups[s.group] || []).push(s); });

    // drag resize
    const resizing = useRef(false);
    useEffect(() => {
      const move = (e) => { if (resizing.current) onResize(e.clientX); };
      const up = () => { resizing.current = false; document.body.style.cursor = ""; };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
      return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    }, [onResize]);

    return (
      <aside className={"sidebar" + (collapsed ? " collapsed" : "") + (mobileOpen ? " mobile-open" : "")}>
        <div className="sb-top">
          <div className="sb-wordmark">
            <window.HermesGlyph size={26} />
            {!collapsed && <span className="sb-wordmark-text">Hermes</span>}
          </div>
          <button className="sb-iconbtn" aria-label="Toggle sidebar" onClick={onToggleCollapse}>
            <I.PanelLeft size={18} />
          </button>
        </div>

        <div className="sb-scroll">
          <button className="sb-item sb-new" onClick={onNewChat}>
            <span className="ic"><I.Pencil size={17} /></span><span>New Chat</span>
          </button>

          <button className="sb-item" onClick={onOpenSearch}>
            <span className="ic"><I.Search size={18} /></span><span className="sb-label">Search</span>
            {!collapsed && <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--text-faint)" }}>⌘K</span>}
          </button>
          <button className="sb-item" onClick={onOpenNotes}>
            <span className="ic"><I.Notebook size={18} /></span><span className="sb-label">Notes</span>
          </button>
          <button className="sb-item" onClick={onOpenProjects}>
            <span className="ic"><I.Folder size={18} /></span><span className="sb-label">Projects</span>
          </button>
          {showAgents && (
            <button className="sb-item" onClick={onOpenAgents}>
              <span className="ic"><I.Bot size={18} /></span><span className="sb-label">Agents</span>
            </button>
          )}
          {showSkills && (
            <button className="sb-item" onClick={onOpenSkills}>
              <span className="ic"><I.Wand size={18} /></span><span className="sb-label">Skills</span>
            </button>
          )}

          {!collapsed && folders.length > 0 && (
            <div className="sb-section">
              <div className="sb-section-h">
                <span>Folders</span>
                <button className="sb-iconbtn" style={{ width: 22, height: 22 }} aria-label="New folder" onClick={onNewFolder}><I.Plus size={15} /></button>
              </div>
              {folders.map((f) => (
                <button key={f.name} className="sb-item" style={{ paddingTop: 6, paddingBottom: 6 }}>
                  <span className="ic"><I.Folder size={17} style={{ color: f.color }} /></span>
                  <span className="sb-label">{f.name}</span>
                </button>
              ))}
            </div>
          )}

          {!collapsed && (
            <div className="sb-section">
              <div className="sb-section-h"><span>Chats</span></div>
              <div style={{ padding: "0 2px 6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 9px", borderRadius: 8, background: "var(--field-bg-2)", color: "var(--text-3)" }}>
                  <I.Filter size={13} />
                  <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter chats"
                    style={{ border: "none", outline: "none", background: "transparent", fontSize: 13, width: "100%" }} />
                </div>
              </div>

              {pinned.length > 0 && (
                <div className="chat-group">
                  <div className="chat-group-label">Pinned</div>
                  {pinned.map((s) => <ChatRow key={s.id} s={s} active={s.id === activeId} onOpen={onOpenChat} onMenu={onChatMenu} />)}
                </div>
              )}

              {groupOrder.map((g) => groups[g] && groups[g].length > 0 && (
                <div className="chat-group" key={g}>
                  <div className="chat-group-label">{g}</div>
                  {groups[g].map((s) => <ChatRow key={s.id} s={s} active={s.id === activeId} onOpen={onOpenChat} onMenu={onChatMenu} />)}
                </div>
              ))}

              {filtered.length === 0 && (
                <div style={{ padding: "20px 12px", fontSize: 13, color: "var(--text-3)", textAlign: "center" }}>No chats match.</div>
              )}
            </div>
          )}
        </div>

        <button ref={userRef} className="sb-user" onClick={() => onUserClick(userRef)} aria-label="Account menu">
          <span className="avatar">{user.initials}</span>
          {!collapsed && (
            <span className="sb-user-text">
              <div className="nm">{user.name}</div>
              <div className="rl">{user.role}</div>
            </span>
          )}
          {!collapsed && <I.ChevronUp size={15} style={{ color: "var(--text-3)" }} />}
        </button>

        {!collapsed && <div className="sb-resize" onMouseDown={() => { resizing.current = true; document.body.style.cursor = "col-resize"; }} />}
      </aside>
    );
  }

  window.Sidebar = Sidebar;
})();


/* ==================== js/chat.jsx ==================== */
/* Hermes — chat.jsx : thread, messages, home, composer, mic overlay */
(function () {
  const { useState, useRef, useEffect, useLayoutEffect } = React;
  const I = window.Icons;
  const D = window.HermesData;

  function modelMeta(id) {
    return D.MODELS.find((m) => m.id === id) || D.MODELS[0] ||
      { id: id || "", name: id ? String(id).split("::").pop() : "No model — add one in Settings", icon: "Bot", provider: "", model: "" };
  }

  /* ---------- Assistant activity ("Thought for X") ---------- */
  function Activity({ seconds }) {
    // Honest, non-expandable latency label (no fabricated reasoning trace).
    return (
      <div className="activity">
        <div className="activity-head" style={{ cursor: "default" }}>
          <I.Sparkle size={14} style={{ color: "var(--accent-deep)" }} />
          <span>Responded in {seconds} second{seconds === 1 ? "" : "s"}</span>
        </div>
      </div>
    );
  }

  /* ---------- Message actions row ---------- */
  function Actions({ onCopy, onRegen, onListen, listening, vote, onVote, onInfo }) {
    return (
      <div className="actions">
        <button className="act-btn" aria-label="Copy" onClick={onCopy}><I.Copy size={15} /></button>
        <button className={"act-btn" + (listening ? " on-up" : "")} aria-label="Read aloud" onClick={onListen}>
          {listening ? <I.Pause size={15} /> : <I.Volume size={15} />}
        </button>
        <button className="act-btn" aria-label="Info" onClick={onInfo}><I.Info size={15} /></button>
        <button className={"act-btn" + (vote === 1 ? " on-up" : "")} aria-label="Good response" onClick={() => onVote(1)}><I.ThumbsUp size={15} /></button>
        <button className={"act-btn" + (vote === -1 ? " on-down" : "")} aria-label="Bad response" onClick={() => onVote(-1)}><I.ThumbsDown size={15} /></button>
        <button className="act-btn" aria-label="Regenerate" onClick={onRegen}><I.Refresh size={15} /></button>
        <button className="act-btn" aria-label="More"><I.MoreHorizontal size={15} /></button>
      </div>
    );
  }

  /* ---------- A single assistant turn ---------- */
  function AssistantTurn({ msg, streaming, isLast, onFollowup, onToast, showTimestamps, showThinking, showTools, onRegen }) {
    const meta = modelMeta(msg.model);
    const Ic = I[meta.icon] || I.Bot;
    const [vote, setVote] = useState(0);
    const [listening, setListening] = useState(false);
    const mdRef = useRef(null);
    // syntax-highlight code + typeset math once the reply has settled
    useEffect(() => { if (!streaming && mdRef.current) D.enhanceRich(mdRef.current); }, [msg.content, streaming]);

    const copy = () => { navigator.clipboard && navigator.clipboard.writeText(msg.content); onToast({ type: "success", title: "Copied to clipboard" }); };
    const listen = () => {
      try {
        if (listening) { speechSynthesis.cancel(); setListening(false); return; }
        const u = new SpeechSynthesisUtterance(msg.content.replace(/[#*`>]/g, "").slice(0, 600));
        u.onend = () => setListening(false);
        speechSynthesis.cancel(); speechSynthesis.speak(u); setListening(true);
      } catch { onToast({ type: "info", title: "Text-to-speech unavailable" }); }
    };

    return (
      <div className="turn assistant anim-fadeup">
        <div className="assistant-head">
          <span className="am-icon"><window.HermesGlyph size={17} flap={streaming && !msg.content} /></span>
          <span className="am-name">{meta.name}</span>
          {streaming && !msg.content && <span className="am-thinking shimmer-text">Thinking…</span>}
          {showTimestamps && msg.ts && <span className="ts">{msg.ts}</span>}
        </div>

        {msg.thought ? <Activity seconds={msg.thought} /> : null}

        {showThinking && msg.reasoning ? (
          <details className="agent-trace" open={streaming}>
            <summary><I.Sparkle size={13} /> Thinking{streaming ? "…" : ""}</summary>
            <div className="agent-trace-body">{msg.reasoning}</div>
          </details>
        ) : null}
        {showTools && msg.tools && msg.tools.length ? (
          <details className="agent-trace" open={streaming}>
            <summary><I.Wand size={13} /> Tools used ({msg.tools.length})</summary>
            <div className="agent-trace-body">
              {msg.tools.map((t, i) => (
                <div key={i} className="tool-call"><code>{t.name}</code>{t.args ? <span className="tool-args">{t.args}</span> : null}</div>
              ))}
            </div>
          </details>
        ) : null}

        {streaming && !msg.content ? null : (
          <div className="md" ref={mdRef} dangerouslySetInnerHTML={{ __html: D.renderMarkdown(msg.content) }} />
        )}

        {streaming && msg.content ? <span className="typing" style={{ marginTop: 4 }}><span/><span/><span/></span> : null}

        {!streaming && (
          <Actions onCopy={copy} onRegen={onRegen}
            onListen={listen} listening={listening} vote={vote}
            onVote={(v) => { setVote(vote === v ? 0 : v); onToast({ type: v === 1 ? "success" : "info", title: v === 1 ? "Thanks for the feedback!" : "Feedback noted" }); }}
            onInfo={() => onToast({ type: "info", title: meta.name, desc: "Generated in " + (msg.thought || 3) + "s · ~" + Math.max(1, Math.round(msg.content.length / 4)) + " tokens" })} />
        )}

        {!streaming && isLast && msg.followups && msg.followups.length > 0 && (
          <div className="followups anim-fadein">
            <div className="followups-h"><I.Sparkle size={13} /> Follow up</div>
            {msg.followups.map((q, i) => (
              <button key={i} className="followup-q" onClick={() => onFollowup(q)}>
                <span>{q}</span><span className="plus"><I.Plus size={15} /></span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ---------- Thread ---------- */
  function Thread({ session, streaming, onFollowup, onToast, settings, onRegen }) {
    const wrapRef = useRef(null);
    const [showJump, setShowJump] = useState(false);
    const stickRef = useRef(true);

    // code copy via delegation
    useEffect(() => {
      const el = wrapRef.current; if (!el) return;
      const handler = (e) => {
        const btn = e.target.closest(".copy-float"); if (!btn) return;
        const id = btn.getAttribute("data-copy");
        const code = el.querySelector("#" + CSS.escape(id));
        if (code) {
          navigator.clipboard && navigator.clipboard.writeText(code.textContent);
          btn.classList.add("copied");
          const tx = btn.querySelector(".cf-tx"); if (tx) tx.textContent = "Copied!";
          setTimeout(() => { btn.classList.remove("copied"); if (tx) tx.textContent = "Copy"; }, 1400);
        }
      };
      el.addEventListener("click", handler);
      return () => el.removeEventListener("click", handler);
    }, []);

    const scrollToBottom = (smooth) => {
      const el = wrapRef.current; if (!el) return;
      el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
    };

    useLayoutEffect(() => { scrollToBottom(false); }, [session && session.id]);
    useEffect(() => { if (stickRef.current) scrollToBottom(true); }, [session && session.messages.length, streaming && streaming.text]);

    const onScroll = () => {
      const el = wrapRef.current; if (!el) return;
      const near = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
      stickRef.current = near; setShowJump(!near);
    };

    const msgs = session ? session.messages.slice() : [];

    return (
      <div className="thread-wrap" ref={wrapRef} onScroll={onScroll}>
        <div className={"thread" + (settings.bubbles ? "" : " bubbles-off")}>
          {msgs.map((m, i) => {
            const isLast = i === msgs.length - 1;
            if (m.role === "user") {
              return <div className="turn user anim-fadeup" key={i}>
                {m.images && m.images.length > 0 && (
                  <div className="user-images">{m.images.map((im, k) => <img key={k} src={im.b64} alt={im.name || "image"} loading="lazy" />)}</div>
                )}
                {m.content ? <div className="user-bubble">{m.content}</div> : null}
              </div>;
            }
            const isStreamingThis = streaming && isLast;
            const liveMsg = isStreamingThis ? { ...m, content: streaming.text, reasoning: streaming.reasoning || m.reasoning, tools: streaming.tools && streaming.tools.length ? streaming.tools : m.tools } : m;
            return <AssistantTurn key={i} msg={liveMsg} streaming={isStreamingThis} isLast={isLast}
              onFollowup={onFollowup} onToast={onToast} showTimestamps={settings.timestamps}
              showThinking={settings.showThinking} showTools={settings.showTools} onRegen={onRegen} />;
          })}
        </div>
        {showJump && (
          <button className="jump-latest" onClick={() => { stickRef.current = true; scrollToBottom(true); setShowJump(false); }}>
            <I.ArrowDown size={14} /> Jump to latest
          </button>
        )}
      </div>
    );
  }

  /* ---------- Mic overlay (S18) ---------- */
  function MicOverlay({ onStop, onCancel }) {
    const [t, setT] = useState(0);
    useEffect(() => { const iv = setInterval(() => setT((x) => x + 1), 1000); return () => clearInterval(iv); }, []);
    const mm = String(Math.floor(t / 60)).padStart(2, "0"), ss = String(t % 60).padStart(2, "0");
    return (
      <div className="mic-overlay" role="dialog" aria-label="Voice input">
        <div className="waveform">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="bar" style={{
              height: (18 + Math.abs(Math.sin(i * 0.9)) * 60) + "px",
              animationDelay: (i * 0.05) + "s",
              animationDuration: (0.7 + (i % 5) * 0.12) + "s",
            }} />
          ))}
        </div>
        <div className="mic-label">Listening…</div>
        <div className="mic-time">{mm}:{ss}</div>
        <button className="mic-stop" aria-label="Stop recording" onClick={onStop}><span className="sq" /></button>
        <button onClick={onCancel} style={{ color: "rgba(255,255,255,.6)", fontSize: 14 }}>Cancel</button>
      </div>
    );
  }

  /* ---------- Composer ---------- */
  function Composer({ value, onChange, onSend, onStop, streaming, attachments, onAttach, onRemoveAttach, onFiles,
    placeholder, suggestChips, onSuggestChip, onMic, focusKey }) {
    const taRef = useRef(null);
    const [focused, setFocused] = useState(false);
    const [launching, setLaunching] = useState(false);
    const [drag, setDrag] = useState(false);

    const autosize = () => { const t = taRef.current; if (!t) return; t.style.height = "auto"; t.style.height = Math.min(t.scrollHeight, 220) + "px"; };
    useEffect(autosize, [value]);
    useEffect(() => { if (focusKey) taRef.current && taRef.current.focus(); }, [focusKey]);

    const doSend = () => {
      if (!value.trim() && attachments.length === 0) return;
      if (!document.body.classList.contains("no-anim")) { setLaunching(true); setTimeout(() => setLaunching(false), 520); }
      onSend();
    };
    const onKey = (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (streaming) return; doSend(); }
    };
    // Paste an image (screenshot / copied picture) straight into the chat. Only
    // intercept a PURE-image paste so normal text/rich paste still works.
    const onPaste = (e) => {
      if (!onFiles) return;
      const items = Array.from((e.clipboardData && e.clipboardData.items) || []);
      const imgs = items.filter((i) => i.kind === "file" && /^image\//.test(i.type));
      const hasText = items.some((i) => i.kind === "string");
      if (!imgs.length || hasText) return;
      e.preventDefault();
      const files = imgs.map((i) => i.getAsFile()).filter(Boolean);
      if (files.length) onFiles(files);
    };
    const onDrop = (e) => {
      if (!onFiles) return;
      e.preventDefault(); setDrag(false);
      const files = Array.from((e.dataTransfer && e.dataTransfer.files) || []);
      if (files.length) onFiles(files);
    };
    const onDragOver = (e) => { if (onFiles && e.dataTransfer && Array.from(e.dataTransfer.types || []).includes("Files")) { e.preventDefault(); setDrag(true); } };
    const onDragLeave = (e) => { if (e.currentTarget === e.target) setDrag(false); };

    return (
      <div className="composer-wrap">
        <div className="composer-inner">
          <div className={"composer" + (focused ? " focused" : "") + (drag ? " drag" : "")}
            onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>
            {drag && <div className="drop-veil"><I.Image size={22} /><span>Drop images or files to attach</span></div>}
            {attachments.length > 0 && (
              <div className="attach-chips">
                {attachments.map((a, i) => (
                  <div className={"chip" + (a.kind === "image" ? " img" : "")} key={i}>
                    <span className="thumb">{a.kind === "image" && a.b64 ? <img src={a.b64} alt={a.name} /> : (a.kind === "image" ? <I.Image size={16} /> : <I.FileText size={16} />)}</span>
                    <span className="meta"><div className="nm">{a.name}</div><div className="sz">{a.size}</div></span>
                    <button className="x" aria-label="Remove" onClick={() => onRemoveAttach(i)}><I.X size={13} /></button>
                  </div>
                ))}
              </div>
            )}
            <textarea ref={taRef} rows={1} value={value} placeholder={placeholder || "Message Hermes…"}
              onChange={(e) => onChange(e.target.value)} onKeyDown={onKey} onPaste={onPaste}
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} aria-label="Message" />

            {suggestChips && suggestChips.length > 0 && !value && (
              <div className="suggest-chips">
                {suggestChips.map((c, i) => (
                  <button key={i} className="suggest-chip" onClick={() => onSuggestChip(c)}>
                    {React.createElement(I[c.icon] || I.Sparkle, { size: 14 })}{c.t1}
                  </button>
                ))}
              </div>
            )}

            <div className="composer-bar">
              <div className="left">
                <button className="cz-btn" aria-label="Attach file" onClick={onAttach}><I.Plus size={20} /></button>
              </div>
              <div className="right">
                {streaming ? (
                  <button className="stop-btn" aria-label="Stop" onClick={onStop}><span className="sq" /></button>
                ) : (
                  <button className={"send-btn" + (launching ? " launching" : "")} aria-label="Send"
                    disabled={!value.trim() && attachments.length === 0} onClick={doSend}>
                    <I.ArrowUp size={19} sw={2.4} />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="disclaimer">Hermes can make mistakes. Verify important info.</div>
        </div>
      </div>
    );
  }

  /* ---------- Empty home (S2) ---------- */
  function Home({ model, suggestions, onPick, composerProps, context }) {
    const meta = modelMeta(model);
    const ctx = context && (context.project || context.agent) ? context : null;
    return (
      <div className="home">
        <div className="home-inner">
          <div className="home-hero">
            <div className="home-glyph"><window.HermesGlyph size={56} /></div>
            <div className="home-title">{ctx && ctx.project ? ctx.project.name : "How can I help?"}</div>
            <div className="home-sub">Using {meta.name}</div>
          </div>
          {ctx && (
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 12 }}>
              {ctx.project && <span className="tag-mini" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><I.Folder size={12} style={{ color: ctx.project.color }} /> {ctx.project.name}<button onClick={ctx.onClear} aria-label="Clear" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-3)", padding: 0, display: "inline-flex" }}><I.X size={12} /></button></span>}
              {ctx.agent && <span className="tag-mini" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><I.Bot size={12} style={{ color: ctx.agent.color }} /> {ctx.agent.name}<button onClick={ctx.onClear} aria-label="Clear" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-3)", padding: 0, display: "inline-flex" }}><I.X size={12} /></button></span>}
            </div>
          )}
          <Composer {...composerProps} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 12.5, fontWeight: 600, margin: "22px 2px 2px", textTransform: "uppercase", letterSpacing: ".04em" }}>Suggested</div>
          <div className="suggest-grid">
            {suggestions.map((s, i) => (
              <button key={i} className="suggest-card anim-fadeup" style={{ animationDelay: (i * 0.05) + "s" }} onClick={() => onPick(s)}>
                <div className="ic">{React.createElement(I[s.icon] || I.Sparkle, { size: 16 })}</div>
                <div className="t1">{s.t1}</div>
                <div className="t2">{s.t2}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  window.Chat = { Thread, Composer, MicOverlay, Home, modelMeta };
})();


/* ==================== js/settings.jsx ==================== */
/* Hermes — settings.jsx : Settings modal (S7) */
(function () {
  const { useState } = React;
  const I = window.Icons;
  const { Modal, Switch, Segmented } = window.UI;
  const D = window.HermesData;

  const TABS = [
    { id: "general", label: "General", icon: "Settings" },
    { id: "interface", label: "Interface", icon: "Sliders" },
    { id: "personalization", label: "Personalization", icon: "Sparkle" },
    { id: "connections", label: "Providers", icon: "Server" },
    { id: "integrations", label: "Integrations", icon: "Plug" },
    { id: "agent", label: "Agent", icon: "Sparkle" },
    { id: "remote", label: "Remote access", icon: "Share" },
    { id: "data", label: "Data Controls", icon: "Database" },
    { id: "about", label: "About", icon: "Info" },
  ];

  function Row({ t, d, children }) {
    return (
      <div className="set-row">
        <div className="rl"><div className="t">{t}</div>{d && <div className="d">{d}</div>}</div>
        <div style={{ flex: "0 0 auto" }}>{children}</div>
      </div>
    );
  }

  function UsageBar({ pct, amber }) {
    return <div className="usage-bar"><div className={"fill" + (amber ? " amber" : "")} style={{ width: pct + "%" }} /></div>;
  }

  // ---- Providers panel: add provider → key → fetch models → pick which to enable ----
  const PROV_ORDER = ["deepseek", "anthropic", "openai", "gemini", "groq", "openrouter", "mistral", "nous", "local"];
  function ProvidersPanel({ onToast }) {
    const [provs, setProvs] = React.useState(null);
    const [active, setActive] = React.useState("deepseek");
    const [draft, setDraft] = React.useState({});     // {pid:{key, base_url}}
    const [avail, setAvail] = React.useState({});      // {pid:[modelId]} fetched live
    const [enabled, setEnabled] = React.useState({});  // {pid:[modelId]} chosen
    const [status, setStatus] = React.useState({});    // {pid:{ok,msg,busy}}
    const [open, setOpen] = React.useState(null);      // which provider's config is open
    const load = () => fetch("/api/config").then((r) => r.json()).then((c) => {
      setProvs(c.providers); setActive(c.provider);
      const d = {}, en = {};
      Object.entries(c.providers).forEach(([pid, p]) => { d[pid] = { key: "", base_url: p.base_url }; en[pid] = p.models || []; });
      setDraft(d); setEnabled(en);
    });
    const [syncing, setSyncing] = React.useState(false);
    const syncAgent = () => {
      setSyncing(true);
      fetch("/api/providers/sync-agent", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" })
        .then((r) => r.json()).then((d) => {
          const n = (d && d.count) || 0;
          onToast && onToast({ type: n ? "success" : "info", title: n ? ("Synced " + n + " provider" + (n === 1 ? "" : "s") + " from your agent") : "Already up to date", desc: n ? "They're in the model picker now." : "No new agent providers found." });
          window.HermesData && window.HermesData.refreshModels && window.HermesData.refreshModels();
          load();
        }).catch(() => onToast && onToast({ type: "error", title: "Sync failed" })).finally(() => setSyncing(false));
    };
    React.useEffect(() => { load(); }, []);
    if (!provs) return <div><h3>Providers</h3><p style={{ color: "var(--text-3)" }}>Loading…</p></div>;
    const upd = (pid, k, v) => setDraft((d) => ({ ...d, [pid]: { ...d[pid], [k]: v } }));
    const fetchModels = (pid) => {
      setStatus((s) => ({ ...s, [pid]: { busy: true, msg: "Fetching models…" } }));
      fetch("/api/test-key", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: pid, key: draft[pid].key, base_url: draft[pid].base_url }) })
        .then((r) => r.json()).then((res) => {
          if (res.ok) { setAvail((a) => ({ ...a, [pid]: res.models || [] }));
            setStatus((s) => ({ ...s, [pid]: { ok: true, msg: "✓ " + (res.models || []).length + " models available — pick below" } })); }
          else setStatus((s) => ({ ...s, [pid]: { ok: false, msg: "✗ " + (res.error || "failed") } }));
        });
    };
    const toggleModel = (pid, m) => setEnabled((en) => {
      const cur = en[pid] || []; const next = cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m];
      return { ...en, [pid]: next };
    });
    const save = (pid) => {
      const body = { providers: { [pid]: { key: draft[pid].key, base_url: draft[pid].base_url, models: enabled[pid] || [] } } };
      fetch("/api/config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        .then((r) => r.json()).then(() => { onToast && onToast({ type: "success", title: provs[pid].label + " saved", desc: (enabled[pid] || []).length + " model(s) enabled" }); load(); });
    };
    const setActiveProv = (pid) => { setActive(pid); fetch("/api/config", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provider: pid, active_model: (enabled[pid] || [])[0] || "" }) })
      .then(() => onToast && onToast({ type: "success", title: "Active: " + provs[pid].label })); };
    const PIC = { deepseek: "Wand", anthropic: "Brain", openai: "Sparkle", gemini: "Globe", groq: "Zap", openrouter: "Layers", mistral: "Bot", nous: "Gift", local: "Server" };
    const cur = open && provs[open];

    // ---- grid of provider cards ----
    if (!cur) {
      return (
        <div>
          <h3 style={{ marginBottom: 6 }}>Providers</h3>
          <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 0 }}>
            Connect an AI provider to add models to your chat. Click one to paste its key and pick models.
            Keys stay on this device (chmod&nbsp;600). Look for the
            <span style={{ fontSize: 10, fontWeight: 700, color: "var(--green)", border: "1px solid var(--green)", borderRadius: 6, padding: "1px 5px", margin: "0 4px" }}>FREE</span>
            tag for no-cost tiers.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12, padding: "10px 12px", border: "1px solid var(--border)", borderRadius: 11, background: "var(--surface)" }}>
            <span style={{ color: "var(--accent-deep)", display: "inline-flex" }}><I.Gift size={18} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 620, fontSize: 13.5 }}>Already set up in your agent?</div>
              <div style={{ fontSize: 12, color: "var(--text-3)" }}>Pull every provider your agent already has (Nous Portal, custom endpoints, …) — no re-entering keys.</div>
            </div>
            <button className="btn btn-outline" disabled={syncing} onClick={syncAgent}>{syncing ? "Syncing…" : "Sync from agent"}</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginTop: 14 }}>
            {PROV_ORDER.map((pid) => {
              const p = provs[pid], en = enabled[pid] || [], Ic = I[PIC[pid]] || I.Bot;
              const connected = p.key_set || (!p.needs_key && en.length) || pid === "local";
              return (
                <button key={pid} onClick={() => { setOpen(pid); setStatus((s) => ({ ...s, [pid]: {} })); }}
                  style={{ textAlign: "left", border: "1px solid var(--border)", borderRadius: 13, padding: 14, background: "var(--surface)", cursor: "pointer", display: "flex", flexDirection: "column", gap: 8, outline: active === pid ? "1.5px solid var(--accent)" : "none", transition: "border-color .15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ display: "inline-flex", width: 38, height: 38, borderRadius: 10, alignItems: "center", justifyContent: "center", background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent-deep)" }}><Ic size={21} /></span>
                    {active === pid ? <span style={{ fontSize: 11, fontWeight: 650, color: "var(--accent-deep)" }}>● active</span>
                      : connected ? <span style={{ fontSize: 11, fontWeight: 600, color: "var(--green)" }}>connected</span>
                        : <span style={{ fontSize: 11, color: "var(--text-3)" }}>not set</span>}
                  </div>
                  <div style={{ fontWeight: 650, fontSize: 14.5, display: "flex", alignItems: "center", gap: 6 }}>
                    {p.label}
                    {p.free && <span style={{ fontSize: 9.5, fontWeight: 700, color: "var(--green)", border: "1px solid var(--green)", borderRadius: 5, padding: "0 4px" }}>FREE</span>}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-3)" }}>{en.length ? en.length + " model" + (en.length === 1 ? "" : "s") + " enabled" : "tap to set up"}</div>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // ---- focused provider config ----
    const pid = open, p = cur, st = status[pid] || {}, av = avail[pid], en = enabled[pid] || [], Ic = I[PIC[pid]] || I.Bot;
    return (
      <div>
        <button className="btn btn-ghost" style={{ padding: "4px 8px", marginBottom: 12 }} onClick={() => setOpen(null)}><I.ChevronRight size={15} style={{ transform: "rotate(180deg)" }} /> All providers</button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ display: "inline-flex", width: 44, height: 44, borderRadius: 11, alignItems: "center", justifyContent: "center", background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent-deep)" }}><Ic size={25} /></span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17, display: "flex", alignItems: "center", gap: 8 }}>{p.label}
              {p.free && <span style={{ fontSize: 10, fontWeight: 700, color: "var(--green)", border: "1px solid var(--green)", borderRadius: 5, padding: "1px 5px" }}>FREE</span>}
              {active === pid && <span style={{ fontSize: 11, color: "var(--accent-deep)" }}>● active</span>}
            </div>
            {p.free && p.free_note && <div style={{ fontSize: 12.5, color: "var(--text-3)" }}>{p.free_note}</div>}
          </div>
        </div>
        {p.needs_key && (
          <div style={{ marginTop: 14 }}>
            <label className="field-label">API key{p.signup_url && <> · <a href={p.signup_url} target="_blank" rel="noreferrer" style={{ color: "var(--accent-deep)" }}>get a key →</a></>}</label>
            <input className="field" type="password" placeholder={p.key_set ? "•••••• saved — paste to replace" : "paste API key"} value={draft[pid].key} onChange={(e) => upd(pid, "key", e.target.value)} />
          </div>
        )}
        {pid === "local" && <div style={{ marginTop: 14 }}><label className="field-label">Server URL</label>
          <input className="field" value={draft[pid].base_url} onChange={(e) => upd(pid, "base_url", e.target.value)} placeholder="http://localhost:11434" />
          <p style={{ fontSize: 12, color: "var(--text-3)", margin: "6px 0 0" }}>Where your models run — Ollama <code>http://localhost:11434</code>, LM Studio / MLX <code>http://localhost:1234</code>. The <code>/v1</code> is added automatically.</p></div>}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}>
          <button className="btn btn-outline" disabled={st.busy} onClick={() => fetchModels(pid)}>{st.busy ? "Fetching…" : "Fetch models"}</button>
          {st.msg && <span style={{ fontSize: 12, color: st.ok ? "var(--green)" : (st.ok === false ? "var(--red)" : "var(--text-3)") }}>{st.msg}</span>}
        </div>
        {av && av.length > 0 && (
          <div style={{ marginTop: 12, maxHeight: 220, overflow: "auto", border: "1px solid var(--border)", borderRadius: 10, padding: 8 }}>
            {av.map((m) => (
              <label key={m} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 6px", cursor: "pointer", fontSize: 13.5, borderRadius: 7 }}>
                <input type="checkbox" checked={en.includes(m)} onChange={() => toggleModel(pid, m)} /> {m}
              </label>
            ))}
          </div>
        )}
        {(av || en.length > 0) && (
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button className="btn btn-primary" onClick={() => save(pid)}>Save {en.length} model{en.length === 1 ? "" : "s"}</button>
            {en.length > 0 && active !== pid && <button className="btn btn-outline" onClick={() => setActiveProv(pid)}>Set as active</button>}
          </div>
        )}
      </div>
    );
  }

  // ---- Agent panel (install / detect / update Hermes & OpenClaw) ----
  // ---- Browser control (browser-use): let the agent drive a real browser ----
  // ---- Multiple agents: pick which Hermes profile to chat with ----
  function AgentProfilesCard({ onToast }) {
    const [data, setData] = React.useState(null);
    const load = () => fetch("/api/agent-profiles").then((r) => r.json()).then(setData).catch(() => {});
    React.useEffect(() => { load(); }, []);
    if (!data || !data.profiles || data.profiles.length < 2) return null;   // only when there's a choice
    const pick = (name) => {
      fetch("/api/config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ agent_profile: name }) })
        .then((r) => r.json()).then(() => { onToast && onToast({ type: "success", title: "Active agent: " + (name || "auto") }); load(); });
    };
    const active = data.active || "";
    return (
      <div className="set-section" style={{ marginTop: 26 }}>
        <div className="sec-title">Your agents</div>
        <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>
          You have more than one Hermes agent (profile). Pick which one chats answer through.
          Each has its own model, memory, and skills.
        </p>
        {data.profiles.map((p) => {
          const on = active ? active === p.name : p.name === "default";
          return (
            <label key={p.name} style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--border)", borderRadius: 12, padding: 13, marginTop: 8, cursor: "pointer", outline: on ? "2px solid var(--accent)" : "none" }}>
              <input type="radio" name="agentprofile" checked={on} onChange={() => pick(p.name)} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 650 }}>{p.name}{p.name === "default" ? " (main)" : ""}</div>
                <div style={{ fontSize: 12.5, color: "var(--text-3)" }}>
                  {p.model || "model not set"}{p.provider ? " · " + p.provider : ""}
                </div>
              </div>
              <span style={{ fontSize: 11.5, color: p.running ? "var(--green)" : "var(--text-3)", display: "inline-flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: 9, background: p.running ? "var(--green)" : "var(--text-3)" }} />
                {p.running ? "running" : "stopped"}
              </span>
            </label>
          );
        })}
        <p style={{ fontSize: 11.5, color: "var(--text-3)", marginTop: 8 }}>
          A profile must be running with its API enabled to chat through it. Start one with
          <code style={{ margin: "0 4px" }}>hermes --profile &lt;name&gt; gateway start</code>.
        </p>
      </div>
    );
  }

  function BrowserUseCard({ onToast }) {
    const [st, setSt] = React.useState(null);
    const [log, setLog] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const load = () => fetch("/api/skill/browser-use").then((r) => r.json()).then(setSt).catch(() => {});
    React.useEffect(() => { load(); }, []);
    const run = (kind) => {
      setBusy(true); setLog("Starting…");
      fetch("/api/skill/browser-use/" + kind, { method: "POST" }).then((r) => r.json()).then(({ job }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then((r) => r.json()).then((j) => {
          setLog((j.log || []).join("\n"));
          if (j.status === "done" || j.status === "error") {
            clearInterval(poll); setBusy(false); load();
            onToast && onToast({ type: j.status === "done" ? "success" : "error", title: "Browser control " + (j.status === "done" ? "ready" : "failed") });
          }
        }), 1500);
      }).catch(() => { setBusy(false); onToast && onToast({ type: "error", title: "Failed to start" }); });
    };
    return (
      <div className="set-section" style={{ marginTop: 26 }}>
        <div className="sec-title">Browser control</div>
        <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>
          Lets the agent drive a real web browser — open pages, click, fill forms, read
          JavaScript-heavy or logged-in sites, take screenshots. Use it for tasks that need a
          live page, not just a search. Installs the <b>browser-use</b> skill for your agent.
        </p>
        <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 14, marginTop: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 650 }}>browser-use</div>
              <div style={{ fontSize: 12.5, color: st && st.installed ? "var(--green)" : "var(--text-3)" }}>
                {!st ? "checking…" : st.installed ? "✓ installed" + (st.current ? " · " + st.current : "") : "not installed"}
              </div>
              {st && st.update_available && <div style={{ fontSize: 12, color: "var(--accent-deep)", marginTop: 3 }}>↑ update available: {st.latest}</div>}
            </div>
            {st && !st.installed && <button className="btn btn-primary" disabled={busy} onClick={() => run("install")}>{busy ? "Installing…" : "Install"}</button>}
            {st && st.installed && st.update_available && <button className="btn btn-primary" disabled={busy} onClick={() => run("update")}>{busy ? "Updating…" : "Update"}</button>}
            {st && st.installed && !st.update_available && <span style={{ fontSize: 12, color: "var(--green)" }}>up to date</span>}
          </div>
        </div>
        {log && <pre style={{ marginTop: 12, maxHeight: 180, overflow: "auto", background: "#0c0c10", color: "#cfe", padding: 12, borderRadius: 10, fontSize: 12, whiteSpace: "pre-wrap" }}>{log}</pre>}
      </div>
    );
  }

  // ---- live "is the on-device agent actually working?" diagnostic ----
  function AgentStatus() {
    const [d, setD] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const probe = () => { setD("loading"); fetch("/api/agent-debug").then((r) => r.json()).then(setD).catch(() => setD({ agent_ready: false, acp_detail: "offline" })); };
    React.useEffect(() => { probe(); }, []);
    if (d === "loading" || d === null) return <div style={{ fontSize: 13, color: "var(--text-3)" }}>Checking the on-device agent…</div>;
    const ready = d.agent_ready;
    return (
      <div style={{ border: "1px solid " + (ready ? "var(--green)" : "var(--amber)"), background: "color-mix(in srgb, " + (ready ? "var(--green)" : "var(--amber)") + " 8%, transparent)", borderRadius: 11, padding: "11px 13px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 14, fontWeight: 600 }}>
          <span style={{ width: 9, height: 9, borderRadius: 9, background: ready ? "var(--green)" : "var(--amber)" }} />
          {ready ? "Agent ready — every model you pick runs here, with tools (terminal, web, files)." : "On-device agent not active"}
        </div>
        {!ready && <div style={{ fontSize: 12.5, color: "var(--text-2)", marginTop: 5 }}>{d.acp_detail || "—"}{d.hermes_bin && d.hermes_bin.startsWith("(") ? " · install Hermes below" : ""}</div>}
        <div style={{ display: "flex", gap: 12, marginTop: 8, fontSize: 12 }}>
          <button className="btn btn-ghost" style={{ padding: "3px 8px" }} onClick={probe}>Re-check</button>
          <button className="btn btn-ghost" style={{ padding: "3px 8px" }} onClick={() => setShow(!show)}>{show ? "Hide details" : "Details"}</button>
        </div>
        {show && <pre style={{ marginTop: 8, fontSize: 11, background: "var(--code-bg)", padding: 10, borderRadius: 8, overflow: "auto", maxHeight: 200 }}>{JSON.stringify(d, null, 2)}</pre>}
      </div>
    );
  }

  function AgentPanel({ onToast }) {
    const [agents, setAgents] = React.useState(null);
    const [upd, setUpd] = React.useState({});   // {agent:{update_available,current,latest}}
    const [log, setLog] = React.useState("");
    const load = () => fetch("/api/agents").then((r) => r.json()).then((d) => {
      setAgents(d.agents);
      d.agents.forEach((a) => { if (a.installed) fetch("/api/update/check/" + a.agent).then((r) => r.json()).then((u) => setUpd((s) => ({ ...s, [a.agent]: u }))); });
    });
    React.useEffect(() => { load(); }, []);
    const runJob = (aid, kind) => {
      setLog("Starting " + kind + " of " + aid + "…\n");
      fetch("/api/" + kind, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ agent: aid }) })
        .then((r) => r.json()).then(({ job }) => {
          const poll = setInterval(() => fetch("/api/install/status/" + job).then((r) => r.json()).then((st) => {
            setLog((st.log || []).join("\n"));
            if (st.status === "done" || st.status === "error") { clearInterval(poll); load(); onToast && onToast({ type: st.status === "done" ? "success" : "error", title: kind + " " + st.status }); }
          }), 1200);
        });
    };
    if (!agents) return <div><h3>Agent</h3><p style={{ color: "var(--text-3)" }}>Checking…</p></div>;
    return (
      <div>
        <h3 style={{ marginBottom: 6 }}>Agent</h3>
        <AgentStatus onToast={onToast} />
        <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 14 }}>Install, detect, and keep your local agent runtime up to date. AgentBay fetches the latest from GitHub for your OS.</p>
        {agents.map((a) => {
          const u = upd[a.agent] || {};
          return (
            <div key={a.agent} style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 14, marginTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 650 }}>{a.label}</div>
                  <div style={{ fontSize: 12.5, color: a.installed ? "var(--green)" : "var(--text-3)" }}>
                    {a.installed ? "✓ installed" + (a.version ? " · " + a.version : "") : "not installed"}</div>
                  {u.update_available && <div style={{ fontSize: 12, color: "var(--accent-deep)", marginTop: 3 }}>↑ update available: {u.latest}</div>}
                </div>
                {!a.installed && <button className="btn btn-primary" onClick={() => runJob(a.agent, "install")}>Install</button>}
                {a.installed && u.update_available && <button className="btn btn-primary" onClick={() => runJob(a.agent, "update")}>Update</button>}
                {a.installed && !u.update_available && u.latest && <span style={{ fontSize: 12, color: "var(--green)" }}>up to date</span>}
              </div>
            </div>
          );
        })}
        {log && <pre style={{ marginTop: 12, maxHeight: 200, overflow: "auto", background: "#0c0c10", color: "#cfe", padding: 12, borderRadius: 10, fontSize: 12, whiteSpace: "pre-wrap" }}>{log}</pre>}
        <AgentProfilesCard onToast={onToast} />
        <BrowserUseCard onToast={onToast} />
      </div>
    );
  }

  // ---- Accent color: curated "stones" that live-preview the whole app on hover ----
  const ACCENTS = [
    { name: "Sandal", hex: "#d9a36b" }, { name: "Clay", hex: "#cf7e5b" },
    { name: "Coral", hex: "#ec7a5e" }, { name: "Rose", hex: "#e07a93" },
    { name: "Rosewood", hex: "#c2698f" }, { name: "Plum", hex: "#9b7cd8" },
    { name: "Indigo", hex: "#6d83e0" }, { name: "Ocean", hex: "#4f9fd6" },
    { name: "Teal", hex: "#2fb0a3" }, { name: "Pine", hex: "#62a06a" },
    { name: "Honey", hex: "#e0b13e" }, { name: "Slate", hex: "#8893a8" },
  ];

  function AccentPicker({ value, onPick }) {
    const [hover, setHover] = React.useState(null);
    // hover = live preview the whole UI; leaving reverts to the committed color
    React.useEffect(() => {
      document.documentElement.style.setProperty("--accent", hover || value || "#d9a36b");
    }, [hover, value]);
    const shown = ACCENTS.find((a) => a.hex === (hover || value));
    return (
      <div className="accent-wrap">
        <div className="accent-stones" onMouseLeave={() => setHover(null)}>
          {ACCENTS.map((a) => (
            <button key={a.hex} type="button" aria-label={a.name}
              className={"accent-stone" + (a.hex === value ? " sel" : "")} style={{ "--c": a.hex }}
              onMouseEnter={() => setHover(a.hex)} onFocus={() => setHover(a.hex)}
              onBlur={() => setHover(null)} onClick={() => { setHover(null); onPick(a.hex); }}>
              {a.hex === value && <I.Check size={14} />}
            </button>
          ))}
        </div>
        <div className="accent-name">{shown ? shown.name : "Custom"}{hover ? " · preview" : ""}</div>
      </div>
    );
  }

  // ---- WhatsApp QR pairing, rendered live in the UI (reads the gateway bridge) ----
  function WhatsAppPair({ connected }) {
    const [st, setSt] = React.useState({ state: "waiting" });
    React.useEffect(() => {
      let alive = true;
      const tick = () => fetch("/api/integrations/whatsapp/qr").then((r) => r.json())
        .then((d) => { if (alive) setSt(d); }).catch(() => {});
      tick();
      const id = setInterval(tick, 2500);
      return () => { alive = false; clearInterval(id); };
    }, []);
    if (!connected && st.state === "off") {
      return <div style={{ fontSize: 13, color: "var(--text-3)", margin: "10px 0" }}>Press <b>Connect</b> below to start WhatsApp, then a QR code will appear here to scan.</div>;
    }
    if (st.state === "paired") {
      return <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--green)", fontWeight: 600, margin: "12px 0" }}><I.CheckCircle size={18} /> WhatsApp linked — you can message the agent now.</div>;
    }
    if (st.state === "qr") {
      return (
        <div style={{ margin: "12px 0" }}>
          <div style={{ fontSize: 13, marginBottom: 8 }}>On your phone: <b>WhatsApp → Settings → Linked Devices → Link a Device</b>, then scan:</div>
          <pre style={{ display: "inline-block", lineHeight: 1, letterSpacing: 0, fontSize: 9, background: "#fff", color: "#000", padding: 12, borderRadius: 8, margin: 0, fontFamily: "ui-monospace, Menlo, monospace", whiteSpace: "pre" }}>{st.qr}</pre>
          <div style={{ fontSize: 11.5, color: "var(--text-3)", marginTop: 6 }}>Code refreshes automatically. Keep this open until it links.</div>
        </div>
      );
    }
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-3)", margin: "12px 0" }}>
        <span className="typing" style={{ height: 12 }}><span /><span /><span /></span>
        Starting WhatsApp… the QR appears here in ~30s (first run installs its bridge).
      </div>
    );
  }

  // ---- Integrations: connect the agent to messaging channels ----
  function IntegrationsPanel({ onToast }) {
    const [data, setData] = React.useState(null);
    const [open, setOpen] = React.useState(null);   // channel id being configured
    const [draft, setDraft] = React.useState({});    // {env: value}
    const [busy, setBusy] = React.useState(false);
    const load = () => fetch("/api/integrations").then((r) => r.json()).then(setData);
    React.useEffect(() => { load(); }, []);
    if (!data) return <div><h3>Integrations</h3><p style={{ color: "var(--text-3)" }}>Loading…</p></div>;

    const channels = data.channels || [];
    const connectedCount = channels.filter((c) => c.connected).length;
    const cur = channels.find((c) => c.id === open);

    const openCard = (c) => { setOpen(c.id); setDraft({}); };
    const save = (c) => {
      setBusy(true);
      fetch("/api/integrations/save", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channel: c.id, values: draft }) })
        .then((r) => r.json()).then((res) => {
          setBusy(false);
          if (res.ok) { onToast && onToast({ type: "success", title: c.label + " connected", desc: res.restarted ? "Restarting the agent gateway…" : "Saved" }); setOpen(null); load(); }
          else onToast && onToast({ type: "error", title: "Could not connect", desc: res.error || "failed" });
        }).catch(() => { setBusy(false); onToast && onToast({ type: "error", title: "Network error" }); });
    };
    const disconnect = (c) => {
      setBusy(true);
      fetch("/api/integrations/disconnect", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channel: c.id }) })
        .then((r) => r.json()).then((res) => {
          setBusy(false);
          onToast && onToast({ type: res.ok ? "success" : "error", title: res.ok ? c.label + " disconnected" : (res.error || "failed") });
          setOpen(null); load();
        });
    };

    return (
      <div>
        <h3 style={{ marginBottom: 6 }}>Integrations</h3>
        <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 0 }}>
          Reach your agent from the apps you already use. Connecting a channel stores its
          credentials with your agent (chmod&nbsp;600) and restarts it — every message then runs
          through the full agent, with tools. {connectedCount > 0 && <b>{connectedCount} connected.</b>}
        </p>
        {!data.gateway_ready && (
          <div style={{ border: "1px solid var(--amber)", background: "color-mix(in srgb, var(--amber) 8%, transparent)", borderRadius: 10, padding: "10px 12px", margin: "10px 0", fontSize: 13 }}>
            No agent gateway detected yet. Install or select your agent in the <b>Agent</b> tab first — channels deliver messages through it.
          </div>
        )}

        {!cur && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 12, marginTop: 14 }}>
            {channels.map((c) => {
              const Ic = I[c.icon] || I.Plug;
              return (
                <button key={c.id} onClick={() => openCard(c)}
                  style={{ textAlign: "left", border: "1px solid var(--border)", borderRadius: 13, padding: 14, background: "var(--surface)", cursor: "pointer", display: "flex", flexDirection: "column", gap: 8, transition: "border-color .15s, transform .1s", outline: c.connected ? "1.5px solid var(--green)" : "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ display: "inline-flex", width: 38, height: 38, borderRadius: 10, alignItems: "center", justifyContent: "center", background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent-deep)" }}><Ic size={22} /></span>
                    {c.connected
                      ? <span style={{ fontSize: 11, fontWeight: 650, color: "var(--green)", display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 7, height: 7, borderRadius: 9, background: "var(--green)" }} /> Connected</span>
                      : <span style={{ fontSize: 11, color: "var(--text-3)" }}>Not connected</span>}
                  </div>
                  <div style={{ fontWeight: 650, fontSize: 14.5 }}>{c.label}</div>
                  <div style={{ fontSize: 12.5, color: "var(--text-3)", lineHeight: 1.4 }}>{c.blurb}</div>
                </button>
              );
            })}
          </div>
        )}

        {cur && (() => {
          const Ic = I[cur.icon] || I.Plug;
          const missingReq = cur.fields.some((f) => f.required && !f.is_set && !(draft[f.env] || "").trim());
          return (
            <div style={{ marginTop: 6 }}>
              <button className="btn btn-ghost" style={{ padding: "4px 8px", marginBottom: 10 }} onClick={() => setOpen(null)}><I.ChevronRight size={15} style={{ transform: "rotate(180deg)" }} /> All channels</button>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <span style={{ display: "inline-flex", width: 44, height: 44, borderRadius: 11, alignItems: "center", justifyContent: "center", background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent-deep)" }}><Ic size={26} /></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{cur.label}{cur.connected && <span style={{ fontSize: 11, fontWeight: 650, color: "var(--green)", marginLeft: 8 }}>● connected</span>}</div>
                  <div style={{ fontSize: 12.5, color: "var(--text-3)" }}>{cur.blurb}</div>
                </div>
              </div>

              {cur.guide && cur.guide.length > 0 && (
                <div style={{ border: "1px solid var(--border)", borderRadius: 11, padding: "12px 14px", margin: "12px 0", background: "var(--surface-2, var(--surface))" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: "var(--text-3)", marginBottom: 8 }}>Setup</div>
                  <ol style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.65 }}>
                    {cur.guide.map((g, i) => <li key={i}>{g}</li>)}
                  </ol>
                  {cur.docs && <a href={cur.docs} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 8, fontSize: 12.5, color: "var(--accent-deep)" }}>Full docs →</a>}
                </div>
              )}

              {cur.kind === "qr" && <WhatsAppPair connected={cur.connected} />}

              {cur.fields.map((f) => (
                <div key={f.env} style={{ marginBottom: 12 }}>
                  <label className="field-label">{f.label}{f.required && <span style={{ color: "var(--red)" }}> *</span>}{f.is_set && <span style={{ fontSize: 11, color: "var(--green)", marginLeft: 6 }}>● saved</span>}</label>
                  {f.type === "textarea"
                    ? <textarea className="field" style={{ minHeight: 120, fontFamily: "ui-monospace, monospace", fontSize: 12.5 }} placeholder={f.is_set ? "•••••• saved — paste to replace" : f.placeholder} value={draft[f.env] || ""} onChange={(e) => setDraft((d) => ({ ...d, [f.env]: e.target.value }))} />
                    : <input className="field" type={f.type === "password" ? "password" : "text"} placeholder={f.is_set && f.type === "password" ? "•••••• saved — paste to replace" : f.placeholder} value={draft[f.env] || ""} onChange={(e) => setDraft((d) => ({ ...d, [f.env]: e.target.value }))} />}
                  {f.help && <div style={{ fontSize: 11.5, color: "var(--text-3)", marginTop: 4 }}>{f.help}</div>}
                </div>
              ))}

              <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 16 }}>
                <button className="btn btn-primary" disabled={busy || (missingReq && !cur.connected && cur.fields.length > 0)} onClick={() => save(cur)}>
                  {busy ? "Saving…" : (cur.connected ? "Update" : "Connect")}
                </button>
                {cur.connected && <button className="btn btn-danger" disabled={busy} onClick={() => disconnect(cur)}>Disconnect</button>}
              </div>
            </div>
          );
        })()}
      </div>
    );
  }

  // ---- About + self-update (pulls from the public repo) ----
  function AboutPanel({ onToast }) {
    const [v, setV] = React.useState(null);
    const [busy, setBusy] = React.useState(false);
    const [checking, setChecking] = React.useState(false);
    const [log, setLog] = React.useState(null);
    const load = () => { setV(null); fetch("/api/app/version").then((r) => r.json()).then(setV).catch(() => setV({ current: "?", error: "offline" })); };
    React.useEffect(() => { load(); }, []);
    const check = () => {
      setChecking(true);
      fetch("/api/app/version").then((r) => r.json()).then((d) => {
        setV(d); setChecking(false);
        if (d.error) onToast({ type: "error", title: "Couldn't check", desc: "You may be offline." });
        else if (d.update_available) onToast({ type: "info", title: "Update available", desc: (d.latest || "") + " — click Update now." });
        else onToast({ type: "success", title: "You're on the latest version" });
      }).catch(() => { setChecking(false); onToast({ type: "error", title: "Couldn't check for updates", desc: "You may be offline." }); });
    };
    const update = () => {
      setBusy(true); setLog(["Updating…"]);
      fetch("/api/app/update", { method: "POST" }).then((r) => r.json()).then(({ job }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then((r) => r.json()).then((j) => {
          setLog(j.log || []);
          if (j.status === "done") { clearInterval(poll); onToast({ type: "success", title: "Updated — restarting…" }); setTimeout(() => location.reload(), 4000); }
          else if (j.status === "error") { clearInterval(poll); setBusy(false); onToast({ type: "error", title: "Update failed" }); }
        }).catch(() => { clearInterval(poll); setTimeout(() => location.reload(), 4000); }), 1500);
      }).catch(() => { setBusy(false); onToast({ type: "error", title: "Couldn't start update" }); });
    };
    return (
      <div style={{ textAlign: "center", paddingTop: 24 }}>
        <window.HermesGlyph size={56} />
        <div style={{ fontWeight: 700, fontSize: 20, marginTop: 14 }}>Hermes — Simple Chat</div>
        <div style={{ color: "var(--text-3)", marginTop: 4 }}>Version {v ? v.current : "…"} · MIT License</div>
        {v && v.update_available ? (
          <div style={{ marginTop: 18 }}>
            <div style={{ color: "var(--accent-deep)", fontSize: 13.5, marginBottom: 10 }}>↑ A new version is available{v.latest ? " (" + v.latest + ")" : ""}.</div>
            <button className="btn btn-primary" disabled={busy} onClick={update}>{busy ? "Updating…" : "Update now"}</button>
          </div>
        ) : (
          <div style={{ marginTop: 18 }}>
            {v && !v.error && <div style={{ color: "var(--green)", fontSize: 13.5, marginBottom: 10 }}>You're on the latest version.</div>}
            {v && v.error && <div style={{ color: "var(--text-3)", fontSize: 13.5, marginBottom: 10 }}>Couldn't reach GitHub to check.</div>}
            <button className="btn btn-outline" disabled={checking} onClick={check}>{checking ? "Checking…" : "Check for updates"}</button>
          </div>
        )}
        {log && <pre style={{ marginTop: 14, maxHeight: 160, overflow: "auto", background: "#0c0c10", color: "#cfe", padding: 12, borderRadius: 10, fontSize: 12, whiteSpace: "pre-wrap", textAlign: "left" }}>{log.join("\n")}</pre>}
      </div>
    );
  }

  // ---- Remote access: open a public link to this UI (tunnel + token gate) ----
  function RemotePanel({ onToast }) {
    const [st, setSt] = React.useState(null);
    const [busy, setBusy] = React.useState(false);
    const [provider, setProvider] = React.useState("cloudflared");
    const [instLog, setInstLog] = React.useState(null);
    const qrRef = React.useRef(null);
    const load = () => fetch("/api/share/status").then((r) => r.json()).then(setSt).catch(() => {});
    React.useEffect(() => { load(); }, []);
    React.useEffect(() => {
      if (!qrRef.current) return;
      if (st && st.link && window.qrcode) {
        try {
          const qr = window.qrcode(0, "M"); qr.addData(st.link); qr.make();
          qrRef.current.innerHTML = qr.createImgTag(4, 0);
          const img = qrRef.current.querySelector("img");   // force it to fit the box (long tokens make big QRs)
          if (img) { img.style.width = "100%"; img.style.height = "100%"; img.style.display = "block"; img.style.imageRendering = "pixelated"; }
        } catch (e) { qrRef.current.innerHTML = ""; }
      } else { qrRef.current.innerHTML = ""; }
    }, [st && st.link]);

    const start = () => {
      setBusy(true);
      fetch("/api/share/start", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ provider }) })
        .then((r) => r.json()).then((d) => {
          setBusy(false);
          if (d.error) onToast({ type: "error", title: d.needs_install ? "Install cloudflared first" : "Couldn't start", desc: d.error });
          else onToast({ type: "success", title: "Public link is live" });
          load();
        }).catch((e) => { setBusy(false); onToast({ type: "error", title: String(e) }); });
    };
    const stop = () => { setBusy(true); fetch("/api/share/stop", { method: "POST" }).then(() => { setBusy(false); load(); onToast({ type: "info", title: "Sharing stopped" }); }); };
    const copy = () => { if (st && st.link) { navigator.clipboard && navigator.clipboard.writeText(st.link); onToast({ type: "success", title: "Link copied" }); } };
    const install = () => {
      setInstLog(["Installing cloudflared… (this can take a minute)"]);
      fetch("/api/share/install", { method: "POST" }).then((r) => r.json()).then(({ job }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then((r) => r.json()).then((j) => {
          setInstLog(j.log || []);
          if (j.status === "done" || j.status === "error") { clearInterval(poll); load(); onToast({ type: j.status === "done" ? "success" : "error", title: "cloudflared " + j.status }); }
        }), 1500);
      });
    };

    if (!st) return <div><h3>Remote access</h3><p style={{ color: "var(--text-3)" }}>Checking…</p></div>;
    const active = st.active;
    return (
      <div>
        <h3 style={{ marginBottom: 6 }}>Remote access</h3>
        <p style={{ fontSize: 13.5, color: "var(--text-3)", marginTop: 0 }}>
          Create a public link so you (or anyone you send it to) can open this chat from a phone or any browser, anywhere.
        </p>
        <div style={{ display: "flex", gap: 9, alignItems: "flex-start", background: "var(--field-bg-2)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 12px", margin: "12px 0 16px" }}>
          <I.AlertTriangle size={16} style={{ color: "var(--accent-deep)", flex: "0 0 auto", marginTop: 1 }} />
          <div style={{ fontSize: 12.5, color: "var(--text-2)", lineHeight: 1.5 }}>
            Anyone with the link can use this agent <strong>and the API key behind it</strong>. The link carries a secret
            access key — only people you give the full link to can get in. Hit <strong>Stop sharing</strong> when done.
          </div>
        </div>

        {active ? (
          <div>
            <label className="field-label">Public link <span style={{ color: "var(--text-3)", fontWeight: 400 }}>· {st.provider}</span></label>
            <div style={{ display: "flex", gap: 8 }}>
              <input className="field" value={st.link} readOnly onFocusCapture={(e) => e.target.select()} style={{ fontSize: 13 }} />
              <button className="btn btn-primary" onClick={copy}><I.Copy size={15} /> Copy</button>
            </div>
            <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 16 }}>
              <div ref={qrRef} style={{ width: 140, height: 140, flex: "0 0 140px", boxSizing: "border-box", background: "#fff", padding: 8, borderRadius: 10, border: "1px solid var(--border)", overflow: "hidden" }} />
              <div style={{ flex: 1, minWidth: 0, fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                Scan with a phone camera to open it there.<br />
                The link stops working the moment you stop sharing.
              </div>
            </div>
            <button className="btn btn-danger" style={{ marginTop: 20 }} disabled={busy} onClick={stop}><I.X size={15} /> Stop sharing</button>
          </div>
        ) : (
          <div>
            <label className="field-label">Method</label>
            <div className="segmented" style={{ marginBottom: 14 }}>
              <button className={provider === "cloudflared" ? "active" : ""} onClick={() => setProvider("cloudflared")}>Cloudflare (instant)</button>
              <button className={provider === "tailscale" ? "active" : ""} disabled={!st.tailscale} onClick={() => setProvider("tailscale")}>Tailscale Funnel</button>
            </div>
            {provider === "cloudflared" && !st.cloudflared ? (
              <div>
                <p style={{ fontSize: 13, color: "var(--text-3)" }}>This method needs <code>cloudflared</code> (free, no account).</p>
                <button className="btn btn-primary" onClick={install}><I.Download size={15} /> Install cloudflared</button>
                {instLog && <pre style={{ marginTop: 12, maxHeight: 180, overflow: "auto", background: "#0c0c10", color: "#cfe", padding: 12, borderRadius: 10, fontSize: 12, whiteSpace: "pre-wrap" }}>{instLog.join("\n")}</pre>}
              </div>
            ) : (
              <button className="btn btn-primary" disabled={busy} onClick={start}><I.Share size={15} /> {busy ? "Starting…" : "Create public link"}</button>
            )}
            {provider === "tailscale" && <p style={{ fontSize: 12.5, color: "var(--text-3)", marginTop: 10 }}>Uses your Tailscale tailnet. Needs Funnel enabled for this machine in the Tailscale admin (HTTPS + the “funnel” node attribute).</p>}
          </div>
        )}
      </div>
    );
  }

  function Settings({ s, set, theme, onTheme, onClose, onDeleteAll, onImport, onExportAll, defaultModel, onDefaultModel, onToast }) {
    const [tab, setTab] = useState("general");

    return (
      <Modal onClose={onClose} className="settings-modal" width={860} labelledBy="set-h">
        <div className="settings-layout">
          <nav className="settings-nav">
            <div className="nav-h" id="set-h">Settings</div>
            {TABS.map((t) => (
              <button key={t.id} className={"settings-tab" + (tab === t.id ? " active" : "")} onClick={() => setTab(t.id)}>
                {React.createElement(I[t.icon], { size: 17 })}<span className="lbl">{t.label}</span>
              </button>
            ))}
          </nav>

          <div className="settings-content">
            <button className="x-btn" style={{ position: "absolute", right: 14, top: 14 }} aria-label="Close" onClick={onClose}><I.X size={18} /></button>

            {tab === "general" && (
              <div>
                <h3 style={{ marginBottom: 18 }}>General</h3>
                <Row t="Theme" d="Light, dark, or follow your system.">
                  <Segmented value={theme} onChange={onTheme} options={[
                    { value: "light", label: "Light" }, { value: "dark", label: "Dark" }, { value: "system", label: "System" }]} />
                </Row>
                <div className="set-row" style={{ display: "block" }}>
                  <div className="rl"><div className="t">Accent color</div><div className="d">Hover a color to preview it across the app, click to apply.</div></div>
                  <AccentPicker value={s.accent} onPick={(hex) => set("accent", hex)} />
                </div>
                <Row t="Reduce motion" d="Turn off animations, transitions & easter eggs.">
                  <Switch on={s.reduceMotion} onChange={(v) => set("reduceMotion", v)} label="Reduce motion" />
                </Row>
                <Row t="Chat font size" d="Comfortable reading size.">
                  <Segmented value={s.fontSize} onChange={(v) => set("fontSize", v)} options={[
                    { value: "sm", label: "Small" }, { value: "md", label: "Default" }, { value: "lg", label: "Large" }]} />
                </Row>
                <Row t="Show avatars" d="Display the model icon on each reply.">
                  <Switch on={s.avatars} onChange={(v) => set("avatars", v)} label="Show avatars" />
                </Row>
                <Row t="Render LaTeX" d="Format math with KaTeX-style typesetting.">
                  <Switch on={s.latex} onChange={(v) => set("latex", v)} label="Render LaTeX" />
                </Row>
                <Row t="Render code blocks" d="Syntax-highlight fenced code.">
                  <Switch on={s.codeBlocks} onChange={(v) => set("codeBlocks", v)} label="Render code" />
                </Row>
                <Row t="Desktop shortcut" d="Add an AgentBay icon to your Desktop and apps menu — click it to open AgentBay, no terminal.">
                  <button className="btn btn-outline" onClick={() => {
                    fetch("/api/shortcut", { method: "POST" }).then((r) => r.json()).then((d) => {
                      onToast(d.ok ? { type: "success", title: "Shortcut added", desc: "Look for AgentBay on your Desktop / apps menu." }
                                   : { type: "error", title: "Couldn't add shortcut", desc: d.error || "" });
                    }).catch(() => onToast({ type: "error", title: "Couldn't add shortcut" }));
                  }}><I.Download size={15} /> Add to Desktop</button>
                </Row>
              </div>
            )}

            {tab === "interface" && (
              <div>
                <h3 style={{ marginBottom: 18 }}>Interface</h3>
                <Row t="Collapse sidebar by default" d="Start with a slim rail.">
                  <Switch on={s.collapseDefault} onChange={(v) => set("collapseDefault", v)} label="Collapse sidebar" />
                </Row>
                <Row t="Message style" d="Chat bubbles or full-width blocks.">
                  <Segmented value={s.bubbles ? "bubbles" : "blocks"} onChange={(v) => set("bubbles", v === "bubbles")} options={[
                    { value: "bubbles", label: "Bubbles" }, { value: "blocks", label: "Blocks" }]} />
                </Row>
                <Row t="Message timestamps" d="Show the time beside each reply.">
                  <Switch on={s.timestamps} onChange={(v) => set("timestamps", v)} label="Timestamps" />
                </Row>
                <Row t="Auto-scroll while streaming" d="Follow the reply as it generates.">
                  <Switch on={s.autoScroll} onChange={(v) => set("autoScroll", v)} label="Auto-scroll" />
                </Row>
                <Row t="Suggested follow-ups" d="After each reply, suggest a few relevant questions to ask next.">
                  <Switch on={s.followups} onChange={(v) => set("followups", v)} label="Follow-ups" />
                </Row>
                <Row t="Agents (experimental)" d="Named personas you can pick per chat. Work in progress — off by default.">
                  <Switch on={s.agentsEnabled} onChange={(v) => set("agentsEnabled", v)} label="Agents" />
                </Row>
                <div className="set-section" style={{ marginTop: 24 }}>
                  <div className="sec-title">Agent transparency</div>
                  <Row t="Show the agent's thinking" d="When the model reasons before answering, show that reasoning above the reply.">
                    <Switch on={s.showThinking} onChange={(v) => set("showThinking", v)} label="Show thinking" />
                  </Row>
                  <Row t="Show tool calls" d="List the tools the agent used (terminal, web, files…) for each reply.">
                    <Switch on={s.showTools} onChange={(v) => set("showTools", v)} label="Show tools" />
                  </Row>
                </div>
                <div className="set-section" style={{ marginTop: 24 }}>
                  <div className="sec-title">Default model</div>
                  <div className="set-row" style={{ borderTop: "none" }}>
                    <div className="rl"><div className="t">{(D.MODELS.find((m) => m.id === defaultModel) || {}).name || "No model selected"}</div>
                      <div className="d">New chats start with this model.</div></div>
                    <select className="mini-select" value={defaultModel} onChange={(e) => onDefaultModel(e.target.value)}>
                      {D.MODELS.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {tab === "personalization" && (
              <div>
                <h3 style={{ marginBottom: 6 }}>Personalization</h3>
                <p style={{ color: "var(--text-3)", fontSize: 13.5, marginTop: 0, marginBottom: 18 }}>A system prompt that's quietly included at the start of every chat.</p>
                <label className="field-label">System prompt</label>
                <textarea className="field" value={s.systemPrompt} onChange={(e) => set("systemPrompt", e.target.value)}
                  placeholder="e.g. You are concise and friendly. Prefer examples over theory." style={{ minHeight: 140 }} />
                <button className="btn btn-primary" style={{ marginTop: 14 }} onClick={() => onToast({ type: "success", title: "Personalization saved" })}>Save</button>
              </div>
            )}

            {tab === "connections" && <ProvidersPanel onToast={onToast} />}
            {tab === "integrations" && <IntegrationsPanel onToast={onToast} />}
            {tab === "agent" && <AgentPanel onToast={onToast} />}
            {tab === "remote" && <RemotePanel onToast={onToast} />}

            {tab === "data" && (
              <div>
                <h3 style={{ marginBottom: 18 }}>Data Controls</h3>
                <Row t="Export all chats" d="Download every conversation as JSON.">
                  <button className="btn btn-outline" onClick={onExportAll}><I.Download size={15} /> Export</button>
                </Row>
                <Row t="Import chats" d="Restore from a .json export.">
                  <button className="btn btn-outline" onClick={onImport}><I.Upload size={15} /> Import</button>
                </Row>
                <Row t="Delete all chats" d="Permanently remove every conversation.">
                  <button className="btn btn-danger" onClick={onDeleteAll}><I.Trash size={15} /> Delete all</button>
                </Row>
              </div>
            )}

            {tab === "about" && <AboutPanel onToast={onToast} />}
          </div>
        </div>
      </Modal>
    );
  }

  window.Settings = Settings;
})();


/* ==================== js/modals.jsx ==================== */
/* Hermes — modals.jsx : search, popovers, share, tags, delete, export, import, tour, notes, workspace */
(function () {
  const { useState, useEffect, useRef } = React;
  const I = window.Icons;
  const { Modal, ModalHead, Popover, Switch, relTime } = window.UI;
  const D = window.HermesData;

  /* ---------- S5 Search ---------- */
  function highlight(text, q) {
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return text;
    return [text.slice(0, i), <mark key="m">{text.slice(i, i + q.length)}</mark>, text.slice(i + q.length)];
  }

  function SearchModal({ sessions, onClose, onOpenChat, onNewChat, onOpenSettings }) {
    const [q, setQ] = useState("");
    const [cursor, setCursor] = useState(0);
    const inputRef = useRef(null);
    useEffect(() => { inputRef.current && inputRef.current.focus(); }, []);

    const chatMatches = q ? sessions.filter((s) => s.title.toLowerCase().includes(q.toLowerCase())).slice(0, 20) : sessions.slice(0, 6);
    const msgMatches = q ? sessions.filter((s) => s.messages.some((m) => m.content.toLowerCase().includes(q.toLowerCase()))).slice(0, 8) : [];
    const items = [
      ...chatMatches.map((s) => ({ type: "chat", s })),
      ...msgMatches.map((s) => ({ type: "msg", s })),
    ];
    const showSuggest = q && items.length === 0;

    const choose = (it) => {
      if (it.type === "chat" || it.type === "msg") onOpenChat(it.s.id);
      onClose();
    };
    const onKey = (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setCursor((c) => Math.min(c + 1, items.length - 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
      else if (e.key === "Enter" && items[cursor]) { e.preventDefault(); choose(items[cursor]); }
    };

    return (
      <Modal onClose={onClose} className="search-modal" width={600}>
        <div className="search-input-wrap">
          <I.Search size={20} style={{ color: "var(--text-3)" }} />
          <input ref={inputRef} value={q} onChange={(e) => { setQ(e.target.value); setCursor(0); }} onKeyDown={onKey}
            placeholder="Search chats and messages…" aria-label="Search" />
          <span className="kbd-key">ESC</span>
        </div>
        <div className="search-results">
          {chatMatches.length > 0 && (
            <div>
              <div className="search-group-h">Chats</div>
              {chatMatches.map((s, i) => (
                <div key={s.id} className={"search-res" + (cursor === i ? " cursor" : "")} onClick={() => choose({ type: "chat", s })} onMouseEnter={() => setCursor(i)}>
                  <span className="ic"><I.BookOpen size={16} /></span>
                  <div className="body"><div className="ttl">{highlight(s.title, q)}</div><div className="snip">{relTime(s.updated)} · {window.Chat.modelMeta(s.model).name}</div></div>
                </div>
              ))}
            </div>
          )}
          {msgMatches.length > 0 && (
            <div>
              <div className="search-group-h">Messages</div>
              {msgMatches.map((s, i) => {
                const idx = chatMatches.length + i;
                const hit = s.messages.find((m) => m.content.toLowerCase().includes(q.toLowerCase()));
                const snippet = hit ? hit.content.replace(/[#*`>]/g, "").slice(0, 90) : "";
                return (
                  <div key={s.id} className={"search-res" + (cursor === idx ? " cursor" : "")} onClick={() => choose({ type: "msg", s })} onMouseEnter={() => setCursor(idx)}>
                    <span className="ic"><I.FileText size={16} /></span>
                    <div className="body"><div className="ttl">{s.title}</div><div className="snip">{highlight(snippet, q)}</div></div>
                  </div>
                );
              })}
            </div>
          )}
          {showSuggest && (
            <div>
              <div className="search-group-h">Suggestions</div>
              <div className="search-res" onClick={() => { onNewChat(); onClose(); }}><span className="ic"><I.Plus size={16} /></span><div className="body"><div className="ttl">Start a new chat</div></div></div>
              <div className="search-res" onClick={() => { onClose(); onOpenSettings(); }}><span className="ic"><I.Settings size={16} /></span><div className="body"><div className="ttl">Open settings</div></div></div>
            </div>
          )}
        </div>
        <div className="search-foot">
          <span><span className="kbd-key">↑</span> <span className="kbd-key">↓</span> navigate</span>
          <span><span className="kbd-key">↵</span> open</span>
          <span><span className="kbd-key">esc</span> close</span>
        </div>
      </Modal>
    );
  }

  /* ---------- S6 User menu ---------- */
  function UserMenu({ anchorRef, user, theme, onClose, onSettings, onShortcuts, onAbout, onTheme, onSignOut }) {
    return (
      <Popover anchorRef={anchorRef} onClose={onClose} side="top" align="left" width={250} className="">
        <div className="pop-head">
          <span className="avatar">{user.initials}</span>
          <div><div style={{ fontWeight: 650, fontSize: 14 }}>{user.name}</div><div style={{ fontSize: 12.5, color: "var(--text-3)" }}>{user.email}</div></div>
        </div>
        <div className="pop-divider" />
        <button className="pop-item" onClick={() => { onClose(); onSettings(); }}><span className="ic"><I.Settings size={17} /></span> Settings</button>
        <button className="pop-item" onClick={() => { onClose(); onShortcuts(); }}><span className="ic"><I.Keyboard size={17} /></span> Keyboard shortcuts <span className="kbd">⌘/</span></button>
        <button className="pop-item" onClick={() => { onClose(); onAbout(); }}><span className="ic"><I.Info size={17} /></span> About</button>
        <div className="pop-divider" />
        <button className="pop-item" onClick={() => onTheme(theme === "dark" ? "light" : "dark")}>
          <span className="ic">{theme === "dark" ? <I.Sun size={17} /> : <I.Moon size={17} />}</span>
          Switch to {theme === "dark" ? "light" : "dark"}
        </button>
        <div className="pop-divider" />
        <button className="pop-item danger" onClick={() => { onClose(); onSignOut(); }}><span className="ic"><I.LogOut size={17} /></span> Sign out</button>
      </Popover>
    );
  }

  /* ---------- chat row context menu ---------- */
  function ChatMenu({ anchorRef, session, onClose, onRename, onPin, onArchive, onShare, onExport, onTag, onDelete }) {
    return (
      <Popover anchorRef={anchorRef} onClose={onClose} align="left" width={210}>
        <button className="pop-item" onClick={() => { onClose(); onRename(session); }}><span className="ic"><I.Pencil size={16} /></span> Rename</button>
        <button className="pop-item" onClick={() => { onClose(); onPin(session); }}><span className="ic"><I.Pin size={16} /></span> {session.pinned ? "Unpin" : "Pin"}</button>
        <button className="pop-item" onClick={() => { onClose(); onTag(session); }}><span className="ic"><I.Tag size={16} /></span> Tags</button>
        <button className="pop-item" onClick={() => { onClose(); onExport(session); }}><span className="ic"><I.Download size={16} /></span> Export</button>
        <button className="pop-item" onClick={() => { onClose(); onArchive(session); }}><span className="ic"><I.Archive size={16} /></span> Archive</button>
        <div className="pop-divider" />
        <button className="pop-item danger" onClick={() => { onClose(); onDelete(session); }}><span className="ic"><I.Trash size={16} /></span> Delete</button>
      </Popover>
    );
  }

  /* ---------- export dropdown ---------- */
  function ExportMenu({ anchorRef, onClose, onPick }) {
    const fmts = [["Markdown", "md"], ["JSON", "json"], ["Plain text", "txt"], ["HTML", "html"]];
    return (
      <Popover anchorRef={anchorRef} onClose={onClose} align="right" width={180}>
        {fmts.map(([label, f]) => (
          <button key={f} className="pop-item" onClick={() => { onClose(); onPick(f, label); }}><span className="ic"><I.FileText size={16} /></span> {label}</button>
        ))}
      </Popover>
    );
  }

  /* ---------- S8 keyboard shortcuts ---------- */
  function ShortcutsModal({ onClose }) {
    const rows = [
      ["⌘ K", "Search"], ["⌘ N", "New chat"], ["⌘ B", "Toggle sidebar"], ["⌘ /", "Focus composer / shortcuts"],
      ["Enter", "Send message"], ["Shift + Enter", "New line"], ["Esc", "Close modal"],
    ];
    return (
      <Modal onClose={onClose} width={460} labelledBy="kb-h">
        <ModalHead title="Keyboard shortcuts" onClose={onClose} id="kb-h" />
        <div className="modal-body">
          {rows.map(([k, a]) => (
            <div key={a} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid var(--border)" }}>
              <span style={{ fontSize: 14 }}>{a}</span>
              <span style={{ display: "flex", gap: 5 }}>{k.split(" ").map((p, i) => p === "+" ? <span key={i} style={{ color: "var(--text-faint)" }}>+</span> : <span key={i} className="kbd-key" style={{ padding: "0 7px", height: 22 }}>{p}</span>)}</span>
            </div>
          ))}
        </div>
      </Modal>
    );
  }

  /* ---------- S9 share ---------- */
  function ShareModal({ session, onClose, onToast }) {
    const [shared, setShared] = useState(false);
    const [incAtt, setIncAtt] = useState(true);
    const [incSys, setIncSys] = useState(false);
    const link = "https://hermes.app/s/" + session.id + "x" + Math.random().toString(36).slice(2, 7);
    return (
      <Modal onClose={onClose} width={460} labelledBy="sh-h">
        <ModalHead title="Share chat" onClose={onClose} id="sh-h" />
        <div className="modal-body">
          <p style={{ marginTop: 0, color: "var(--text-2)", fontSize: 14 }}>Anyone with the link can view a read-only copy of <strong>{session.title}</strong>.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, margin: "8px 0 16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid var(--border)" }}>
              <span style={{ fontSize: 14 }}>Include attachments</span><Switch on={incAtt} onChange={setIncAtt} label="Attachments" />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderTop: "1px solid var(--border)" }}>
              <span style={{ fontSize: 14 }}>Include system prompt</span><Switch on={incSys} onChange={setIncSys} label="System prompt" />
            </div>
          </div>
          {!shared ? (
            <button className="btn btn-primary btn-full" onClick={() => { setShared(true); onToast({ type: "success", title: "Share link created" }); }}><I.Share size={16} /> Create share link</button>
          ) : (
            <div className="anim-fadein">
              <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <div className="qr"><I.QrCode size={88} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input className="field" value={link} readOnly style={{ fontSize: 13 }} />
                    <button className="btn btn-primary" onClick={() => { navigator.clipboard && navigator.clipboard.writeText(link); onToast({ type: "success", title: "Link copied" }); }}><I.Copy size={15} /></button>
                  </div>
                  <button onClick={() => { setShared(false); onToast({ type: "info", title: "Sharing stopped" }); }} style={{ color: "var(--red)", fontSize: 13, marginTop: 12 }}>Stop sharing</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    );
  }

  /* ---------- S14 tags ---------- */
  function TagModal({ session, allTags, onClose, onSave, onToast }) {
    const [sel, setSel] = useState(session.tags || []);
    const [tags, setTags] = useState(allTags);
    const [nw, setNw] = useState("");
    const toggle = (t) => setSel((x) => x.includes(t) ? x.filter((y) => y !== t) : [...x, t]);
    const add = () => { const t = nw.trim().toLowerCase(); if (t && !tags.includes(t)) { setTags([...tags, t]); setSel([...sel, t]); } setNw(""); };
    return (
      <Modal onClose={onClose} width={440} labelledBy="tag-h">
        <ModalHead title="Tags" onClose={onClose} id="tag-h" />
        <div className="modal-body">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            {tags.map((t) => <button key={t} className={"tag-chip" + (sel.includes(t) ? " sel" : "")} onClick={() => toggle(t)}>{sel.includes(t) && <I.Check size={13} />}{t}</button>)}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input className="field" value={nw} onChange={(e) => setNw(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} placeholder="Create a tag…" />
            <button className="btn btn-ghost" onClick={add}>Add</button>
          </div>
        </div>
        <div className="modal-foot">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={() => { onSave(sel); onToast({ type: "success", title: "Tags updated" }); }}>Save</button>
        </div>
      </Modal>
    );
  }

  /* ---------- S15 delete confirm ---------- */
  function DeleteModal({ title, name, body, requireType, onClose, onConfirm }) {
    const [txt, setTxt] = useState("");
    const ok = !requireType || txt === name;
    return (
      <Modal onClose={onClose} width={420} labelledBy="del-h">
        <div className="modal-body" style={{ textAlign: "center", paddingTop: 26 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(217,83,79,.12)", color: "var(--red)", display: "grid", placeItems: "center", margin: "0 auto 14px" }}><I.AlertTriangle size={24} /></div>
          <h2 id="del-h" style={{ margin: "0 0 6px", fontSize: 18 }}>{title}</h2>
          <p style={{ color: "var(--text-2)", fontSize: 14, margin: 0 }}>{body}</p>
          {requireType && (
            <div style={{ marginTop: 16, textAlign: "left" }}>
              <label className="field-label">Type <strong>{name}</strong> to confirm</label>
              <input className="field" value={txt} onChange={(e) => setTxt(e.target.value)} placeholder={name} />
            </div>
          )}
        </div>
        <div className="modal-foot">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-danger" disabled={!ok} onClick={onConfirm}>Delete</button>
        </div>
      </Modal>
    );
  }

  /* ---------- S12 new folder ---------- */
  function FolderModal({ onClose, onCreate }) {
    const [name, setName] = useState("");
    const colors = ["#d9a36b", "#4a9e6a", "#4a7fd9", "#b06fd9", "#d9534f", "#d9b84a", "#46b3a9", "#8a8a8a"];
    const [color, setColor] = useState(colors[0]);
    return (
      <Modal onClose={onClose} width={420} labelledBy="fld-h">
        <ModalHead title="New folder" onClose={onClose} id="fld-h" />
        <div className="modal-body">
          <label className="field-label">Name</label>
          <input className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Work" autoFocus />
          <label className="field-label" style={{ marginTop: 16 }}>Color</label>
          <div className="swatches">
            {colors.map((c) => <div key={c} className={"swatch" + (color === c ? " sel" : "")} style={{ background: c }} onClick={() => setColor(c)} />)}
          </div>
        </div>
        <div className="modal-foot">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" disabled={!name.trim()} onClick={() => onCreate({ name: name.trim(), color })}>Create</button>
        </div>
      </Modal>
    );
  }

  /* ---------- S17 import ---------- */
  function ImportModal({ onClose, onToast, onImport }) {
    const [parsed, setParsed] = useState(null);
    const [err, setErr] = useState("");
    const fileRef = useRef(null);
    const readFile = (file) => {
      if (!file) return;
      const fr = new FileReader();
      fr.onload = () => {
        try {
          const data = JSON.parse(String(fr.result));
          const arr = Array.isArray(data) ? data : Array.isArray(data.sessions) ? data.sessions : (data.messages ? [data] : []);
          const clean = arr.filter((s) => s && Array.isArray(s.messages)).map((s) => ({
            id: "s" + Math.random().toString(36).slice(2, 9), title: s.title || "Imported chat",
            model: s.model || "", group: "Today", tags: s.tags || [], pinned: false,
            updated: Date.now(), messages: s.messages,
          }));
          if (!clean.length) { setErr("No valid chats found in that file."); return; }
          setErr(""); setParsed(clean);
        } catch (e) { setErr("That doesn't look like a valid .json export."); }
      };
      fr.readAsText(file);
    };
    return (
      <Modal onClose={onClose} width={460} labelledBy="imp-h">
        <ModalHead title="Import chats" onClose={onClose} id="imp-h" />
        <div className="modal-body">
          <input ref={fileRef} type="file" accept=".json,application/json" style={{ display: "none" }}
            onChange={(e) => readFile(e.target.files && e.target.files[0])} />
          {!parsed ? (
            <div onClick={() => fileRef.current && fileRef.current.click()}
              onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); readFile(e.dataTransfer.files && e.dataTransfer.files[0]); }}
              style={{ border: "2px dashed var(--border-strong)", borderRadius: 12, padding: "40px 20px", textAlign: "center", cursor: "pointer", color: "var(--text-3)" }}>
              <I.Upload size={28} style={{ marginBottom: 10 }} />
              <div style={{ fontWeight: 600, color: "var(--text)" }}>Drop a .json export here</div>
              <div style={{ fontSize: 13, marginTop: 4 }}>or click to browse</div>
              {err && <div style={{ fontSize: 13, marginTop: 12, color: "var(--danger, #d9534f)" }}>{err}</div>}
            </div>
          ) : (
            <div className="anim-fadein">
              <div style={{ fontSize: 13.5, color: "var(--text-2)", marginBottom: 10 }}>Found {parsed.length} chat{parsed.length === 1 ? "" : "s"} to import:</div>
              {parsed.map((p, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 0", borderTop: "1px solid var(--border)" }}><I.BookOpen size={15} style={{ color: "var(--text-3)" }} />{p.title}</div>)}
            </div>
          )}
        </div>
        {parsed && (
          <div className="modal-foot">
            <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={() => { onImport && onImport(parsed); onClose(); onToast({ type: "success", title: "Imported " + parsed.length + " chat" + (parsed.length === 1 ? "" : "s") }); }}>Import {parsed.length} chat{parsed.length === 1 ? "" : "s"}</button>
          </div>
        )}
      </Modal>
    );
  }

  /* ---------- S23 changelog ---------- */
  const CHANGELOG_LATEST = "3.0.1";
  window.CHANGELOG_LATEST = CHANGELOG_LATEST;   // shared with the App IIFE (separate scope)
  function ChangelogModal({ onClose, onSeen }) {
    const [dontShow, setDontShow] = React.useState(false);
    const close = () => { onSeen && onSeen(dontShow ? "ALL" : CHANGELOG_LATEST); onClose(); };
    const entries = [
      { v: "3.0.1", d: "Refined the streaming animation & added a thinking mascot." },
      { v: "3.0.0", d: "Brand-new simplified interface for everyday chat." },
      { v: "2.8.4", d: "Faster search across chats and messages." },
      { v: "2.8.0", d: "Voice input with live waveform." },
      { v: "2.7.2", d: "Share links now include a QR code." },
    ];
    return (
      <Modal onClose={close} width={480} labelledBy="cl-h">
        <ModalHead title="What's new" onClose={close} id="cl-h" />
        <div className="modal-body">
          {entries.map((e) => (
            <div key={e.v} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: "1px solid var(--border)" }}>
              <span className="tag-mini" style={{ height: 18, alignSelf: "start" }}>{e.v}</span>
              <span style={{ fontSize: 14, color: "var(--text-2)" }}>{e.d}</span>
            </div>
          ))}
        </div>
        <div className="modal-foot" style={{ justifyContent: "space-between" }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-3)", cursor: "pointer" }}><input type="checkbox" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} /> Don't show again</label>
          <button className="btn btn-primary" onClick={close}>Got it</button>
        </div>
      </Modal>
    );
  }

  window.Modals = { SearchModal, UserMenu, ChatMenu, ExportMenu, ShortcutsModal, ShareModal, TagModal, DeleteModal, FolderModal, ImportModal, ChangelogModal };
})();


/* ==================== js/views.jsx ==================== */
/* Hermes — views.jsx : Login, Notes, Workspace, Tour, ModelMenu */
(function () {
  const { useState, useEffect, useRef } = React;
  const I = window.Icons;
  const { Popover } = window.UI;
  const D = window.HermesData;

  /* ---------- S1 Login ---------- */
  function Login({ onLogin }) {
    const [pw, setPw] = useState("");
    const [err, setErr] = useState("");
    const [shake, setShake] = useState(false);
    const [loading, setLoading] = useState(false);
    const submit = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        // any non-empty password "works"; empty triggers the 401 shake
        if (pw.trim().length >= 1) { onLogin(); }
        else { setErr("Please enter your password."); setShake(true); setTimeout(() => setShake(false), 500); setLoading(false); }
      }, 550);
    };
    return (
      <div className="login-screen">
        <window.HermesGlyph size={320} style={{ position: "absolute", bottom: -60, right: -40 }} />
        <div className="login-bg-glyph" style={{ bottom: -60, right: -40 }} />
        <form className={"login-card" + (shake ? " shake" : "")} onSubmit={submit}>
          <div className="login-logo"><window.HermesGlyph size={56} /></div>
          <div className="login-h">Welcome to Hermes</div>
          <div className="login-sub">Sign in to continue</div>
          <input className="field" type="password" value={pw} autoFocus
            onChange={(e) => { setPw(e.target.value); setErr(""); }} placeholder="Password" aria-label="Password" />
          <div className="login-err">{err}</div>
          <button className="btn btn-primary btn-full" type="submit" disabled={loading}>
            {loading ? <span className="typing" style={{ height: 14 }}><span/><span/><span/></span> : "Continue"}
          </button>
          <div className="login-hint">Forgot password? Contact your admin.</div>
        </form>
      </div>
    );
  }

  /* ---------- model dropdown ---------- */
  const MM_CAP = 20;   // models shown per provider before "search to see the rest" (huge catalogs stay usable)
  function ModelMenu({ anchorRef, current, defaultModel, onClose, onPick, onSetDefault }) {
    const [q, setQ] = React.useState("");
    const all = D.MODELS;
    const ql = q.trim().toLowerCase();
    const matches = ql ? all.filter((m) => (m.name + " " + (m.desc || "")).toLowerCase().includes(ql)) : all;
    // group, preserving first-seen provider order
    const order = []; const gmap = {};
    matches.forEach((m) => { const g = m.group || "Models"; if (!gmap[g]) { gmap[g] = []; order.push(g); } gmap[g].push(m); });
    const curMeta = all.find((m) => m.id === current);
    const [open, setOpen] = React.useState({});
    const isOpen = (g) => {
      if (ql) return true;
      if (g in open) return open[g];
      if (curMeta && curMeta.group === g) return true;
      return (gmap[g] || []).length <= 3 || order.length === 1;
    };
    return (
      <Popover anchorRef={anchorRef} onClose={onClose} align="left" className="model-menu" width={368}>
        <div className="mm-search">
          <I.Search size={15} />
          <input autoFocus className="mm-input" placeholder="Search models…" value={q} onChange={(e) => setQ(e.target.value)} />
          {q && <button className="mm-clear" onClick={() => setQ("")} aria-label="Clear"><I.X size={14} /></button>}
        </div>
        <div className="mm-scroll">
          {order.length === 0 && <div className="mm-empty">No models match “{q}”.</div>}
          {order.map((g) => {
            const items = gmap[g]; const exp = isOpen(g);
            const GIc = I[(items[0] && items[0].icon)] || I.Bot;
            return (
              <div key={g} className="mm-group">
                <button className="mm-head" onClick={() => setOpen((o) => Object.assign({}, o, { [g]: !exp }))}>
                  <span className="mm-head-ic"><GIc size={15} /></span>
                  <span className="mm-head-name">{g}</span>
                  <span className="mm-head-count">{items.length}</span>
                  <span className="mm-head-chev">{exp ? <I.ChevronDown size={15} /> : <I.ChevronRight size={15} />}</span>
                </button>
                {exp && (ql ? items : items.slice(0, MM_CAP)).map((m) => {
                  const Ic = I[m.icon] || I.Bot;
                  return (
                    <button key={m.id} className={"model-opt" + (m.id === current ? " sel" : "")} onClick={() => { onClose(); onPick(m.id); }}>
                      <span className="mo-icon"><Ic size={16} /></span>
                      <span style={{ flex: 1, minWidth: 0 }}>
                        <span className="mo-name">{m.name}{m.id === defaultModel && <span className="tag-mini">Default</span>}</span>
                      </span>
                      {m.id === current && <span className="check"><I.Check size={17} /></span>}
                    </button>
                  );
                })}
                {exp && !ql && items.length > MM_CAP && (
                  <div className="mm-more">+{items.length - MM_CAP} more — type above to search them</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="pop-divider" />
        <button className="pop-item" style={{ fontSize: 13, color: "var(--text-2)" }} onClick={() => { onClose(); onSetDefault(current); }}>
          <span className="ic"><I.Pin size={15} /></span> Set current as default
        </button>
      </Popover>
    );
  }

  /* ---------- S10 Notes ---------- */
  function Notes({ onClose }) {
    const load = () => { try { return JSON.parse(localStorage.getItem("ab_notes") || "[]"); } catch (e) { return []; } };
    const [notes, setNotes] = React.useState(load);
    const [active, setActive] = React.useState(() => { const n = load(); return n.length ? n[0].id : null; });
    React.useEffect(() => { try { localStorage.setItem("ab_notes", JSON.stringify(notes)); } catch (e) {} }, [notes]);
    const note = notes.find((n) => n.id === active);
    const update = (body) => setNotes((ns) => ns.map((n) => n.id === active ? { ...n, body, title: (body.split("\n")[0] || "Untitled").replace(/^#+\s*/, "").slice(0, 40) || "Untitled" } : n));
    const addNote = () => { const id = Date.now(); setNotes((ns) => [{ id, title: "Untitled", body: "# Untitled\n\n", date: "Now" }, ...ns]); setActive(id); };
    return (
      <div className="overlay" style={{ padding: 0, alignItems: "stretch" }}>
        <div className="overlay-scrim" onClick={onClose} />
        <div className="modal" style={{ position: "relative", width: "min(1000px, 94vw)", height: "min(680px, 92vh)", maxHeight: "92vh", margin: "auto" }} onClick={(e) => e.stopPropagation()}>
          <div className="modal-head"><h2><I.Notebook size={18} style={{ verticalAlign: "-3px", marginRight: 8 }} />Notes</h2>
            <div style={{ display: "flex", gap: 8 }}><button className="btn btn-ghost" onClick={addNote}><I.Plus size={15} /> New note</button><button className="x-btn" onClick={onClose} aria-label="Close"><I.X size={18} /></button></div>
          </div>
          <div className="split">
            <div className="notes-list">
              {notes.map((n) => (
                <div key={n.id} className={"note-item" + (n.id === active ? " active" : "")} onClick={() => setActive(n.id)}>
                  <div className="nt">{n.title}</div>
                  <div className="ns">{n.body.replace(/[#*>-]/g, "").trim().slice(0, 50)}</div>
                  <div className="nd">{n.date}</div>
                </div>
              ))}
            </div>
            <div className="note-editor">
              {note ? (
                <div style={{ display: "flex" }}>
                  <textarea value={note.body} onChange={(e) => update(e.target.value)} spellCheck={false} style={{ flex: 1, borderRight: "1px solid var(--border)" }} />
                  <div className="md" style={{ flex: 1, padding: "22px 26px", overflowY: "auto" }} dangerouslySetInnerHTML={{ __html: D.renderMarkdown(note.body) }} />
                </div>
              ) : (
                <div style={{ display: "grid", placeItems: "center", height: "100%", color: "var(--text-3)", textAlign: "center", padding: 30 }}>
                  <div><I.Notebook size={34} style={{ marginBottom: 10 }} /><div>No notes yet.</div><div style={{ fontSize: 13, marginTop: 4 }}>Click “New note” to start one.</div></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- S24 onboarding tour ---------- */
  const TOUR_STEPS = [
    { sel: ".composer", title: "Ask anything", body: "Type your question here and press Enter. Shift+Enter adds a new line.", place: "top" },
    { sel: ".model-pill", title: "Pick a model", body: "Every model here runs through your agent — with tools (terminal, web, files) — using that model as its brain. You're never talking to a plain chatbot.", place: "bottom" },
    { sel: ".sb-new", title: "Your chats live here", body: "Start fresh with New Chat. Past conversations are grouped by date in the sidebar.", place: "right" },
    { sel: ".topbar .right .icon-btn", title: "Settings & more", body: "Open settings to change the theme, turn off animations, and more.", place: "bottom" },
  ];
  function Tour({ onDone }) {
    const [step, setStep] = useState(0);
    const [rect, setRect] = useState(null);
    const s = TOUR_STEPS[step];
    useEffect(() => {
      const el = document.querySelector(s.sel);
      if (el) { const r = el.getBoundingClientRect(); setRect({ top: r.top - 6, left: r.left - 6, width: r.width + 12, height: r.height + 12 }); }
      else setRect(null);
    }, [step]);
    if (!rect) return null;
    const cardStyle = {};
    if (s.place === "top") { cardStyle.left = Math.max(12, rect.left); cardStyle.bottom = window.innerHeight - rect.top + 10; }
    else if (s.place === "bottom") { cardStyle.left = Math.min(rect.left, window.innerWidth - 300); cardStyle.top = rect.top + rect.height + 10; }
    else if (s.place === "right") { cardStyle.left = rect.left + rect.width + 10; cardStyle.top = rect.top; }
    return (
      <div>
        <div className="tour-spot" style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }} />
        <div className="tour-card" style={cardStyle}>
          <h4>{s.title}</h4>
          <p>{s.body}</p>
          <div className="tour-foot">
            <div className="tour-dots">{TOUR_STEPS.map((_, i) => <i key={i} className={i === step ? "on" : ""} />)}</div>
            <div style={{ display: "flex", gap: 8 }}>
              {step < TOUR_STEPS.length - 1 && <button className="btn btn-ghost" style={{ padding: "6px 12px" }} onClick={onDone}>Skip</button>}
              <button className="btn btn-primary" style={{ padding: "6px 14px" }} onClick={() => step < TOUR_STEPS.length - 1 ? setStep(step + 1) : onDone()}>
                {step < TOUR_STEPS.length - 1 ? "Next" : "Done"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Onboarding gate: AgentBay needs a real agent to be more than a chatbot ----------
     Shows when no agent is detected on this machine. Guides install; if the user
     skips, it warns that AgentBay will act as a plain chatbot (no tools/terminal)
     and re-appears on the next launch until an agent is actually installed. */
  function OnboardingGate({ onInstalled, onSkip }) {
    const [agents, setAgents] = useState(null);   // null = checking
    const [busy, setBusy] = useState(null);        // agent id currently installing
    const [log, setLog] = useState("");
    const load = () => fetch("/api/agents").then((r) => r.json()).then((d) => {
      const list = d.agents || [];
      setAgents(list);
      if (list.some((a) => a.installed)) onInstalled && onInstalled();
      return list;
    }).catch(() => setAgents([]));
    useEffect(() => { load(); }, []);

    const install = (aid) => {
      setBusy(aid); setLog("Starting install of " + aid + "…\n");
      fetch("/api/install", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ agent: aid }) })
        .then((r) => r.json()).then(({ job }) => {
          if (!job) { setBusy(null); setLog("Could not start installer."); return; }
          const poll = setInterval(() => fetch("/api/install/status/" + job).then((r) => r.json()).then((st) => {
            setLog((st.log || []).join("\n"));
            if (st.status === "done" || st.status === "error") {
              clearInterval(poll); setBusy(null);
              load();   // flips to installed → onInstalled() closes the gate
            }
          }), 1200);
        }).catch(() => { setBusy(null); setLog("Install request failed."); });
    };

    if (agents === null) return null;                       // still checking — no flash
    if (agents.some((a) => a.installed)) return null;        // gate passed

    return (
      <div className="overlay" style={{ alignItems: "center" }}>
        <div className="overlay-scrim" />
        <div className="modal" style={{ position: "relative", width: "min(560px, 94vw)", margin: "auto", padding: 26 }} onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ display: "inline-flex", width: 44, height: 44 }}><window.HermesGlyph size={44} /></span>
            <div>
              <h2 style={{ margin: 0, fontSize: 20 }}>Welcome to AgentBay</h2>
              <div style={{ fontSize: 13, color: "var(--text-3)" }}>Let's connect a real agent first.</div>
            </div>
          </div>

          <div style={{ border: "1px solid var(--amber)", background: "color-mix(in srgb, var(--amber) 9%, transparent)", borderRadius: 11, padding: "11px 13px", margin: "14px 0", fontSize: 13.5, lineHeight: 1.5 }}>
            <b>No agent detected on this computer.</b> AgentBay is a front-end for an
            agent (Hermes). Without one, every model here is a <b>plain chatbot</b> —
            no terminal, no web, no files, no tools. Install an agent to unlock all of it.
          </div>

          {agents.map((a) => (
            <div key={a.agent} style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--border)", borderRadius: 11, padding: 13, marginTop: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 650 }}>{a.label}</div>
                <div style={{ fontSize: 12.5, color: "var(--text-3)" }}>{a.installed ? "✓ installed" : "not installed — one click to set up"}</div>
              </div>
              {!a.installed && (
                <button className="btn btn-primary" disabled={!!busy} onClick={() => install(a.agent)}>
                  {busy === a.agent ? "Installing…" : "Install"}
                </button>
              )}
            </div>
          ))}

          {log && <pre style={{ marginTop: 12, maxHeight: 160, overflow: "auto", background: "#0c0c10", color: "#cfe", padding: 12, borderRadius: 10, fontSize: 12, whiteSpace: "pre-wrap" }}>{log}</pre>}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18 }}>
            <a href="https://hermes-agent.nousresearch.com/docs/getting-started/quickstart" target="_blank" rel="noreferrer" style={{ fontSize: 12.5, color: "var(--accent-deep)" }}>What's an agent? →</a>
            <button className="btn btn-ghost" disabled={!!busy} onClick={onSkip} title="AgentBay will work as a plain chatbot until you install an agent">
              Skip — use as a chatbot
            </button>
          </div>
        </div>
      </div>
    );
  }

  window.Views = { Login, ModelMenu, Notes, Tour, OnboardingGate };
})();


/* ==================== js/hub.jsx : Projects + Agents (sub-agents) ==================== */
(function () {
  const I = window.Icons;
  const D = window.HermesData;
  const { useState, useRef } = React;
  const COLORS = ["#d97706", "#2563eb", "#dc2626", "#7c3aed", "#059669", "#db2777", "#0891b2"];
  const TEXT_RE = /\.(txt|md|markdown|csv|tsv|json|ya?ml|log|js|jsx|ts|tsx|py|rb|go|rs|java|c|h|cpp|cs|php|sh|sql|html?|css|xml|ini|toml|env)$|^text\//i;
  const fmtSize = (n) => n < 1024 ? n + " B" : n < 1048576 ? (n / 1024).toFixed(0) + " KB" : (n / 1048576).toFixed(1) + " MB";

  // Built-in personas (the portable subset of Claude Code subagents: a named
  // system prompt the user picks per chat — no autonomous tool use).
  const DEFAULT_AGENTS = [
    { id: "general", name: "General", description: "Helpful all-rounder for everyday questions.", system: "", model: "", color: "#6b7280" },
    { id: "coder", name: "Code Reviewer", description: "Reviews code for bugs, security & clarity.", system: "You are a meticulous senior code reviewer. Identify bugs, security issues, edge cases, and unclear naming. Cite specific lines when given code, and prefer concrete fixes over vague advice.", model: "", color: "#2563eb" },
    { id: "debugger", name: "Debugger", description: "Finds the root cause of errors, step by step.", system: "You are a systematic debugger. Form hypotheses, ask only for the minimal information you need, and reason step by step to the root cause before proposing a fix.", model: "", color: "#dc2626" },
    { id: "writer", name: "Writer", description: "Clear, concise prose and editing.", system: "You are a sharp editor. Write and revise for clarity and concision, prefer plain language, and keep the author's voice.", model: "", color: "#7c3aed" },
    { id: "analyst", name: "Data Analyst", description: "Explains data, writes correct SQL.", system: "You are a careful data analyst. Explain analyses plainly, write correct SQL, and always state your assumptions and caveats.", model: "", color: "#059669" },
  ];

  function Shell({ icon, title, onClose, headRight, children, width }) {
    return (
      <div className="overlay" style={{ padding: 0, alignItems: "stretch" }}>
        <div className="overlay-scrim" onClick={onClose} />
        <div className="modal" style={{ position: "relative", width: width || "min(1000px, 94vw)", height: "min(680px, 92vh)", maxHeight: "92vh", margin: "auto" }} onClick={(e) => e.stopPropagation()}>
          <div className="modal-head"><h2>{React.createElement(I[icon], { size: 18, style: { verticalAlign: "-3px", marginRight: 8 } })}{title}</h2>
            <div style={{ display: "flex", gap: 8 }}>{headRight}<button className="x-btn" onClick={onClose} aria-label="Close"><I.X size={18} /></button></div>
          </div>
          {children}
        </div>
      </div>
    );
  }

  // ---------- Projects: instructions + knowledge files; chats in a project use them ----------
  function Projects({ projects, setProjects, onClose, onToast, onStartChat }) {
    const [activeId, setActiveId] = useState(projects[0] ? projects[0].id : null);
    const fileRef = useRef(null);
    const proj = projects.find((p) => p.id === activeId);
    const upd = (patch) => setProjects((ps) => ps.map((p) => p.id === activeId ? { ...p, ...patch } : p));
    const add = () => { const id = "p" + Date.now().toString(36); setProjects((ps) => [{ id, name: "New project", instructions: "", files: [], color: COLORS[ps.length % COLORS.length] }, ...ps]); setActiveId(id); };
    const del = () => { if (proj) { setProjects((ps) => ps.filter((p) => p.id !== activeId)); setActiveId(null); onToast({ type: "info", title: "Project deleted" }); } };
    const [drag, setDrag] = useState(false);
    const addFiles = (list) => {
      const pid = activeId;
      Array.from(list || []).forEach((f) => {
        if (f.size > 25 * 1024 * 1024) { onToast({ type: "info", title: f.name + " skipped", desc: "Files must be under 25 MB." }); return; }
        const fr = new FileReader();
        fr.onload = () => {
          fetch("/api/extract", { method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: f.name, b64: String(fr.result) }) })
            .then((r) => r.json())
            .then((res) => {
              setProjects((ps) => ps.map((p) => p.id === pid ? { ...p, files: [...p.files, { name: f.name, size: fmtSize(f.size), text: res.text || "", note: res.note || "" }] } : p));
              if (!res.text) onToast({ type: "info", title: f.name + " added", desc: res.note || "stored — no text extracted" });
            })
            .catch(() => onToast({ type: "error", title: "Upload failed", desc: f.name }));
        };
        fr.readAsDataURL(f);   // base64 (handles any file type)
      });
    };
    const know = proj ? proj.files.reduce((n, f) => n + (f.text ? f.text.length : 0), 0) : 0;
    return (
      <Shell icon="Folder" title="Projects" onClose={onClose}
        headRight={<button className="btn btn-ghost" onClick={add}><I.Plus size={15} /> New project</button>}>
        <div className="split">
          <div className="notes-list">
            {projects.length === 0 && <div style={{ padding: "18px 14px", fontSize: 13, color: "var(--text-3)" }}>No projects yet.</div>}
            {projects.map((p) => (
              <div key={p.id} className={"note-item" + (p.id === activeId ? " active" : "")} onClick={() => setActiveId(p.id)}>
                <div className="nt" style={{ display: "flex", alignItems: "center", gap: 8 }}><I.Folder size={14} style={{ color: p.color }} />{p.name}</div>
                <div className="ns">{p.files.length} file{p.files.length === 1 ? "" : "s"} · {p.instructions ? "has instructions" : "no instructions"}</div>
              </div>
            ))}
          </div>
          <div className="note-editor" style={{ overflowY: "auto" }}>
            {!proj ? (
              <div style={{ display: "grid", placeItems: "center", height: "100%", color: "var(--text-3)", textAlign: "center", padding: 30 }}>
                <div><I.Folder size={34} style={{ marginBottom: 10 }} /><div>Create a project to give Hermes standing instructions and knowledge files.</div></div>
              </div>
            ) : (
              <div style={{ padding: "20px 24px", outline: drag ? "2px dashed var(--accent)" : "none", outlineOffset: -8, borderRadius: 12 }}
                onDragOver={(e) => { e.preventDefault(); if (!drag) setDrag(true); }}
                onDragLeave={(e) => { e.preventDefault(); setDrag(false); }}
                onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}>
                <input className="field" value={proj.name} onChange={(e) => upd({ name: e.target.value })} style={{ fontSize: 16, fontWeight: 650, marginBottom: 16 }} />
                <label className="field-label">Custom instructions</label>
                <textarea className="field" value={proj.instructions} onChange={(e) => upd({ instructions: e.target.value })}
                  placeholder="e.g. You are helping with the Acme mobile app. Always answer in the context of our React Native codebase and house style." style={{ minHeight: 110, marginBottom: 18 }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <label className="field-label" style={{ margin: 0 }}>Project knowledge {know > 0 && <span style={{ color: "var(--text-3)", fontWeight: 400 }}>(~{Math.round(know / 4)} tokens)</span>}</label>
                  <button className="btn btn-outline" style={{ padding: "5px 10px" }} onClick={() => fileRef.current && fileRef.current.click()}><I.Upload size={14} /> Add files</button>
                </div>
                <input ref={fileRef} type="file" multiple style={{ display: "none" }} onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }} />
                {proj.files.length === 0 ? (
                  <div style={{ border: "1px dashed var(--border-strong)", borderRadius: 10, padding: "18px", textAlign: "center", color: "var(--text-3)", fontSize: 13 }}>Drag files here, or click <strong>Add files</strong>. Any type — docs (.docx, .pdf, .xlsx, .pptx), code, .csv, .txt, images. The assistant reads their text.</div>
                ) : proj.files.map((f, i) => (
                  <div key={i} className="set-row" style={{ padding: "8px 0" }}>
                    <div className="rl" style={{ display: "flex", alignItems: "center", gap: 9 }}><I.FileText size={15} style={{ color: f.text ? "var(--text-3)" : "var(--text-faint)" }} /><div><div className="t">{f.name}</div><div className="d">{f.size}{f.note ? " · " + f.note : (f.text ? "" : "")}</div></div></div>
                    <button className="btn btn-ghost" style={{ padding: "4px 8px" }} onClick={() => upd({ files: proj.files.filter((_, j) => j !== i) })}><I.X size={14} /></button>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 8, marginTop: 22 }}>
                  <button className="btn btn-primary" onClick={() => onStartChat(proj.id)}><I.Pencil size={15} /> Start a chat in this project</button>
                  <button className="btn btn-ghost" style={{ color: "var(--red)" }} onClick={del}><I.Trash size={15} /> Delete</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Shell>
    );
  }

  // ---------- Agents: named persona presets (the portable subset of subagents) ----------
  function Agents({ agents, setAgents, models, onClose, onToast, onStartChat }) {
    const [activeId, setActiveId] = useState(agents[0] ? agents[0].id : null);
    const ag = agents.find((a) => a.id === activeId);
    const upd = (patch) => setAgents((as) => as.map((a) => a.id === activeId ? { ...a, ...patch } : a));
    const add = () => { const id = "a" + Date.now().toString(36); setAgents((as) => [...as, { id, name: "New agent", description: "", system: "", model: "", color: COLORS[as.length % COLORS.length] }]); setActiveId(id); };
    const del = () => { if (ag) { setAgents((as) => as.filter((a) => a.id !== activeId)); setActiveId(null); onToast({ type: "info", title: "Agent deleted" }); } };
    return (
      <Shell icon="Bot" title="Agents" onClose={onClose}
        headRight={<button className="btn btn-ghost" onClick={add}><I.Plus size={15} /> New agent</button>}>
        <div className="split">
          <div className="notes-list">
            {agents.map((a) => (
              <div key={a.id} className={"note-item" + (a.id === activeId ? " active" : "")} onClick={() => setActiveId(a.id)}>
                <div className="nt" style={{ display: "flex", alignItems: "center", gap: 8 }}><I.Bot size={14} style={{ color: a.color }} />{a.name}</div>
                <div className="ns">{a.description || "No description"}</div>
              </div>
            ))}
          </div>
          <div className="note-editor" style={{ overflowY: "auto" }}>
            {!ag ? (
              <div style={{ display: "grid", placeItems: "center", height: "100%", color: "var(--text-3)", textAlign: "center", padding: 30 }}>
                <div><I.Bot size={34} style={{ marginBottom: 10 }} /><div>Agents are named personas — a system prompt (and optional model) you pick per chat.</div></div>
              </div>
            ) : (
              <div style={{ padding: "20px 24px" }}>
                <input className="field" value={ag.name} onChange={(e) => upd({ name: e.target.value })} style={{ fontSize: 16, fontWeight: 650, marginBottom: 12 }} />
                <label className="field-label">When to use it</label>
                <input className="field" value={ag.description} onChange={(e) => upd({ description: e.target.value })} placeholder="Short description shown in the picker" style={{ marginBottom: 16 }} />
                <label className="field-label">System prompt</label>
                <textarea className="field" value={ag.system} onChange={(e) => upd({ system: e.target.value })}
                  placeholder="e.g. You are a meticulous code reviewer…" style={{ minHeight: 130, marginBottom: 16 }} />
                <label className="field-label">Model</label>
                <select className="mini-select" value={ag.model || ""} onChange={(e) => upd({ model: e.target.value })} style={{ marginBottom: 18 }}>
                  <option value="">Use the chat's current model</option>
                  {(models || []).map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
                <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                  <button className="btn btn-primary" onClick={() => onStartChat(ag.id)}><I.Pencil size={15} /> Start a chat with this agent</button>
                  <button className="btn btn-ghost" style={{ color: "var(--red)" }} onClick={del}><I.Trash size={15} /> Delete</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Shell>
    );
  }

  // ---- Skills: what the agent can do (self-created); flags newly added ones ----
  function Skills({ onClose }) {
    const [skills, setSkills] = useState(null);
    const seen = (() => { try { return new Set(JSON.parse(localStorage.getItem("ab_seen_skills") || "[]")); } catch (e) { return new Set(); } })();
    React.useEffect(() => {
      fetch("/api/skills").then((r) => r.json()).then((d) => {
        const list = d.skills || [];
        setSkills(list);
        setTimeout(() => { try { localStorage.setItem("ab_seen_skills", JSON.stringify(list.map((s) => s.name))); } catch (e) {} }, 1500);
      }).catch(() => setSkills([]));
    }, []);
    const isNew = (n) => !!(skills && seen.size > 0 && !seen.has(n));
    return (
      <Shell icon="Wand" title="Skills" onClose={onClose} width="min(760px, 94vw)">
        <div style={{ padding: "18px 24px", overflowY: "auto" }}>
          {!skills ? <div style={{ color: "var(--text-3)" }}>Loading…</div>
            : skills.length === 0 ? <div style={{ color: "var(--text-3)" }}>No skills yet. Your agent creates skills automatically as it learns new tasks.</div>
            : <div>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 12 }}>{skills.length} skills — your agent builds these from experience and reuses them.</div>
                {skills.map((s, i) => (
                  <div key={i} className="set-row" style={{ padding: "10px 0" }}>
                    <div className="rl" style={{ minWidth: 0 }}>
                      <div className="t" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {React.createElement(I.Wand || I.Sparkle, { size: 14, style: { color: "var(--accent-deep)" } })}{s.name}
                        {isNew(s.name) && <span className="tag-mini" style={{ background: "var(--accent-soft)", color: "var(--accent-ink)" }}>new</span>}
                      </div>
                      {s.description && <div className="d">{s.description}</div>}
                    </div>
                  </div>
                ))}
              </div>}
        </div>
      </Shell>
    );
  }

  window.Hub = { Projects, Agents, Skills, DEFAULT_AGENTS };
})();


/* ==================== tweaks-panel.jsx ==================== */

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-omelette-chrome=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">
          {children}
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});


/* ==================== js/tweaks.jsx ==================== */
/* Hermes — tweaks.jsx : designer Tweaks panel (accent / radius / density / motion) */
(function () {
  const { useEffect } = React;
  const { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakSlider } = window;

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#d9a36b",
    "corners": "default",
    "density": "regular",
    "animSpeed": 1
  }/*EDITMODE-END*/;

  const RADII = {
    sharp:   { r: "4px",  rlg: "7px",  rxl: "12px" },
    default: { r: "8px",  rlg: "14px", rxl: "22px" },
    round:   { r: "12px", rlg: "18px", rxl: "26px" },
  };
  const DENSITY = { compact: 14.5, regular: 15.5, comfy: 16.5 };

  function TweaksController() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    useEffect(() => {
      const root = document.documentElement.style;
      // accent is owned by Settings → Appearance, not this hidden dev panel
      const rad = RADII[t.corners] || RADII.default;
      root.setProperty("--r", rad.r); root.setProperty("--r-lg", rad.rlg); root.setProperty("--r-xl", rad.rxl);
      root.setProperty("--content-fs", (DENSITY[t.density] || 15.5) + "px");
      root.setProperty("--speed", String(t.animSpeed || 1));
    }, [t.accent, t.corners, t.density, t.animSpeed]);

    return (
      <TweaksPanel>
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent}
          options={["#d9a36b", "#46b3a9", "#5b7cfa", "#e0698a", "#6aa84f"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Shape & feel" />
        <TweakRadio label="Corners" value={t.corners} options={["sharp", "default", "round"]} onChange={(v) => setTweak("corners", v)} />
        <TweakRadio label="Density" value={t.density} options={["compact", "regular", "comfy"]} onChange={(v) => setTweak("density", v)} />
        <TweakSection label="Motion" />
        <TweakSlider label="Animation speed" value={t.animSpeed} min={0.5} max={2} step={0.1} unit="×" onChange={(v) => setTweak("animSpeed", v)} />
      </TweaksPanel>
    );
  }

  window.TweaksController = TweaksController;
})();


/* ==================== js/app.jsx ==================== */
/* Hermes — app.jsx : root orchestrator */
(function () {
  const { useState, useEffect, useRef, useCallback } = React;
  const I = window.Icons;
  const D = window.HermesData;
  const { Modal, ToastProvider, useToast, fireConfetti, useLocal } = window.UI;
  const { Thread, Composer, MicOverlay, Home, modelMeta } = window.Chat;
  const Mo = window.Modals;
  const V = window.Views;
  const Hub = window.Hub;

  const DEFAULT_SETTINGS = {
    reduceMotion: false, lang: "en", fontSize: "md", avatars: true, latex: true, codeBlocks: true,
    collapseDefault: false, bubbles: true, timestamps: false, autoScroll: true, followups: false,
    agentsEnabled: false, accent: "#d9a36b", systemPrompt: "", stt: "Whisper (local)", tts: "Browser (system)",
    showThinking: false, showTools: false,
  };
  function buildUser(name) {
    const nm = (name || "").trim();
    if (!nm) return { name: "User", initials: "U", role: "Local", email: "" };
    const w = nm.split(/\s+/);
    const initials = (w.length > 1 ? (w[0][0] + w[1][0]) : nm.slice(0, 2)).toUpperCase();
    return { name: nm, initials, role: "Local", email: "" };
  }
  const USER = buildUser("");
  const FONT_PX = { sm: 14.5, md: 15.5, lg: 17 };

  function uid() { return "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }

  function App() {
    const toast = useToast();
    const [loggedIn, setLoggedIn] = useLocal("hermes_logged", true);
    const [theme, setTheme] = useLocal("hermes_theme", "light");
    const [settings, setSettings] = useLocal("hermes_settings", DEFAULT_SETTINGS);
    const [sessions, setSessions] = useLocal("ab_sessions", []);
    const [activeId, setActiveId] = useState(null);

    // ---- server-side chat sync: every browser/device on this account shares chats.
    // The store lives with the AgentBay instance; we merge by id (newest `updated`
    // wins) and honour tombstones, so a teammate's chats show up and deletes stick.
    const syncSnap = useRef(new Map());      // id -> JSON(content w/o `updated`) at last sync
    const streamingSidRef = useRef(null);    // session with an in-flight turn — sync must never clobber it
    const syncReady = useRef(false);
    const sessionsLive = useRef(sessions);
    useEffect(() => { sessionsLive.current = sessions; }, [sessions]);
    const _sansUpd = (s) => { const c = Object.assign({}, s); delete c.updated; return JSON.stringify(c); };
    const _grpFor = (ts) => { const day = 864e5, d = Date.now() - (ts || Date.now()); return d < day ? "Today" : d < 2 * day ? "Yesterday" : d < 7 * day ? "Previous 7 Days" : d < 30 * day ? "Previous 30 Days" : "Older"; };
    const _normSession = (s) => {            // ensure synced chats have what the sidebar needs to render
      const out = Object.assign({ tags: [], pinned: false, messages: [] }, s);
      if (!out.group || D.GROUP_ORDER.indexOf(out.group) === -1) out.group = _grpFor(out.updated);
      return out;
    };
    const reconcileServer = useCallback((srv, del) => {
      const delSet = new Set(del || []);
      setSessions((local) => {
        const byId = new Map(local.map((s) => [s.id, s]));
        (srv || []).forEach((raw) => {
          const s = _normSession(raw);
          if (!s || !s.id || delSet.has(s.id)) return;
          if (s.id === streamingSidRef.current) return;   // never overwrite a session mid-stream (would drop the live reply)
          const loc = byId.get(s.id);
          if (!loc || (s.updated || 0) > (loc.updated || 0)) { byId.set(s.id, s); syncSnap.current.set(s.id, _sansUpd(s)); }
        });
        delSet.forEach((id) => { byId.delete(id); syncSnap.current.delete(id); });
        return Array.from(byId.values()).map(_normSession).sort((a, b) => (b.updated || 0) - (a.updated || 0));
      });
    }, []);
    // initial pull: merge the server's chats into whatever is cached locally
    useEffect(() => {
      fetch("/api/sessions").then((r) => r.json())
        .then((d) => reconcileServer(d.sessions, d.deleted))
        .catch(() => {}).finally(() => { syncReady.current = true; });
    }, []);
    // push local changes up (debounced); stamp `updated` on whatever changed
    useEffect(() => {
      if (!syncReady.current) return;
      const t = setTimeout(() => {
        const now = Date.now();
        let bumped = false;
        const payload = sessionsLive.current.filter((s) => s.id !== streamingSidRef.current).map((s) => {
          if (syncSnap.current.get(s.id) !== _sansUpd(s)) { bumped = true; return Object.assign({}, s, { updated: now }); }
          return s;
        });
        if (!bumped && syncSnap.current.size) return;
        payload.forEach((s) => syncSnap.current.set(s.id, _sansUpd(s)));
        fetch("/api/sessions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessions: payload }) })
          .then((r) => r.json()).then((d) => reconcileServer(d.sessions, d.deleted)).catch(() => {});
      }, 700);
      return () => clearTimeout(t);
    }, [sessions]);
    // pull other browsers' changes periodically + when the tab regains focus
    useEffect(() => {
      const pull = () => { if (syncReady.current) fetch("/api/sessions").then((r) => r.json()).then((d) => reconcileServer(d.sessions, d.deleted)).catch(() => {}); };
      const id = setInterval(pull, 8000);
      window.addEventListener("focus", pull);
      return () => { clearInterval(id); window.removeEventListener("focus", pull); };
    }, []);
    const removeSessionRemote = (id) => { try { fetch("/api/sessions/delete", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, ts: Date.now() }) }); } catch (e) {} };
    const [sidebarW, setSidebarW] = useLocal("hermes_sbw", 260);
    const [collapsed, setCollapsed] = useState(settings.collapseDefault);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [defaultModel, setDefaultModel] = useLocal("ab_default_model_v3", "");
    const [homeModel, setHomeModel] = useState(defaultModel);
    const [folders, setFolders] = useLocal("ab_folders", []);
    const [projects, setProjects] = useLocal("ab_projects", []);
    const [agents, setAgents] = useLocal("ab_agents", Hub.DEFAULT_AGENTS);
    const [composerProject, setComposerProject] = useState(null); // project id for the next new chat
    const [composerAgent, setComposerAgent] = useState(null);     // agent id for the next new chat
    const [modelsTick, setModelsTick] = useState(0);   // bumps when enabled models refresh
    const [userName, setUserName] = useState("");      // real account name from server
    const user = React.useMemo(() => buildUser(userName), [userName]);
    const [changelogSeen, setChangelogSeen] = useLocal("ab_changelog_seen", "");
    useEffect(() => { fetch("/api/config").then((r) => r.json()).then((c) => setUserName(c.user_name || "")).catch(() => {}); }, []);
    // One-time import of existing chats from a co-located agent (Hermes workspace etc.)
    const importAgentChats = React.useCallback((announce) => {
      const grpFor = (ts) => { const d = Date.now() - (ts || Date.now()), day = 864e5;
        return d < day ? "Today" : d < 2 * day ? "Yesterday" : d < 7 * day ? "Previous 7 Days" : d < 30 * day ? "Previous 30 Days" : "Older"; };
      return fetch("/api/import/sessions").then((r) => r.json()).then((d) => {
        const imp = (d.sessions || []).filter((s) => s && Array.isArray(s.messages) && s.messages.length);
        let added = 0;
        setSessions((ss) => {
          const have = new Set(ss.map((s) => s.id));
          const add = imp.filter((s) => !have.has(s.id)).map((s) => ({
            id: s.id, title: s.title, model: s.model || "", tags: s.tags || [],
            pinned: false, updated: s.updated || Date.now(), group: grpFor(s.updated), messages: s.messages }));
          added = add.length;
          return add.length ? [...add, ...ss] : ss;
        });
        if (announce) toast({ type: added ? "success" : "info", title: added ? ("Imported " + added + " chat" + (added === 1 ? "" : "s")) : "No new chats to import" });
        return added;
      }).catch(() => { if (announce) toast({ type: "error", title: "Import failed" }); return 0; });
    }, []);
    useEffect(() => {
      if (!localStorage.getItem("ab_hermes_imported")) {
        importAgentChats(true).finally(() => localStorage.setItem("ab_hermes_imported", "1"));
      }
      if (!localStorage.getItem("ab_providers_imported")) {
        fetch("/api/import/providers", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" })
          .then((r) => r.json()).then((d) => {
            const n = (d.imported || []).length;
            if (n) toast({ type: "success", title: "Imported " + n + " provider key" + (n === 1 ? "" : "s") + " from your agent" });
          }).catch(() => {}).finally(() => localStorage.setItem("ab_providers_imported", "1"));
      }
    }, []);
    const [suggestions] = useState(() => D.pickSuggestions());

    // load enabled models from backend on mount + expose a refresher
    const refreshModels = React.useCallback(() => D.refreshModels().then((list) => {
      setModelsTick((t) => t + 1);
      const ids = list.map((m) => m.id);
      // Default to the first REAL provider model (we only list authenticated
      // providers, so it works out of the box) rather than "agent::default",
      // whose Hermes config may be unset → "No inference provider configured".
      const firstReal = ids.find((id) => id !== "agent::default") || ids[0] || "";
      setHomeModel((hm) => (hm && ids.includes(hm)) ? hm : firstReal);
      setDefaultModel((dm) => (dm && ids.includes(dm)) ? dm : firstReal);
    }), []);
    useEffect(() => { refreshModels(); }, []);
    // App self-update: surface an available update as a persistent banner.
    // Re-checks on load and whenever the tab regains focus (covers reopen/return
    // without a manual refresh). Assets are served no-store, so a normal reload
    // after updating always pulls the new UI — no hard refresh needed.
    const [appUpd, setAppUpd] = useState(null);     // {update_available, latest, current}
    const [updating, setUpdating] = useState(false);
    const checkAppUpdate = useCallback(() => {
      fetch("/api/app/version").then((r) => r.json()).then(setAppUpd).catch(() => {});
    }, []);
    useEffect(() => {
      checkAppUpdate();
      const onFocus = () => checkAppUpdate();
      window.addEventListener("focus", onFocus);
      document.addEventListener("visibilitychange", onFocus);
      return () => { window.removeEventListener("focus", onFocus); document.removeEventListener("visibilitychange", onFocus); };
    }, []);
    const runAppUpdate = useCallback(() => {
      setUpdating(true);
      toast({ type: "info", title: "Updating AgentBay…" });
      fetch("/api/app/update", { method: "POST" }).then((r) => r.json()).then(({ job }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then((r) => r.json()).then((j) => {
          if (j.status === "done") { clearInterval(poll); toast({ type: "success", title: "Updated — reloading…" }); setTimeout(() => location.reload(), 3500); }
          else if (j.status === "error") { clearInterval(poll); setUpdating(false); toast({ type: "error", title: "Update failed", desc: "Open Settings → About for details." }); }
        }).catch(() => {}), 1200);
      }).catch(() => { setUpdating(false); toast({ type: "error", title: "Update failed" }); });
    }, []);
    // show the Skills entry only when the backend is an agent that has skills
    const [skillsCount, setSkillsCount] = useState(0);
    useEffect(() => {
      fetch("/api/skills").then((r) => r.json()).then((d) => setSkillsCount((d.skills || []).length)).catch(() => {});
    }, []);

    // composer
    const [draft, setDraft] = useState("");
    const [attachments, setAttachments] = useState([]);
    const [focusKey, setFocusKey] = useState(0);

    // streaming
    const [streaming, setStreaming] = useState(null); // { sessionId, text, full, timer }
    const streamRef = useRef(null);
    const metaRef = useRef({});   // {sessionId: {reasoning, tools}} captured from the reply
    const sessionsRef = useRef(sessions);
    useEffect(() => { sessionsRef.current = sessions; }, [sessions]);
    useEffect(() => { streamingSidRef.current = streaming ? streaming.sessionId : null; }, [streaming]);

    // overlays
    const [modal, setModal] = useState(null); // {kind, data}
    const [pop, setPop] = useState(null); // {kind, anchor, data}
    const [renaming, setRenaming] = useState(false);
    const [renameVal, setRenameVal] = useState("");
    const [tour, setTour] = useLocal("hermes_tour_done", false);
    const [showTour, setShowTour] = useState(false);
    // Onboarding agent-gate: re-checked every launch (session-scoped skip, not persisted)
    const [hasAgent, setHasAgent] = useState(null);   // null = unknown
    const [onboardSkipped, setOnboardSkipped] = useState(false);
    useEffect(() => {
      if (!loggedIn) return;
      fetch("/api/agents").then((r) => r.json())
        .then((d) => setHasAgent((d.agents || []).some((a) => a.installed)))
        .catch(() => setHasAgent(false));
    }, [loggedIn]);

    const topModelRef = useRef(null);
    const headModelRef = useRef(null);
    const settingsRef = useRef(null);
    const bellRef = useRef(null);
    const avatarRef = useRef(null);
    const headMenuRef = useRef(null);
    const exportRef = useRef(null);

    const active = sessions.find((s) => s.id === activeId);
    const currentModel = active ? active.model : homeModel;
    const allTags = Array.from(new Set(sessions.flatMap((s) => s.tags || []))).filter(Boolean);

    /* ---- theme application ---- */
    useEffect(() => { if (theme === "white") setTheme("light"); }, []);
    useEffect(() => {
      const apply = () => {
        let t = theme;
        if (theme === "white") t = "light";
        if (theme === "system") t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", t);
        // match the code-highlight theme to light/dark so syntax colors stay readable
        const hl = document.getElementById("hljs-light"), hd = document.getElementById("hljs-dark");
        if (hl && hd) { hl.disabled = (t === "dark"); hd.disabled = (t !== "dark"); }
      };
      apply();
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener && mq.addEventListener("change", apply);
      return () => mq.removeEventListener && mq.removeEventListener("change", apply);
    }, [theme]);

    /* ---- reduce motion + font size + accent ---- */
    useEffect(() => {
      document.body.classList.toggle("no-anim", !!settings.reduceMotion);
      document.body.classList.toggle("force-anim", !settings.reduceMotion);
      document.documentElement.style.setProperty("--content-fs", FONT_PX[settings.fontSize] + "px");
    }, [settings.reduceMotion, settings.fontSize]);
    useEffect(() => {
      // one var drives the whole palette (the rest are color-mixed from it)
      document.documentElement.style.setProperty("--accent", settings.accent || "#d9a36b");
    }, [settings.accent]);

    const setS = (k, v) => setSettings((s) => ({ ...s, [k]: v }));

    /* ---- first-login tour — only once the agent gate is resolved (don't tour over it) ---- */
    useEffect(() => {
      if (loggedIn && !tour && (hasAgent === true || onboardSkipped)) { setShowTour(true); setTour(true); }
    }, [loggedIn, hasAgent, onboardSkipped]);

    /* ---- keyboard shortcuts ---- */
    useEffect(() => {
      const onKey = (e) => {
        const meta = e.metaKey || e.ctrlKey;
        if (meta && e.key.toLowerCase() === "k") { e.preventDefault(); setModal({ kind: "search" }); }
        else if (meta && e.key.toLowerCase() === "n") { e.preventDefault(); newChat(); }
        else if (meta && e.key.toLowerCase() === "b") { e.preventDefault(); setCollapsed((c) => !c); }
        else if (meta && e.key === "/") { e.preventDefault(); setModal({ kind: "shortcuts" }); }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    /* ---- streaming engine ---- */
    // Typewriter that renders the real reply token-by-token (keeps the design's feel).
    const runTypewriter = (sessionId, full, followups, t0) => {
      const reduce = document.body.classList.contains("no-anim");
      let i = 0;
      const tokens = full.split(/(\s+)/);
      const step = () => {
        if (streamRef.current === "cancel") { finalize(sessionId, full, followups, t0); return; }
        const chunk = reduce ? tokens.length : Math.max(1, Math.round(Math.random() * 2) + 1);
        i += chunk;
        setStreaming({ sessionId, text: tokens.slice(0, i).join(""), phase: "stream" });
        if (i < tokens.length) streamRef.current = setTimeout(step, reduce ? 0 : 16 + Math.random() * 26);
        else finalize(sessionId, full, followups, t0);
      };
      step();
    };

    const startStream = (sessionId, prompt, model, images) => {
      const followups = [];   // real, relevant follow-ups are fetched after the reply (if enabled)
      // push empty assistant msg
      setSessions((ss) => ss.map((s) => s.id === sessionId ? {
        ...s, messages: [...s.messages, { role: "assistant", content: "", model, ts: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }), followups, thought: 0 }],
      } : s));

      setStreaming({ sessionId, text: "", phase: "think" });
      const t0 = Date.now();

      // build message history for this session (exclude the just-pushed empty assistant)
      const sess = (sessionsRef.current || []).find((s) => s.id === sessionId);
      const history = (sess ? sess.messages : [])
        .filter((m) => (m.role === "user" || m.role === "assistant") && m.content)
        .map((m) => ({ role: m.role, content: m.content }));
      if (!history.length || history[history.length - 1].content !== prompt)
        history.push({ role: "user", content: prompt });

      // Compose system context (backend folds these after its base prompt):
      // Project knowledge → Agent persona → personalization (most specific last).
      const sysBlocks = [];
      const proj = sess && sess.projectId ? projects.find((p) => p.id === sess.projectId) : null;
      if (proj) {
        let blk = "# Project: " + proj.name;
        if (proj.instructions && proj.instructions.trim()) blk += "\n" + proj.instructions.trim();
        const withText = (proj.files || []).filter((f) => f.text);
        if (withText.length) blk += "\n\n# Project knowledge\n" + withText.map((f) => "--- " + f.name + " ---\n" + f.text).join("\n\n");
        sysBlocks.push(blk);
      }
      const ag = sess && sess.agentId ? agents.find((a) => a.id === sess.agentId) : null;
      if (ag && ag.system && ag.system.trim()) sysBlocks.push(ag.system.trim());
      if (settings.systemPrompt && settings.systemPrompt.trim()) sysBlocks.push("# User preferences\n" + settings.systemPrompt.trim());
      // unshift in reverse so final order is [project, agent, preferences]
      for (let i = sysBlocks.length - 1; i >= 0; i--) history.unshift({ role: "system", content: sysBlocks[i] });

      // real backend call → AgentBay. model id = "provider::model"
      const [provId, ...rest] = String(model || "").split("::");
      const modelName = rest.join("::");
      const reqBody = JSON.stringify({ messages: history, provider: provId || undefined, model: modelName || undefined, session_id: sessionId, images: (images && images.length ? images : undefined) });

      // Live streaming: render tokens + the agent's thinking + tool calls as they
      // arrive. Falls back to the plain /api/chat + typewriter on any error.
      const fallback = () => fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: reqBody })
        .then((r) => r.json()).then((d) => {
          if (streamRef.current === "cancel") { finalize(sessionId, "", followups, t0); return; }
          metaRef.current[sessionId] = { reasoning: d.reasoning || "", tools: d.tools || [] };
          runTypewriter(sessionId, d.reply || ("⚠ " + (d.error || "no response from model")), followups, t0);
        }).catch((e) => runTypewriter(sessionId, "⚠ " + e, followups, t0));

      (async () => {
        let resp;
        try {
          resp = await fetch("/api/chat/stream", { method: "POST", headers: { "Content-Type": "application/json" }, body: reqBody });
          if (!resp.ok || !resp.body) throw new Error("no stream");
        } catch (e) { return fallback(); }
        const reader = resp.body.getReader();
        const dec = new TextDecoder();
        let buf = "", content = "", reasoning = "", tools = [], gotAny = false;
        const pump = (extra) => setStreaming({ sessionId, text: content, reasoning, tools: tools.slice(), phase: content ? "stream" : "think", ...extra });
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (streamRef.current === "cancel") { try { reader.cancel(); } catch (e) {} finalize(sessionId, content, followups, t0); return; }
            buf += dec.decode(value, { stream: true });
            let nl;
            while ((nl = buf.indexOf("\n\n")) >= 0) {
              const line = buf.slice(0, nl).split("\n").find((l) => l.startsWith("data:"));
              buf = buf.slice(nl + 2);
              if (!line) continue;
              let ev; try { ev = JSON.parse(line.slice(5).trim()); } catch (e) { continue; }
              gotAny = true;
              if (ev.type === "token") { content += ev.data; pump(); }
              else if (ev.type === "reasoning") { reasoning += ev.data; pump(); }
              else if (ev.type === "tool") { const i = ev.data.index || 0; tools[i] = { name: ev.data.name, args: ev.data.args }; pump(); }
              else if (ev.type === "error") { content = content || ("⚠ " + ev.data); pump(); }
            }
          }
        } catch (e) { if (!gotAny) return fallback(); }
        if (!gotAny) return fallback();
        metaRef.current[sessionId] = { reasoning, tools: tools.filter(Boolean) };
        finalize(sessionId, content || "⚠ no response from model", followups, t0);
      })();
    };

    const finalize = (sessionId, full, followups, t0) => {
      const secs = Math.max(1, Math.round((Date.now() - t0) / 1000));
      const meta = metaRef.current[sessionId] || {}; delete metaRef.current[sessionId];
      setSessions((ss) => ss.map((s) => {
        if (s.id !== sessionId) return s;
        const msgs = s.messages.slice();
        const last = msgs[msgs.length - 1];
        if (last && last.role === "assistant") msgs[msgs.length - 1] = { ...last, content: full, thought: Math.min(secs, 9), followups, reasoning: meta.reasoning || "", tools: meta.tools || [] };
        return { ...s, messages: msgs, updated: Date.now() };
      }));
      setStreaming(null);
      streamRef.current = null;

      // Suggested follow-ups (opt-in) — ask the model for relevant ones from the real conversation.
      if (settings.followups && full && !full.startsWith("⚠")) {
        const sess = (sessionsRef.current || []).find((s) => s.id === sessionId);
        const hist = (sess ? sess.messages : []).filter((m) => m.content).map((m) => ({ role: m.role, content: m.content }));
        if (!hist.length || hist[hist.length - 1].content !== full) hist.push({ role: "assistant", content: full });
        const [provId, ...rest] = String((sess && sess.model) || "").split("::");
        fetch("/api/followups", { method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: hist, provider: provId || undefined, model: rest.join("::") || undefined }) })
          .then((r) => r.json()).then((d) => {
            const fu = (d && d.followups) || [];
            if (!fu.length) return;
            setSessions((ss) => ss.map((s) => {
              if (s.id !== sessionId) return s;
              const msgs = s.messages.slice();
              const last = msgs[msgs.length - 1];
              if (last && last.role === "assistant") msgs[msgs.length - 1] = { ...last, followups: fu };
              return { ...s, messages: msgs };
            }));
          }).catch(() => {});
      }
    };

    const stopStream = () => {
      if (streamRef.current && typeof streamRef.current !== "string") clearTimeout(streamRef.current);
      const sid = streaming && streaming.sessionId;
      const partial = streaming ? streaming.text : "";
      if (sid) {
        setSessions((ss) => ss.map((s) => {
          if (s.id !== sid) return s;
          const msgs = s.messages.slice();
          const last = msgs[msgs.length - 1];
          if (last && last.role === "assistant") msgs[msgs.length - 1] = { ...last, content: partial || "*(stopped)*", thought: 1 };
          return { ...s, messages: msgs };
        }));
      }
      setStreaming(null); streamRef.current = null;
    };

    /* ---- send ---- */
    const send = (text) => {
      const typed = (text != null ? text : draft).trim();
      if (!typed && attachments.length === 0) return;
      // Images are sent to the (multimodal) agent as real data — capture them now
      // (state clears before startStream runs) and show them in the user's bubble.
      const images = attachments.filter((a) => a.kind === "image" && a.b64).map((a) => ({ mime: a.mime, b64: a.b64, name: a.name }));
      // Fold attached TEXT file contents into the message; only non-image, non-text
      // files are listed "by name only" (images travel as image data, not a note).
      const textParts = attachments.filter((a) => a.text).map((a) => "\n\n--- Attached file: " + a.name + " ---\n" + a.text);
      const named = attachments.filter((a) => !a.text && a.kind !== "image").map((a) => a.name);
      const body = typed + textParts.join("") + (named.length ? "\n\n[Attached (by name only): " + named.join(", ") + "]" : "");
      const title = (typed || (attachments[0] && attachments[0].name) || "New chat").slice(0, 40);
      const userMsg = { role: "user", content: body };
      if (images.length) userMsg.images = images;

      let sid = activeId;
      if (!active) {
        sid = uid();
        const newS = { id: sid, title, model: homeModel, group: "Today", tags: [], pinned: false, updated: Date.now(),
          projectId: composerProject || null, agentId: composerAgent || null,
          messages: [userMsg] };
        setSessions((ss) => [newS, ...ss]);
        setActiveId(sid);
        if (!sessions.some((s) => s.messages.length > 1)) { fireConfetti(); }
        setComposerProject(null); setComposerAgent(null);  // context now lives on the session
      } else {
        setSessions((ss) => ss.map((s) => s.id === sid ? { ...s, messages: [...s.messages, userMsg], updated: Date.now() } : s));
      }
      setDraft(""); setAttachments([]);
      const model = active ? active.model : homeModel;
      setTimeout(() => startStream(sid, body, model, images), 60);
    };

    /* ---- start a chat scoped to a project / agent ---- */
    const startProjectChat = (projectId) => {
      if (streaming) stopStream();
      setModal(null); setActiveId(null); setDraft(""); setAttachments([]);
      setComposerProject(projectId); setComposerAgent(null); setHomeModel(defaultModel);
      setFocusKey((k) => k + 1);
    };
    const startAgentChat = (agentId) => {
      if (streaming) stopStream();
      const a = agents.find((x) => x.id === agentId);
      setModal(null); setActiveId(null); setDraft(""); setAttachments([]);
      setComposerAgent(agentId); setComposerProject(null);
      setHomeModel((a && a.model) ? a.model : defaultModel);   // honor the agent's model override
      setFocusKey((k) => k + 1);
    };

    /* ---- regenerate: drop the last assistant turn, re-run from the last user prompt ---- */
    const regenerate = (sessionId) => {
      if (streaming) return;
      const sess = (sessionsRef.current || []).find((s) => s.id === sessionId);
      if (!sess) return;
      const msgs = sess.messages.slice();
      let lastUserIdx = -1;
      for (let i = msgs.length - 1; i >= 0; i--) { if (msgs[i].role === "user") { lastUserIdx = i; break; } }
      if (lastUserIdx < 0) return;
      const prompt = msgs[lastUserIdx].content;
      const trimmed = msgs.slice(0, lastUserIdx + 1);   // keep through the user message
      setSessions((ss) => ss.map((s) => s.id === sessionId ? { ...s, messages: trimmed } : s));
      setTimeout(() => startStream(sessionId, prompt, sess.model), 60);
    };

    const newChat = () => {
      if (streaming) stopStream();
      setActiveId(null); setDraft(""); setAttachments([]); setHomeModel(defaultModel);
      setComposerProject(null); setComposerAgent(null);
      setMobileOpen(false);
      setFocusKey((k) => k + 1);
    };

    const openChat = (id) => {
      if (streaming) stopStream();
      setActiveId(id); setMobileOpen(false); setRenaming(false);
      // mark continued seed chats: if only user msg, auto-generate a reply lazily? leave as-is.
    };

    const pickModel = (id) => {
      if (active) setSessions((ss) => ss.map((s) => s.id === active.id ? { ...s, model: id } : s));
      else setHomeModel(id);
      // id = "provider::model" → set active provider + model on the backend
      const [prov, ...rest] = String(id || "").split("::");
      fetch("/api/config", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: prov, active_model: rest.join("::") }) }).catch(() => {});
    };

    /* ---- session ops ---- */
    const renameSession = (id, title) => setSessions((ss) => ss.map((s) => s.id === id ? { ...s, title } : s));
    const pinSession = (s) => { setSessions((ss) => ss.map((x) => x.id === s.id ? { ...x, pinned: !x.pinned } : x)); toast({ type: "success", title: s.pinned ? "Unpinned" : "Pinned to top" }); };
    const archiveSession = (s) => { removeSessionRemote(s.id); setSessions((ss) => ss.filter((x) => x.id !== s.id)); if (activeId === s.id) setActiveId(null); toast({ type: "info", title: "Chat archived" }); };
    const deleteSession = (s) => { removeSessionRemote(s.id); setSessions((ss) => ss.filter((x) => x.id !== s.id)); if (activeId === s.id) setActiveId(null); setModal(null); toast({ type: "info", title: "Chat deleted" }); };

    /* ---- composer helpers: real file attach (reads text content, sent with the message) ---- */
    const fileInputRef = useRef(null);
    const fmtSize = (n) => n < 1024 ? n + " B" : n < 1048576 ? (n / 1024).toFixed(0) + " KB" : (n / 1048576).toFixed(1) + " MB";
    const TEXT_RE = /\.(txt|md|markdown|csv|tsv|json|ya?ml|log|js|jsx|ts|tsx|py|rb|go|rs|java|c|h|cpp|cs|php|sh|sql|html?|css|xml|ini|toml|env)$|^text\//i;
    const onFilesPicked = (fileList) => {
      Array.from(fileList || []).forEach((f) => {
        if (f.size > 25 * 1024 * 1024) { toast({ type: "info", title: f.name + " skipped", desc: "Files must be under 25 MB." }); return; }
        const kind = /^image\//.test(f.type) ? "image" : "file";
        const fr = new FileReader();
        fr.onload = () => {
          fetch("/api/extract", { method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: f.name, b64: String(fr.result) }) })
            .then((r) => r.json())
            .then((res) => {
              // Keep image bytes so they're sent to the (multimodal) agent, not just shown.
              const extra = kind === "image" ? { b64: String(fr.result), mime: f.type || "image/png" } : {};
              setAttachments((x) => [...x, { name: f.name, size: fmtSize(f.size), kind, text: res.text || "", ...extra }]);
              if (!res.text && kind !== "image") toast({ type: "info", title: f.name + " attached", desc: res.note || "no text extracted" });
            })
            .catch(() => toast({ type: "error", title: "Attach failed", desc: f.name }));
        };
        fr.readAsDataURL(f);   // base64 → server extracts any file type
      });
    };
    const attachFile = () => fileInputRef.current && fileInputRef.current.click();
    const composerProps = {
      value: draft, onChange: setDraft, onSend: () => send(), onStop: stopStream, streaming: !!streaming,
      attachments, onAttach: attachFile, onFiles: onFilesPicked, onRemoveAttach: (i) => setAttachments((x) => x.filter((_, j) => j !== i)),
      focusKey,
      placeholder: active ? "Reply to Hermes…" : "Message Hermes…",
    };

    /* ---- export ---- */
    const downloadBlob = (name, text, type) => {
      try {
        const url = URL.createObjectURL(new Blob([text], { type: type || "application/json" }));
        const a = document.createElement("a");
        a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch (e) { toast({ type: "info", title: "Download blocked by browser" }); }
    };
    const slug = (s) => (s || "chat").replace(/[^\w.-]+/g, "-").slice(0, 50) || "chat";
    const serialize = (s, fmt) => {
      const rows = (s.messages || []).map((m) => ({ who: m.role === "user" ? "You" : "Assistant", c: m.content || "" }));
      if (fmt === "json") return JSON.stringify(s, null, 2);
      if (fmt === "txt") return (s.title || "Chat") + "\n\n" + rows.map((r) => r.who + ":\n" + r.c).join("\n\n");
      if (fmt === "html") return "<!doctype html><meta charset=utf-8><title>" + (s.title || "Chat") +
        "</title><body style='font:15px/1.6 system-ui;max-width:720px;margin:40px auto;padding:0 16px'>" +
        "<h1>" + (s.title || "Chat") + "</h1>" + rows.map((r) => "<p><b>" + r.who + ":</b><br>" +
        r.c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\n/g, "<br>") + "</p>").join("") + "</body>";
      return "# " + (s.title || "Chat") + "\n\n" + rows.map((r) => "**" + r.who + ":** " + r.c).join("\n\n"); // md
    };
    const doExport = (fmt, label) => {
      if (!active) { toast({ type: "info", title: "Open a chat to export it" }); return; }
      const mime = fmt === "json" ? "application/json" : fmt === "html" ? "text/html" : "text/" + (fmt === "md" ? "markdown" : "plain");
      downloadBlob(slug(active.title) + "." + fmt, serialize(active, fmt), mime);
      toast({ type: "success", title: "Exported as " + (label || fmt) });
    };
    const exportAll = () => {
      if (!sessions.length) { toast({ type: "info", title: "No chats to export" }); return; }
      downloadBlob("hermes-export.json", JSON.stringify({ exported: new Date().toISOString(), sessions }, null, 2), "application/json");
      toast({ type: "success", title: "Exported all chats", desc: sessions.length + " conversations" });
    };

    /* ---- popovers ---- */
    const openChatMenu = (s, ref) => setPop({ kind: "chatmenu", anchor: ref, data: s });

    if (!loggedIn) {
      return <V.Login onLogin={() => { setLoggedIn(true); if (!tour) setTimeout(() => {}, 0); }} />;
    }

    const showHeader = !!active;

    return (
      <div className="app">
        {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
        <window.Sidebar
          collapsed={collapsed} mobileOpen={mobileOpen} sessions={sessions} activeId={activeId}
          folders={folders} groupOrder={D.GROUP_ORDER} user={user} theme={theme}
          onNewChat={newChat} onOpenChat={openChat} onOpenSearch={() => setModal({ kind: "search" })}
          onOpenNotes={() => setModal({ kind: "notes" })}
          onOpenProjects={() => setModal({ kind: "projects" })} onOpenAgents={() => setModal({ kind: "agents" })}
          onOpenSkills={() => setModal({ kind: "skills" })} showSkills={skillsCount > 0}
          showAgents={settings.agentsEnabled}
          onNewFolder={() => setModal({ kind: "folder" })} onChatMenu={openChatMenu}
          onToggleCollapse={() => { if (window.innerWidth <= 720) setMobileOpen((m) => !m); else setCollapsed((c) => !c); }}
          onUserClick={(ref) => setPop({ kind: "usermenu", anchor: ref })}
          onResize={(x) => { const w = Math.max(220, Math.min(360, x)); setSidebarW(w); document.documentElement.style.setProperty("--sidebar-w", w + "px"); }}
        />

        <main className="main">
          {/* app update banner — appears whenever the running build is behind GitHub */}
          {appUpd && appUpd.update_available && (
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", background: "color-mix(in srgb, var(--accent) 14%, var(--surface))", borderBottom: "1px solid var(--border)", fontSize: 13.5 }}>
              <span style={{ display: "inline-flex", color: "var(--accent-deep)" }}><I.Download size={16} /></span>
              <span style={{ flex: 1 }}>A new version of AgentBay is available{appUpd.latest ? <span style={{ color: "var(--text-3)" }}> ({appUpd.latest})</span> : null}.</span>
              <button className="btn btn-primary" style={{ padding: "5px 14px" }} disabled={updating} onClick={runAppUpdate}>{updating ? "Updating…" : "Update now"}</button>
              <button className="x-btn" aria-label="Dismiss" onClick={() => setAppUpd(null)}><I.X size={16} /></button>
            </div>
          )}
          {/* top bar */}
          <div className="topbar">
            <div className="left">
              <button className="icon-btn tb-menu-btn" aria-label="Toggle sidebar" onClick={() => { if (window.innerWidth <= 720) setMobileOpen((m) => !m); else setCollapsed((c) => !c); }}>
                <I.Menu size={19} />
              </button>
            </div>
            <div className="center">
              {!showHeader ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button ref={topModelRef} className="model-pill" onClick={() => setPop({ kind: "model", anchor: topModelRef })}>
                    {React.createElement(I[modelMeta(homeModel).icon] || I.Bot, { size: 17, style: { color: "var(--accent-deep)" } })}
                    {modelMeta(homeModel).name}<I.ChevronDown size={15} className="chev" />
                  </button>
                </div>
              ) : (
                <ChatHeader active={active} renaming={renaming} renameVal={renameVal} setRenameVal={setRenameVal}
                  onModel={() => setPop({ kind: "model", anchor: headModelRef })} modelRef={headModelRef}
                  onStartRename={() => { setRenaming(true); setRenameVal(active.title); }}
                  onCommitRename={() => { if (renameVal.trim()) renameSession(active.id, renameVal.trim()); setRenaming(false); toast({ type: "success", title: "Renamed" }); }}
                  onCancelRename={() => setRenaming(false)}
                  onMenu={() => setPop({ kind: "chatmenu", anchor: headMenuRef, data: active })} menuRef={headMenuRef}
                  onTags={() => setModal({ kind: "tag", data: active })}
                  ctx={{ project: projects.find((p) => p.id === active.projectId), agent: agents.find((a) => a.id === active.agentId) }} />
              )}
            </div>
            {!showHeader && (
              <div className="set-default">
                {homeModel !== defaultModel ? <button onClick={() => { setDefaultModel(homeModel); toast({ type: "success", title: "Default model set", desc: modelMeta(homeModel).name }); }}>Set as default</button>
                  : <span style={{ color: "var(--text-faint)" }}>Default model</span>}
              </div>
            )}
            <div className="tb-spacer" />
            <div className="right">
              <button ref={settingsRef} className="icon-btn" aria-label="Settings" onClick={() => setModal({ kind: "settings" })}><I.Settings size={19} /></button>
              {(() => { const showBadge = changelogSeen !== "ALL" && changelogSeen !== window.CHANGELOG_LATEST;
                return <button ref={bellRef} className={"icon-btn" + (showBadge ? " has-badge" : "")} aria-label="Notifications" onClick={() => setModal({ kind: "changelog" })}><I.Bell size={19} />{showBadge && <span className="badge" />}</button>; })()}
              <button ref={avatarRef} className="icon-btn" aria-label="Account" onClick={() => setPop({ kind: "usermenu", anchor: avatarRef })} style={{ width: 38 }}>
                <span className="avatar" style={{ width: 30, height: 30 }}>{user.initials}</span>
              </button>
            </div>
          </div>

          {/* body */}
          {!active ? (
            <Home model={homeModel} suggestions={suggestions} onPick={(s) => { send(s.prompt); }} composerProps={composerProps}
              context={{ project: projects.find((p) => p.id === composerProject), agent: agents.find((a) => a.id === composerAgent), onClear: () => { setComposerProject(null); setComposerAgent(null); } }} />
          ) : (
            <React.Fragment>
              <Thread session={active} streaming={streaming && streaming.sessionId === active.id ? streaming : null}
                onFollowup={(q) => send(q)} onToast={toast} settings={settings}
                onRegen={() => regenerate(active.id)} />
              <Composer {...composerProps} />
            </React.Fragment>
          )}
        </main>

        {/* ===== overlays ===== */}
        <input ref={fileInputRef} type="file" multiple style={{ display: "none" }}
          onChange={(e) => { onFilesPicked(e.target.files); e.target.value = ""; }} />

        {modal && modal.kind === "settings" && (
          <window.Settings s={settings} set={setS} theme={theme} onTheme={setTheme} onClose={() => { setModal(null); refreshModels(); }}
            defaultModel={defaultModel} onDefaultModel={(m) => { setDefaultModel(m); toast({ type: "success", title: "Default model set" }); }}
            onDeleteAll={() => setModal({ kind: "deleteAll" })} onImport={() => setModal({ kind: "import" })}
            onExportAll={exportAll} onToast={toast} />
        )}
        {modal && modal.kind === "search" && (
          <Mo.SearchModal sessions={sessions} onClose={() => setModal(null)} onOpenChat={openChat} onNewChat={newChat} onOpenSettings={() => setModal({ kind: "settings" })} />
        )}
        {modal && modal.kind === "shortcuts" && <Mo.ShortcutsModal onClose={() => setModal(null)} />}
        {modal && modal.kind === "about" && (
          <Modal onClose={() => setModal(null)} width={400}>
            <div className="modal-body" style={{ textAlign: "center", padding: "34px 24px" }}>
              <window.HermesGlyph size={56} />
              <div style={{ fontWeight: 700, fontSize: 19, marginTop: 14 }}>Hermes — Simple Chat</div>
              <div style={{ color: "var(--text-3)", marginTop: 4 }}>Version 3.0.1 · MIT License</div>
              <div style={{ color: "var(--text-faint)", fontSize: 13, marginTop: 18 }}>Powered by Hermes Agent</div>
            </div>
          </Modal>
        )}
        {modal && modal.kind === "tag" && <Mo.TagModal session={modal.data} allTags={allTags.length ? allTags : ["code", "writing", "study"]} onClose={() => setModal(null)} onToast={toast} onSave={(tags) => { setSessions((ss) => ss.map((s) => s.id === modal.data.id ? { ...s, tags } : s)); setModal(null); }} />}
        {modal && modal.kind === "folder" && <Mo.FolderModal onClose={() => setModal(null)} onCreate={(f) => { setFolders((x) => [...x, f]); setModal(null); toast({ type: "success", title: "Folder created", desc: f.name }); }} />}
        {modal && modal.kind === "import" && <Mo.ImportModal onClose={() => setModal(null)} onToast={toast}
          onImport={(arr) => { setSessions((ss) => [...arr, ...ss]); }} />}
        {modal && modal.kind === "changelog" && <Mo.ChangelogModal onSeen={setChangelogSeen} onClose={() => { setModal(null); if (!tour) { setShowTour(true); setTour(true); } }} />}
        {modal && modal.kind === "notes" && <V.Notes onClose={() => setModal(null)} />}
        {modal && modal.kind === "projects" && <Hub.Projects projects={projects} setProjects={setProjects} onClose={() => setModal(null)} onToast={toast} onStartChat={startProjectChat} />}
        {modal && modal.kind === "agents" && <Hub.Agents agents={agents} setAgents={setAgents} models={D.MODELS} onClose={() => setModal(null)} onToast={toast} onStartChat={startAgentChat} />}
        {modal && modal.kind === "skills" && <Hub.Skills onClose={() => setModal(null)} />}
        {modal && modal.kind === "delete" && (
          <Mo.DeleteModal title="Delete chat?" name={modal.data.title} body={"This will permanently delete \u201C" + modal.data.title + "\u201D. This can't be undone."}
            onClose={() => setModal(null)} onConfirm={() => deleteSession(modal.data)} />
        )}
        {modal && modal.kind === "deleteAll" && (
          <Mo.DeleteModal title="Delete all chats?" name="DELETE" requireType body={"This permanently removes all " + sessions.length + " conversations."}
            onClose={() => setModal(null)} onConfirm={() => { sessionsLive.current.forEach((s) => removeSessionRemote(s.id)); setSessions([]); setActiveId(null); setModal(null); toast({ type: "info", title: "All chats deleted" }); }} />
        )}
        {modal && modal.kind === "signout" && (
          <Mo.DeleteModal title="Sign out?" name="signout" body="You'll need your password to sign back in."
            onClose={() => setModal(null)} onConfirm={() => { setModal(null); setLoggedIn(false); setActiveId(null); }} />
        )}

        {/* ===== popovers ===== */}
        {pop && pop.kind === "model" && (
          <V.ModelMenu anchorRef={pop.anchor} current={currentModel} defaultModel={defaultModel}
            onClose={() => setPop(null)} onPick={pickModel} onSetDefault={(m) => { setDefaultModel(m); toast({ type: "success", title: "Default model set" }); }} />
        )}
        {pop && pop.kind === "usermenu" && (
          <Mo.UserMenu anchorRef={pop.anchor} user={user} theme={theme} onClose={() => setPop(null)}
            onSettings={() => setModal({ kind: "settings" })} onShortcuts={() => setModal({ kind: "shortcuts" })}
            onAbout={() => setModal({ kind: "about" })} onTheme={setTheme} onSignOut={() => setModal({ kind: "signout" })} />
        )}
        {pop && pop.kind === "chatmenu" && (
          <Mo.ChatMenu anchorRef={pop.anchor} session={pop.data} onClose={() => setPop(null)}
            onRename={(s) => { openChat(s.id); setTimeout(() => { setRenaming(true); setRenameVal(s.title); }, 0); }}
            onPin={pinSession} onArchive={archiveSession} onShare={(s) => setModal({ kind: "share", data: s })}
            onExport={(s) => { openChat(s.id); setPop({ kind: "export", anchor: pop.anchor, data: s }); }}
            onTag={(s) => setModal({ kind: "tag", data: s })} onDelete={(s) => setModal({ kind: "delete", data: s })} />
        )}
        {pop && pop.kind === "export" && (
          <Mo.ExportMenu anchorRef={pop.anchor} onClose={() => setPop(null)} onPick={doExport} />
        )}

        {/* ===== onboarding agent-gate (before the tour) ===== */}
        {loggedIn && hasAgent === false && !onboardSkipped && (
          <V.OnboardingGate
            onInstalled={() => { setHasAgent(true); toast({ type: "success", title: "Agent installed", desc: "Every model now runs with full tools." }); }}
            onSkip={() => setOnboardSkipped(true)} />
        )}

        {/* ===== tour ===== */}
        {showTour && <V.Tour onDone={() => setShowTour(false)} />}
      </div>
    );
  }

  /* ---------- chat header (active) ---------- */
  function ChatHeader({ active, renaming, renameVal, setRenameVal, onModel, modelRef, onStartRename, onCommitRename, onCancelRename, onMenu, menuRef, onTags, ctx }) {
    const meta = modelMeta(active.model);
    const Ic = I[meta.icon] || I.Bot;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 4, width: "100%" }}>
        <button ref={modelRef} className="model-pill" onClick={onModel}>
          <Ic size={16} style={{ color: "var(--accent-deep)" }} />{meta.name}<I.ChevronDown size={14} className="chev" />
        </button>
        {ctx && ctx.project && <span className="tag-mini" style={{ display: "inline-flex", alignItems: "center", gap: 5, marginLeft: 4 }}><I.Folder size={12} style={{ color: ctx.project.color }} />{ctx.project.name}</span>}
        {ctx && ctx.agent && <span className="tag-mini" style={{ display: "inline-flex", alignItems: "center", gap: 5, marginLeft: 4 }}><I.Bot size={12} style={{ color: ctx.agent.color }} />{ctx.agent.name}</span>}
        <span style={{ color: "var(--border-strong)" }}>·</span>
        {renaming ? (
          <input autoFocus className="field" style={{ padding: "4px 8px", maxWidth: 280, fontSize: 14 }}
            value={renameVal} onChange={(e) => setRenameVal(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") onCommitRename(); if (e.key === "Escape") onCancelRename(); }}
            onBlur={onCommitRename} />
        ) : (
          <button className="chat-title" onClick={onStartRename} title="Rename" style={{ fontWeight: 550, fontSize: 14.5, color: "var(--text-2)", padding: "4px 6px", borderRadius: 7, maxWidth: 320, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{active.title}</button>
        )}
        <span className="tb-spacer" />
        <button className="icon-btn" aria-label="Tags" onClick={onTags}><I.Tag size={17} /></button>
        <button ref={menuRef} className="icon-btn" aria-label="Chat menu" onClick={onMenu}><I.MoreHorizontal size={19} /></button>
      </div>
    );
  }

  window.HermesApp = function () {
    return <ToastProvider><App /><window.TweaksController /></ToastProvider>;
  };
})();

