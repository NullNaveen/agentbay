/* AUTO-GENERATED from bundle.jsx by tools/build.js — do not edit directly. */
/* Hermes — single concatenated bundle (auto-generated) */

/* ==================== js/icons.jsx ==================== */
/* Hermes — icons.jsx : Lucide-style stroke icons + brand glyph + mascot */
(function () {
  const S = (paths, props = {}) => function Icon(p) {
    const {
      size = 18,
      sw = 2,
      ...rest
    } = p || {};
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      ...props,
      ...rest
    }, paths.map((d, i) => typeof d === "string" ? React.createElement("path", {
      key: i,
      d
    }) : React.createElement(d.t, {
      key: i,
      ...d.a
    })));
  };
  // Filled brand glyph: solid currentColor fill, no stroke.
  const F = paths => function Icon(p) {
    const {
      size = 18,
      ...rest
    } = p || {};
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none",
      "aria-hidden": "true",
      ...rest
    }, paths.map((d, i) => React.createElement("path", {
      key: i,
      d
    })));
  };
  const C = a => ({
    t: "circle",
    a
  });
  const R = a => ({
    t: "rect",
    a
  });
  const L = a => ({
    t: "line",
    a
  });
  const PL = a => ({
    t: "polyline",
    a
  });
  const Icons = {
    Menu: S(["M3 6h18", "M3 12h18", "M3 18h18"]),
    PanelLeft: S([R({
      x: 3,
      y: 3,
      width: 18,
      height: 18,
      rx: 2
    }), "M9 3v18"]),
    Plus: S(["M12 5v14", "M5 12h14"]),
    Search: S([C({
      cx: 11,
      cy: 11,
      r: 8
    }), "M21 21l-4.3-4.3"]),
    Notebook: S(["M2 6h4", "M2 12h4", "M2 18h4", R({
      x: 6,
      y: 3,
      width: 16,
      height: 18,
      rx: 2
    }), "M12 3v18"]),
    Folder: S(["M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"]),
    Layers: S(["M12 2 2 7l10 5 10-5-10-5Z", "m2 17 10 5 10-5", "m2 12 10 5 10-5"]),
    ChevronDown: S(["m6 9 6 6 6-6"]),
    ChevronRight: S(["m9 6 6 6-6 6"]),
    ChevronUp: S(["m6 15 6-6 6 6"]),
    Settings: S([C({
      cx: 12,
      cy: 12,
      r: 3
    }), "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"]),
    Bell: S(["M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", "M10.3 21a1.94 1.94 0 0 0 3.4 0"]),
    MoreVertical: S([C({
      cx: 12,
      cy: 5,
      r: 1
    }), C({
      cx: 12,
      cy: 12,
      r: 1
    }), C({
      cx: 12,
      cy: 19,
      r: 1
    })]),
    MoreHorizontal: S([C({
      cx: 5,
      cy: 12,
      r: 1
    }), C({
      cx: 12,
      cy: 12,
      r: 1
    }), C({
      cx: 19,
      cy: 12,
      r: 1
    })]),
    Pin: S(["M12 17v5", "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1Z"]),
    Archive: S([R({
      x: 3,
      y: 4,
      width: 18,
      height: 4,
      rx: 1
    }), "M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8", "M10 12h4"]),
    Share: S(["M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", "M16 6l-4-4-4 4", "M12 2v13"]),
    Download: S(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"]),
    Upload: S(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M17 8l-5-5-5 5", "M12 3v12"]),
    Trash: S(["M3 6h18", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", "M10 11v6", "M14 11v6"]),
    Tag: S(["M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.41 8.41a2 2 0 0 0 2.83 0l6.59-6.59a2 2 0 0 0 0-2.83Z", C({
      cx: 7,
      cy: 7,
      r: 1.2
    })]),
    Pencil: S(["M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z"]),
    Copy: S([R({
      x: 9,
      y: 9,
      width: 12,
      height: 12,
      rx: 2
    }), "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"]),
    Chart: S(["M3 3v18h18", "m7 14 4-4 3 3 5-6"]),
    Check: S(["M20 6 9 17l-5-5"]),
    CheckCircle: S(["M22 11.08V12a10 10 0 1 1-5.93-9.14", "m22 4-10 10.01-3-3"]),
    X: S(["M18 6 6 18", "M6 6l12 12"]),
    Volume: S(["M11 5 6 9H2v6h4l5 4z", "M15.54 8.46a5 5 0 0 1 0 7.07", "M19.07 4.93a10 10 0 0 1 0 14.14"]),
    Info: S([C({
      cx: 12,
      cy: 12,
      r: 10
    }), "M12 16v-4", "M12 8h.01"]),
    ThumbsUp: S(["M7 10v12", "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"]),
    ThumbsDown: S(["M17 14V2", "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"]),
    Refresh: S(["M3 12a9 9 0 0 1 15-6.7L21 8", "M21 3v5h-5", "M21 12a9 9 0 0 1-15 6.7L3 16", "M3 21v-5h5"]),
    Paperclip: S(["m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"]),
    ArrowUp: S(["M12 19V5", "m5 12 7-7 7 7"]),
    ArrowDown: S(["M12 5v14", "m19 12-7 7-7-7"]),
    Sun: S([C({
      cx: 12,
      cy: 12,
      r: 4
    }), "M12 2v2", "M12 20v2", "m4.93 4.93 1.41 1.41", "m17.66 17.66 1.41 1.41", "M2 12h2", "M20 12h2", "m6.34 17.66-1.41 1.41", "m19.07 4.93-1.41 1.41"]),
    Moon: S(["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"]),
    Monitor: S([R({
      x: 2,
      y: 3,
      width: 20,
      height: 14,
      rx: 2
    }), "M8 21h8", "M12 17v4"]),
    LogOut: S(["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "m16 17 5-5-5-5", "M21 12H9"]),
    Keyboard: S([R({
      x: 2,
      y: 4,
      width: 20,
      height: 16,
      rx: 2
    }), "M6 8h.01", "M10 8h.01", "M14 8h.01", "M18 8h.01", "M6 12h.01", "M10 12h.01", "M14 12h.01", "M18 12h.01", "M7 16h10"]),
    User: S([C({
      cx: 12,
      cy: 8,
      r: 4
    }), "M4 21a8 8 0 0 1 16 0"]),
    Lock: S([R({
      x: 4,
      y: 11,
      width: 16,
      height: 10,
      rx: 2
    }), "M8 11V7a4 4 0 0 1 8 0v4"]),
    Key: S([C({
      cx: 7.5,
      cy: 15.5,
      r: 4.5
    }), "m10.5 12.5 7-7", "M16 5l3 3", "m20 9-3-3"]),
    Sliders: S(["M4 21v-7", "M4 10V3", "M12 21v-9", "M12 8V3", "M20 21v-5", "M20 12V3", "M1 14h6", "M9 8h6", "M17 16h6"]),
    Palette: S([C({
      cx: 13.5,
      cy: 6.5,
      r: 1.2
    }), C({
      cx: 17.5,
      cy: 10.5,
      r: 1.2
    }), C({
      cx: 8.5,
      cy: 7.5,
      r: 1.2
    }), C({
      cx: 6.5,
      cy: 12.5,
      r: 1.2
    }), "M12 2a10 10 0 0 0 0 20c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"]),
    Globe: S([C({
      cx: 12,
      cy: 12,
      r: 10
    }), "M2 12h20", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"]),
    Server: S([R({
      x: 2,
      y: 3,
      width: 20,
      height: 8,
      rx: 2
    }), R({
      x: 2,
      y: 13,
      width: 20,
      height: 8,
      rx: 2
    }), "M6 7h.01", "M6 17h.01"]),
    Database: S(["M3 5c0-1.66 4-3 9-3s9 1.34 9 3-4 3-9 3-9-1.34-9-3Z", "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5", "M3 12c0 1.66 4 3 9 3s9-1.34 9-3"]),
    Headphones: S(["M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-6a9 9 0 0 1 18 0v6a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"]),
    Zap: S(["M13 2 3 14h9l-1 8 10-12h-9l1-8Z"]),
    Sparkle: S(["M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"]),
    Brain: S(["M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z", "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"]),
    BookOpen: S(["M12 7v14", "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z"]),
    Code: S(["m16 18 6-6-6-6", "m8 6-6 6 6 6"]),
    Lightbulb: S(["M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", "M9 18h6", "M10 22h4"]),
    Image: S([R({
      x: 3,
      y: 3,
      width: 18,
      height: 18,
      rx: 2
    }), C({
      cx: 9,
      cy: 9,
      r: 2
    }), "m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"]),
    File: S(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z", "M14 2v6h6"]),
    FileText: S(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z", "M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"]),
    Stop: S([R({
      x: 5,
      y: 5,
      width: 14,
      height: 14,
      rx: 2
    })]),
    Edit: S(["M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"]),
    Clock: S([C({
      cx: 12,
      cy: 12,
      r: 10
    }), "M12 6v6l4 2"]),
    Command: S(["M15 6a3 3 0 1 0 3 3h-3V6Zm0 12a3 3 0 1 0 3-3h-3v3ZM9 6a3 3 0 1 1-3 3h3V6Zm0 12a3 3 0 1 1-3-3h3v3Z", "M9 9h6v6H9z"]),
    CornerDownLeft: S(["M9 10 4 15l5 5", "M20 4v7a4 4 0 0 1-4 4H4"]),
    Gift: S([R({
      x: 3,
      y: 8,
      width: 18,
      height: 4,
      rx: 1
    }), "M12 8v13", "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", "M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"]),
    Wand: S(["m3 21 9-9", "M15 4V2", "M15 16v-2", "M8 9h2", "M20 9h2", "M17.8 11.8 19 13", "M15 9h0", "M17.8 6.2 19 5", "m3 21 9-9", "M12.2 6.2 11 5"]),
    QrCode: S([R({
      x: 3,
      y: 3,
      width: 7,
      height: 7,
      rx: 1
    }), R({
      x: 14,
      y: 3,
      width: 7,
      height: 7,
      rx: 1
    }), R({
      x: 3,
      y: 14,
      width: 7,
      height: 7,
      rx: 1
    }), "M14 14h3v3", "M21 14v.01", "M14 21h.01", "M21 21v.01", "M17 21h.01", "M21 17h.01"]),
    Play: S(["m6 3 14 9-14 9V3Z"]),
    Pause: S([R({
      x: 6,
      y: 4,
      width: 4,
      height: 16,
      rx: 1
    }), R({
      x: 14,
      y: 4,
      width: 4,
      height: 16,
      rx: 1
    })]),
    Filter: S(["M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"]),
    AlertTriangle: S(["M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z", "M12 9v4", "M12 17h.01"]),
    Languages: S(["m5 8 6 6", "m4 14 6-6 2-3", "M2 5h12", "M7 2h1", "m22 22-5-10-5 10", "M14 18h6"]),
    Type: S(["M4 7V4h16v3", "M9 20h6", "M12 4v16"]),
    Bot: S([R({
      x: 3,
      y: 11,
      width: 18,
      height: 10,
      rx: 2
    }), C({
      cx: 9,
      cy: 16,
      r: 1
    }), C({
      cx: 15,
      cy: 16,
      r: 1
    }), "M12 7v4", "M8 7h8", C({
      cx: 12,
      cy: 5,
      r: 2
    })]),
    Mail: S([R({
      x: 2,
      y: 4,
      width: 20,
      height: 16,
      rx: 2
    }), "m2 7 10 6 10-6"]),
    Plug: S(["M9 2v6", "M15 2v6", "M6 8h12v3a6 6 0 0 1-12 0Z", "M12 17v5"]),
    // ---- Brand glyphs (filled, monochrome via currentColor) ----
    Telegram: F(["M21.94 4.31 18.9 19.1c-.23 1.01-.83 1.26-1.68.79l-4.65-3.43-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.74 8.63-7.8c.38-.33-.08-.52-.59-.19l-10.66 6.71-4.59-1.44c-1-.31-1.02-1 .21-1.48l17.94-6.92c.83-.31 1.56.19 1.29 1.48Z"]),
    Discord: F(["M20.32 4.93A19.5 19.5 0 0 0 15.5 3.4l-.24.43c-.83.2-1.6.45-2.32.74-.72-.29-1.49-.54-2.32-.74L8.5 3.4A19.5 19.5 0 0 0 3.68 4.93C.96 8.95.21 12.86.58 16.72A19.7 19.7 0 0 0 6.55 19.7l.7-1.01c-.46-.17-.9-.38-1.32-.62l.33-.24c1.7.79 3.6 1.2 5.74 1.2s4.04-.41 5.74-1.2l.33.24c-.42.24-.86.45-1.32.62l.7 1.01a19.7 19.7 0 0 0 5.97-2.98c.43-4.47-.74-8.35-3.1-11.79ZM9.18 14.6c-.94 0-1.71-.86-1.71-1.91s.76-1.92 1.71-1.92 1.72.87 1.71 1.92c0 1.05-.76 1.91-1.71 1.91Zm5.64 0c-.94 0-1.71-.86-1.71-1.91s.76-1.92 1.71-1.92 1.72.87 1.71 1.92c0 1.05-.76 1.91-1.71 1.91Z"]),
    Slack: F(["M5.04 14.7a2.1 2.1 0 1 1-2.1-2.1h2.1v2.1Zm1.06 0a2.1 2.1 0 0 1 4.2 0v5.26a2.1 2.1 0 1 1-4.2 0V14.7ZM9.3 5.04a2.1 2.1 0 1 1 2.1-2.1v2.1H9.3Zm0 1.06a2.1 2.1 0 0 1 0 4.2H4.04a2.1 2.1 0 1 1 0-4.2H9.3Zm9.66 4.2a2.1 2.1 0 1 1 2.1 2.1h-2.1v-2.1Zm-1.06 0a2.1 2.1 0 0 1-4.2 0V4.04a2.1 2.1 0 1 1 4.2 0V10.3Zm-3.16 8.66a2.1 2.1 0 1 1-2.1 2.1v-2.1h2.1Zm0-1.06a2.1 2.1 0 0 1 0-4.2h5.26a2.1 2.1 0 1 1 0 4.2H14.7Z"]),
    WhatsApp: F(["M12.01 2C6.5 2 2.02 6.48 2.02 11.99c0 1.76.46 3.48 1.34 5L2 22l5.13-1.34a9.96 9.96 0 0 0 4.88 1.25h.01c5.5 0 9.98-4.48 9.98-9.99C22 6.48 17.52 2 12.01 2Zm5.84 14.2c-.25.69-1.44 1.32-1.99 1.37-.51.05-1.15.21-3.72-.78-3.13-1.23-5.12-4.42-5.28-4.63-.15-.21-1.26-1.68-1.26-3.2 0-1.52.8-2.27 1.08-2.58.25-.28.55-.35.74-.35.18 0 .37 0 .53.01.17.01.4-.07.62.47.25.6.84 2.08.91 2.23.07.15.12.32.02.52-.1.21-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.31-.13.62.18.3.79 1.3 1.69 2.11 1.17 1.04 2.15 1.36 2.46 1.51.31.15.49.13.67-.08.18-.21.77-.9.98-1.21.21-.31.41-.25.69-.15.28.1 1.76.83 2.07.98.31.15.51.23.59.36.07.13.07.74-.18 1.43Z"]),
    GoogleChat: F(["M4 2h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5l-5 4v-4H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"]),
    Signal: F(["M12 1.5a10.5 10.5 0 0 0-8.9 16.06l-1.07 3.3 3.36-1.05A10.5 10.5 0 1 0 12 1.5Zm0 2a8.5 8.5 0 1 1-4.4 15.77l-.4-.24-1.62.5.52-1.58-.25-.4A8.5 8.5 0 0 1 12 3.5Z"]),
    Matrix: F(["M2 2v20h2v-1H3V3h1V2H2Zm3.6 4.2v11.6h1.9v-6.2c0-1 .5-1.7 1.4-1.7.8 0 1.2.6 1.2 1.6v6.3h1.9v-6.3c0-1 .5-1.6 1.4-1.6.8 0 1.2.5 1.2 1.6v6.3h1.9v-6.8c0-1.9-1-2.9-2.6-2.9-1.1 0-2 .5-2.5 1.4-.4-.9-1.2-1.4-2.3-1.4-1 0-1.8.5-2.2 1.3v-1.1H5.6ZM20 2v1h1v18h-1v1h2V2h-2Z"]),
    Mattermost: F(["M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm3.4 14.3c-1.9 1.5-4.6 1.4-6.3-.2-1.9-1.8-2-4.8-.3-7l.1 3.2c0 1.4.9 2.6 2.3 2.9 1.8.4 3.4-.8 3.6-2.5l.2-5.9 1.4 1.7c1.5 2.4 1.1 5.9-1 7.8l-.1.2Z"])
  };

  // Brand winged glyph — Hermes. amber wings flanking a caduceus staff.
  function HermesGlyph(p) {
    const size = p && p.size || 40;
    const flap = p && p.flap;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      fill: "none",
      "aria-hidden": "true",
      className: "ag-glyph ag-hermes" + (flap ? " anim" : ""),
      style: p && p.style
    }, [
    // left wing
    React.createElement("path", {
      key: "wl",
      className: flap ? "wing-l" : "",
      d: "M23 16 C16 13 9 13 4 17 C9 17 10 19 8 21 C12 19 14 20 13 23 C16 20 19 19 23 21 Z",
      fill: "var(--accent)",
      opacity: ".92"
    }),
    // right wing
    React.createElement("path", {
      key: "wr",
      className: flap ? "wing-r" : "",
      d: "M25 16 C32 13 39 13 44 17 C39 17 38 19 40 21 C36 19 34 20 35 23 C32 20 29 19 25 21 Z",
      fill: "var(--accent)",
      opacity: ".92"
    }),
    // staff
    React.createElement("path", {
      key: "st",
      d: "M24 14 L24 40",
      stroke: "var(--accent-deep)",
      strokeWidth: 3,
      strokeLinecap: "round"
    }),
    // orb
    React.createElement("circle", {
      key: "or",
      cx: 24,
      cy: 11,
      r: 4,
      fill: "var(--accent-deep)"
    }), React.createElement("circle", {
      key: "or2",
      cx: 22.6,
      cy: 9.6,
      r: 1.2,
      fill: "rgba(255,255,255,.55)"
    }),
    // entwined coils
    React.createElement("path", {
      key: "c1",
      d: "M24 22 C19 24 29 28 24 30 C19 32 29 36 24 38",
      stroke: "var(--accent)",
      strokeWidth: 2.4,
      strokeLinecap: "round"
    })]);
  }

  // ---- per-agent brand glyphs (each has its own cute thinking animation) ----
  // OpenClaw: a brand-red claw creature that breathes, snaps its pincers, turns in
  // pseudo-3D, and throws off rising sparks while thinking (OpenClaw "dreaming" vibe).
  function OpenClawGlyph(p) {
    const size = p && p.size || 40,
      anim = p && p.flap;
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      className: "ag-glyph ag-oc" + (anim ? " anim" : ""),
      style: p && p.style,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "ocg",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0",
      stopColor: "#ff5c5c"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "1",
      stopColor: "#991b1b"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      id: "ocglow",
      cx: "0.5",
      cy: "0.5",
      r: "0.5"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0",
      stopColor: "#ff5c5c",
      stopOpacity: "0.55"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "1",
      stopColor: "#ff5c5c",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("circle", {
      className: "oc-glow",
      cx: "12",
      cy: "12",
      r: "9",
      fill: "url(#ocglow)"
    }), /*#__PURE__*/React.createElement("g", {
      className: "oc-mark"
    }, /*#__PURE__*/React.createElement("g", {
      className: "oc-body"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "12",
      cy: "13",
      rx: "5",
      ry: "6",
      fill: "url(#ocg)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "10.5",
      r: "1.05",
      fill: "#2a0808"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "10.5",
      r: "1.05",
      fill: "#2a0808"
    }), /*#__PURE__*/React.createElement("path", {
      className: "oc-claw-top",
      d: "M8 8 C4 6 2.2 7.5 2.6 10 C2.9 8 4.5 7.4 6 7.9 C7.1 8.3 7.6 8.1 8 8Z",
      fill: "url(#ocg)"
    }), /*#__PURE__*/React.createElement("path", {
      className: "oc-claw-bot",
      d: "M8 8 C5 9.4 3.4 11.6 4.4 13.6 C4.5 11.6 5.8 10.4 7.2 9.6 C8 9.1 8 8.5 8 8Z",
      fill: "url(#ocg)"
    }), /*#__PURE__*/React.createElement("path", {
      className: "oc-claw-top",
      style: {
        transformOrigin: "16px 8px",
        animationName: "oc-pinch-low"
      },
      d: "M16 8 C20 6 21.8 7.5 21.4 10 C21.1 8 19.5 7.4 18 7.9 C16.9 8.3 16.4 8.1 16 8Z",
      fill: "url(#ocg)"
    }), /*#__PURE__*/React.createElement("path", {
      className: "oc-claw-bot",
      style: {
        transformOrigin: "16px 8px",
        animationName: "oc-pinch"
      },
      d: "M16 8 C19 9.4 20.6 11.6 19.6 13.6 C19.5 11.6 18.2 10.4 16.8 9.6 C16 9.1 16 8.5 16 8Z",
      fill: "url(#ocg)"
    }))), /*#__PURE__*/React.createElement("circle", {
      className: "oc-spark s1",
      cx: "17",
      cy: "6",
      r: "1",
      fill: "#ff5c5c"
    }), /*#__PURE__*/React.createElement("circle", {
      className: "oc-spark s2",
      cx: "6",
      cy: "6",
      r: "0.9",
      fill: "#ff7a7a"
    }), /*#__PURE__*/React.createElement("circle", {
      className: "oc-spark s3",
      cx: "12",
      cy: "3",
      r: "0.8",
      fill: "#ff5c5c"
    }));
  }

  // Generic / other agents: a sparkle that pulses while three idea-dots orbit it.
  function GenericGlyph(p) {
    const size = p && p.size || 40,
      anim = p && p.flap;
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      className: "ag-glyph ag-gen" + (anim ? " anim" : ""),
      style: p && p.style,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      className: "gen-ring",
      cx: "12",
      cy: "12",
      r: "8",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1",
      strokeOpacity: "0.3",
      strokeDasharray: "1.6 2.4",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("g", {
      className: "gen-orbit"
    }, /*#__PURE__*/React.createElement("circle", {
      className: "gen-dot gen-d1",
      cx: "12",
      cy: "4",
      r: "1.15",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      className: "gen-dot gen-d2",
      cx: "18.93",
      cy: "16",
      r: "1.15",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      className: "gen-dot gen-d3",
      cx: "5.07",
      cy: "16",
      r: "1.15",
      fill: "currentColor"
    })), /*#__PURE__*/React.createElement("g", {
      className: "gen-spark"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 6.5 C12.55 10.3 13.7 11.45 17.5 12 C13.7 12.55 12.55 13.7 12 17.5 C11.45 13.7 10.3 12.55 6.5 12 C10.3 11.45 11.45 10.3 12 6.5 Z",
      fill: "var(--accent, currentColor)"
    })));
  }

  // Pick the glyph for the active agent (kind prop, else the live global).
  function AgentGlyph(p) {
    const kind = p && p.kind || typeof window !== "undefined" && window.__agentKind || "hermes";
    if (kind === "openclaw") return /*#__PURE__*/React.createElement(OpenClawGlyph, p);
    if (kind && kind !== "hermes") return /*#__PURE__*/React.createElement(GenericGlyph, p);
    return /*#__PURE__*/React.createElement(HermesGlyph, p);
  }
  function agentBrandName(kind) {
    return kind === "openclaw" ? "OpenClaw" : kind && kind !== "hermes" ? "AgentBay" : "Hermes";
  }
  window.OpenClawGlyph = OpenClawGlyph;
  window.GenericGlyph = GenericGlyph;
  window.AgentGlyph = AgentGlyph;
  window.agentBrandName = agentBrandName;
  function Mascot(p) {
    const label = p && p.label || "Thinking";
    return React.createElement("span", {
      className: "mascot"
    }, [React.createElement("span", {
      key: "g",
      className: "glyph"
    }, React.createElement(HermesGlyph, {
      size: 26,
      flap: true
    })), React.createElement("span", {
      key: "l",
      className: "label"
    }, React.createElement("span", {
      className: "shimmer-text"
    }, label + "…"))]);
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
  const PROVIDER_ICON = {
    openai: "Sparkle",
    anthropic: "Brain",
    deepseek: "Wand",
    gemini: "Globe",
    groq: "Zap",
    openrouter: "Layers",
    mistral: "Bot",
    nous: "Gift",
    local: "Server",
    agent: "Bot"
  };
  // When every model runs through the on-device agent they share provider "agent";
  // pick the icon from the underlying provider label instead.
  const LABEL_ICON = {
    "Nous Portal": "Gift",
    "AWS Bedrock": "Layers",
    "GitHub Copilot": "Sparkle",
    "Custom endpoint": "Server",
    "On this device": "Server"
  };
  const MODELS = []; // mutated in place by refreshModels() so references hold
  function refreshModels() {
    return fetch("/api/enabled-models").then(r => r.json()).then(d => {
      MODELS.length = 0;
      (d.models || []).forEach(m => MODELS.push({
        id: m.provider + "::" + m.model,
        name: m.label || m.model,
        desc: m.provider_label,
        group: m.provider_label || "Models",
        icon: LABEL_ICON[m.provider_label] || PROVIDER_ICON[m.provider] || "Bot",
        provider: m.provider,
        model: m.model
      }));
      return MODELS;
    }).catch(() => MODELS);
  }
  const TALL = n => Array.from({
    length: n
  });

  // suggestion cards (randomized per session)
  const SUGGESTIONS = [{
    icon: "BookOpen",
    t1: "Help me study",
    t2: "Make flashcards from my notes",
    prompt: "Help me study for a biology exam on cell structure. Make me 5 flashcards."
  }, {
    icon: "Lightbulb",
    t1: "Tell me a fun fact",
    t2: "Something surprising about space",
    prompt: "Tell me a genuinely surprising fun fact about the ocean."
  }, {
    icon: "Code",
    t1: "Show me a code snippet",
    t2: "A debounce function in JS",
    prompt: "Show me a clean debounce function in JavaScript and explain how it works."
  }, {
    icon: "Type",
    t1: "Help me write",
    t2: "Polish a tricky email",
    prompt: "Help me write a friendly but firm email asking a client to pay an overdue invoice."
  }, {
    icon: "Brain",
    t1: "Explain a concept",
    t2: "Like I'm five",
    prompt: "Explain how vaccines work like I'm five years old."
  }, {
    icon: "Sparkle",
    t1: "Brainstorm ideas",
    t2: "Names for a coffee shop",
    prompt: "Brainstorm 10 cozy, original names for a neighborhood coffee shop."
  }];
  function pickSuggestions() {
    const a = [...SUGGESTIONS];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.random() * (i + 1) | 0;
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, 3);
  }
  const GROUP_ORDER = ["Today", "Yesterday", "Previous 7 Days", "Previous 30 Days", "Older"];

  // ---- minimal, safe markdown renderer → HTML string ----
  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
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
    let html = "",
      i = 0;
    let codeId = 0;
    while (i < lines.length) {
      const line = lines[i];
      // code fence
      const fence = line.match(/^```(\w*)/);
      if (fence) {
        const lang = fence[1] || "text";
        const buf = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) {
          buf.push(lines[i]);
          i++;
        }
        i++;
        const id = "cb" + codeId++ + "_" + (Math.random() * 1e6 | 0);
        const code = esc(buf.join("\n"));
        html += `<div class="codeblock"><div class="codeblock-head"><span>${lang}</span><button class="copy-float" data-copy="${id}"><span class="cf-ic"></span><span class="cf-tx">Copy</span></button></div><pre><code id="${id}" class="language-${lang}">${code}</code></pre></div>`;
        continue;
      }
      // GFM table: a header row of cells, then a |---|:--:| separator, then body rows
      if (line.includes("|") && i + 1 < lines.length && /^\s*\|?[\s:|-]*-[\s:|-]*\|[\s:|-]*$/.test(lines[i + 1])) {
        const cells = r => {
          let t = r.trim();
          if (t.startsWith("|")) t = t.slice(1);
          if (t.endsWith("|")) t = t.slice(0, -1);
          return t.split("|").map(c => c.trim());
        };
        const headers = cells(line);
        const aligns = cells(lines[i + 1]).map(s => {
          const l = s.startsWith(":"),
            r = s.endsWith(":");
          return l && r ? "center" : r ? "right" : l ? "left" : "";
        });
        i += 2;
        const body = [];
        while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") {
          body.push(cells(lines[i]));
          i++;
        }
        const al = ci => aligns[ci] ? ` style="text-align:${aligns[ci]}"` : "";
        const thead = "<thead><tr>" + headers.map((c, ci) => `<th${al(ci)}>${inline(c)}</th>`).join("") + "</tr></thead>";
        const tbody = "<tbody>" + body.map(row => "<tr>" + headers.map((_, ci) => `<td${al(ci)}>${inline(row[ci] || "")}</td>`).join("") + "</tr>").join("") + "</tbody>";
        html += `<div class="md-table"><table>${thead}${tbody}</table></div>`;
        continue;
      }
      // headings
      const h = line.match(/^(#{1,3})\s+(.*)/);
      if (h) {
        const lvl = h[1].length;
        html += `<h${lvl}>${inline(h[2])}</h${lvl}>`;
        i++;
        continue;
      }
      // hr
      if (/^---+$/.test(line)) {
        html += "<hr/>";
        i++;
        continue;
      }
      // blockquote
      if (/^>\s?/.test(line)) {
        const buf = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          buf.push(lines[i].replace(/^>\s?/, ""));
          i++;
        }
        html += `<blockquote>${renderMarkdown(buf.join("\n"))}</blockquote>`;
        continue;
      }
      // unordered list
      if (/^\s*[-*]\s+/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          buf.push(lines[i].replace(/^\s*[-*]\s+/, ""));
          i++;
        }
        html += "<ul>" + buf.map(b => `<li>${inline(b)}</li>`).join("") + "</ul>";
        continue;
      }
      // ordered list
      if (/^\s*\d+\.\s+/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          buf.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
          i++;
        }
        html += "<ol>" + buf.map(b => `<li>${inline(b)}</li>`).join("") + "</ol>";
        continue;
      }
      // blank
      if (line.trim() === "") {
        i++;
        continue;
      }
      // paragraph
      const buf = [line];
      i++;
      while (i < lines.length && lines[i].trim() !== "" && !/^(#{1,3}\s|```|>|\s*[-*]\s|\s*\d+\.\s|---+$)/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      html += `<p>${inline(buf.join(" "))}</p>`;
    }
    return html;
  }

  // Post-render enhancement: syntax-highlight code + typeset math. Runs after the
  // markdown HTML is in the DOM; retries briefly while the CDN libs finish loading.
  function enhanceRich(el, opts) {
    if (!el || !el.isConnected) return;
    const o = opts || {};
    let ready = true;
    try {
      if (o.code !== false && window.hljs) {
        el.querySelectorAll("pre code").forEach(b => {
          if (!b.dataset.hl) {
            try {
              window.hljs.highlightElement(b);
            } catch (e) {}
            b.dataset.hl = "1";
          }
        });
      } else {
        ready = false;
      }
    } catch (e) {}
    try {
      if (o.latex !== false && window.renderMathInElement) {
        window.renderMathInElement(el, {
          delimiters: [{
            left: "$$",
            right: "$$",
            display: true
          }, {
            left: "\\[",
            right: "\\]",
            display: true
          }, {
            left: "\\(",
            right: "\\)",
            display: false
          }],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
        });
      } else {
        ready = false;
      }
    } catch (e) {}
    // mermaid diagrams: ```mermaid fenced blocks → rendered SVG
    try {
      const mer = el.querySelectorAll("code.language-mermaid");
      if (mer.length) {
        if (window.mermaid) {
          const dark = document.documentElement.getAttribute("data-theme") === "dark";
          try {
            window.mermaid.initialize({
              startOnLoad: false,
              theme: dark ? "dark" : "default",
              securityLevel: "strict"
            });
          } catch (e) {}
          mer.forEach((c, i) => {
            const block = c.closest(".codeblock") || c;
            if (block.dataset.mer) return;
            block.dataset.mer = "1";
            const src = c.textContent;
            const id = "mer-" + Date.now() % 1e7 + "-" + i;
            Promise.resolve().then(() => window.mermaid.render(id, src)).then(({
              svg
            }) => {
              const d = document.createElement("div");
              d.className = "md-mermaid";
              d.innerHTML = svg;
              if (block.isConnected) block.replaceWith(d);
            }).catch(() => {
              delete block.dataset.mer;
            });
          });
        } else {
          ready = false;
        }
      }
    } catch (e) {}
    if (!ready) setTimeout(() => enhanceRich(el), 400); // libs still loading
  }
  window.HermesData = {
    MODELS,
    SUGGESTIONS,
    GROUP_ORDER,
    refreshModels,
    PROVIDER_ICON,
    pickSuggestions,
    renderMarkdown,
    enhanceRich
  };
})();

/* ==================== js/ui.jsx ==================== */
/* Hermes — ui.jsx : shared primitives (Modal, Toasts, Confetti, Popover, hooks) */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useCallback,
    createContext,
    useContext
  } = React;
  const I = window.Icons;

  /* ---------- Modal ---------- */
  function Modal({
    children,
    onClose,
    width = 520,
    className = "",
    labelledBy
  }) {
    useEffect(() => {
      const onKey = e => {
        if (e.key === "Escape") {
          e.stopPropagation();
          onClose && onClose();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
    return /*#__PURE__*/React.createElement("div", {
      className: "overlay",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": labelledBy
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay-scrim",
      onClick: onClose
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal " + className,
      style: {
        maxWidth: width
      },
      onClick: e => e.stopPropagation()
    }, children));
  }
  function ModalHead({
    title,
    onClose,
    id
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h2", {
      id: id
    }, title), /*#__PURE__*/React.createElement("button", {
      className: "x-btn",
      "aria-label": "Close",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 18
    })));
  }

  /* ---------- Toasts ---------- */
  const ToastCtx = createContext(null);
  function useToast() {
    return useContext(ToastCtx);
  }
  function ToastProvider({
    children
  }) {
    const [toasts, setToasts] = useState([]);
    const push = useCallback(t => {
      const id = Math.random().toString(36).slice(2);
      setToasts(x => [...x, {
        id,
        type: "info",
        ...t
      }]);
      const dur = t.duration || 4000;
      setTimeout(() => setToasts(x => x.filter(y => y.id !== id)), dur);
    }, []);
    const remove = id => setToasts(x => x.filter(y => y.id !== id));
    const icon = {
      success: /*#__PURE__*/React.createElement(I.Check, {
        size: 13
      }),
      error: /*#__PURE__*/React.createElement(I.X, {
        size: 13
      }),
      info: /*#__PURE__*/React.createElement(I.Info, {
        size: 13
      })
    };
    return /*#__PURE__*/React.createElement(ToastCtx.Provider, {
      value: push
    }, children, /*#__PURE__*/React.createElement("div", {
      className: "toasts",
      "aria-live": "polite"
    }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "toast " + t.type,
      onClick: () => remove(t.id),
      role: "status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ti"
    }, icon[t.type]), /*#__PURE__*/React.createElement("span", {
      className: "tx"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tt"
    }, t.title), t.desc && /*#__PURE__*/React.createElement("span", {
      className: "td"
    }, t.desc))))));
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
      p.style.top = -10 - Math.random() * 20 + "px";
      p.style.width = size + "px";
      p.style.height = size * 1.4 + "px";
      p.style.background = colors[Math.random() * colors.length | 0];
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
  function Popover({
    anchorRef,
    onClose,
    children,
    align = "left",
    side = "bottom",
    className = "",
    offset = 6,
    width
  }) {
    const ref = useRef(null);
    const [pos, setPos] = useState(null);
    useEffect(() => {
      const place = () => {
        const a = anchorRef.current;
        if (!a) return;
        const r = a.getBoundingClientRect();
        const pop = ref.current;
        const pw = pop ? pop.offsetWidth : width || 220;
        const ph = pop ? pop.offsetHeight : 200;
        let top = side === "top" ? r.top - ph - offset : r.bottom + offset;
        let left = align === "right" ? r.right - pw : r.left;
        // clamp
        left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
        if (top + ph > window.innerHeight - 8) top = Math.max(8, r.top - ph - offset);
        top = Math.max(8, top);
        setPos({
          top,
          left
        });
      };
      place();
      const onDoc = e => {
        if (ref.current && !ref.current.contains(e.target) && anchorRef.current && !anchorRef.current.contains(e.target)) onClose && onClose();
      };
      const onKey = e => {
        if (e.key === "Escape") onClose && onClose();
      };
      const t = setTimeout(() => document.addEventListener("mousedown", onDoc), 0);
      window.addEventListener("keydown", onKey);
      window.addEventListener("resize", place);
      window.addEventListener("scroll", place, true);
      return () => {
        clearTimeout(t);
        document.removeEventListener("mousedown", onDoc);
        window.removeEventListener("keydown", onKey);
        window.removeEventListener("resize", place);
        window.removeEventListener("scroll", place, true);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "popover " + className,
      style: {
        top: pos ? pos.top : -9999,
        left: pos ? pos.left : -9999,
        width
      },
      role: "menu"
    }, children);
  }

  /* ---------- Switch ---------- */
  function Switch({
    on,
    onChange,
    label
  }) {
    return /*#__PURE__*/React.createElement("button", {
      className: "switch " + (on ? "on" : ""),
      role: "switch",
      "aria-checked": on,
      "aria-label": label,
      onClick: () => onChange(!on)
    }, /*#__PURE__*/React.createElement("span", {
      className: "knob"
    }));
  }

  /* ---------- Segmented ---------- */
  function Segmented({
    value,
    onChange,
    options
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "segmented",
      role: "tablist"
    }, options.map(o => /*#__PURE__*/React.createElement("button", {
      key: o.value,
      className: value === o.value ? "active" : "",
      role: "tab",
      "aria-selected": value === o.value,
      onClick: () => onChange(o.value)
    }, o.label)));
  }

  /* ---------- useLocalState ---------- */
  function useLocal(key, initial) {
    const [v, setV] = useState(() => {
      try {
        const s = localStorage.getItem(key);
        return s !== null ? JSON.parse(s) : initial;
      } catch {
        return initial;
      }
    });
    useEffect(() => {
      try {
        localStorage.setItem(key, JSON.stringify(v));
      } catch {}
    }, [key, v]);
    return [v, setV];
  }
  function relTime(ms) {
    const d = Date.now() - ms,
      m = d / 6e4,
      h = m / 60,
      day = h / 24;
    if (m < 1) return "just now";
    if (h < 1) return Math.floor(m) + "m ago";
    if (day < 1) return Math.floor(h) + "h ago";
    if (day < 7) return Math.floor(day) + "d ago";
    return new Date(ms).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric"
    });
  }
  window.UI = {
    Modal,
    ModalHead,
    ToastProvider,
    useToast,
    fireConfetti,
    Popover,
    Switch,
    Segmented,
    useLocal,
    relTime
  };
})();

/* ==================== js/sidebar.jsx ==================== */
/* Hermes — sidebar.jsx : left rail (S4) */
(function () {
  const {
    useState,
    useRef,
    useEffect
  } = React;
  const I = window.Icons;
  const {
    Popover,
    relTime
  } = window.UI;
  function ChatRow({
    s,
    active,
    onOpen,
    onMenu
  }) {
    const btnRef = useRef(null);
    return /*#__PURE__*/React.createElement("div", {
      className: "chat-row" + (active ? " active" : ""),
      onClick: () => onOpen(s.id),
      title: s.title
    }, s.pinned && /*#__PURE__*/React.createElement("span", {
      className: "pin"
    }, /*#__PURE__*/React.createElement(I.Pin, {
      size: 12
    })), /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, s.title), /*#__PURE__*/React.createElement("button", {
      ref: btnRef,
      className: "row-menu",
      "aria-label": "Chat options",
      onClick: e => {
        e.stopPropagation();
        onMenu(s, btnRef);
      }
    }, /*#__PURE__*/React.createElement(I.MoreHorizontal, {
      size: 16
    })));
  }
  function Sidebar(props) {
    const {
      collapsed,
      mobileOpen,
      sessions,
      activeId,
      folders,
      onNewChat,
      onOpenChat,
      onOpenSearch,
      onOpenNotes,
      onOpenProjects,
      onOpenAgents,
      showAgents,
      onOpenSkills,
      showSkills,
      onOpenDashboard,
      showDashboard,
      agentKind,
      onNewFolder,
      onChatMenu,
      onToggleCollapse,
      user,
      onUserClick,
      onResize,
      groupOrder,
      theme
    } = props;
    const [filter, setFilter] = useState("");
    const userRef = useRef(null);
    const filtered = sessions.filter(s => !filter || s.title.toLowerCase().includes(filter.toLowerCase()));
    const pinned = filtered.filter(s => s.pinned);
    const groups = {};
    filtered.filter(s => !s.pinned).forEach(s => {
      (groups[s.group] = groups[s.group] || []).push(s);
    });

    // drag resize
    const resizing = useRef(false);
    useEffect(() => {
      const move = e => {
        if (resizing.current) onResize(e.clientX);
      };
      const up = () => {
        resizing.current = false;
        document.body.style.cursor = "";
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
      return () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };
    }, [onResize]);
    return /*#__PURE__*/React.createElement("aside", {
      className: "sidebar" + (collapsed ? " collapsed" : "") + (mobileOpen ? " mobile-open" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "sb-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sb-wordmark"
    }, /*#__PURE__*/React.createElement(window.AgentGlyph, {
      kind: agentKind,
      size: 26
    }), !collapsed && /*#__PURE__*/React.createElement("span", {
      className: "sb-wordmark-text"
    }, window.agentBrandName ? window.agentBrandName(agentKind) : "Hermes")), /*#__PURE__*/React.createElement("button", {
      className: "sb-iconbtn",
      "aria-label": "Toggle sidebar",
      onClick: onToggleCollapse
    }, /*#__PURE__*/React.createElement(I.PanelLeft, {
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      className: "sb-scroll"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sb-item sb-new",
      onClick: onNewChat
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Pencil, {
      size: 17
    })), /*#__PURE__*/React.createElement("span", null, "New Chat")), /*#__PURE__*/React.createElement("button", {
      className: "sb-item",
      onClick: onOpenSearch
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Search, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-label"
    }, "Search"), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        fontSize: 11,
        color: "var(--text-faint)"
      }
    }, "\u2318K")), showDashboard && /*#__PURE__*/React.createElement("button", {
      className: "sb-item",
      onClick: onOpenDashboard
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Chart, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-label"
    }, "Dashboard")), /*#__PURE__*/React.createElement("button", {
      className: "sb-item",
      onClick: onOpenNotes
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Notebook, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-label"
    }, "Notes")), /*#__PURE__*/React.createElement("button", {
      className: "sb-item",
      onClick: onOpenProjects
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Folder, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-label"
    }, "Projects")), showAgents && /*#__PURE__*/React.createElement("button", {
      className: "sb-item",
      onClick: onOpenAgents
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Bot, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-label"
    }, "Agents")), showSkills && /*#__PURE__*/React.createElement("button", {
      className: "sb-item",
      onClick: onOpenSkills
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Wand, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-label"
    }, "Skills")), !collapsed && folders.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "sb-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sb-section-h"
    }, /*#__PURE__*/React.createElement("span", null, "Folders"), /*#__PURE__*/React.createElement("button", {
      className: "sb-iconbtn",
      style: {
        width: 22,
        height: 22
      },
      "aria-label": "New folder",
      onClick: onNewFolder
    }, /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    }))), folders.map(f => /*#__PURE__*/React.createElement("button", {
      key: f.name,
      className: "sb-item",
      style: {
        paddingTop: 6,
        paddingBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Folder, {
      size: 17,
      style: {
        color: f.color
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "sb-label"
    }, f.name)))), !collapsed && /*#__PURE__*/React.createElement("div", {
      className: "sb-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sb-section-h"
    }, /*#__PURE__*/React.createElement("span", null, "Chats")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 2px 6px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 9px",
        borderRadius: 8,
        background: "var(--field-bg-2)",
        color: "var(--text-3)"
      }
    }, /*#__PURE__*/React.createElement(I.Filter, {
      size: 13
    }), /*#__PURE__*/React.createElement("input", {
      value: filter,
      onChange: e => setFilter(e.target.value),
      placeholder: "Filter chats",
      style: {
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: 13,
        width: "100%"
      }
    }))), pinned.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "chat-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "chat-group-label"
    }, "Pinned"), pinned.map(s => /*#__PURE__*/React.createElement(ChatRow, {
      key: s.id,
      s: s,
      active: s.id === activeId,
      onOpen: onOpenChat,
      onMenu: onChatMenu
    }))), groupOrder.map(g => groups[g] && groups[g].length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "chat-group",
      key: g
    }, /*#__PURE__*/React.createElement("div", {
      className: "chat-group-label"
    }, g), groups[g].map(s => /*#__PURE__*/React.createElement(ChatRow, {
      key: s.id,
      s: s,
      active: s.id === activeId,
      onOpen: onOpenChat,
      onMenu: onChatMenu
    })))), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 12px",
        fontSize: 13,
        color: "var(--text-3)",
        textAlign: "center"
      }
    }, "No chats match."))), /*#__PURE__*/React.createElement("button", {
      ref: userRef,
      className: "sb-user",
      onClick: () => onUserClick(userRef),
      "aria-label": "Account menu"
    }, /*#__PURE__*/React.createElement("span", {
      className: "avatar"
    }, user.initials), !collapsed && /*#__PURE__*/React.createElement("span", {
      className: "sb-user-text"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nm"
    }, user.name), /*#__PURE__*/React.createElement("div", {
      className: "rl"
    }, user.role)), !collapsed && /*#__PURE__*/React.createElement(I.ChevronUp, {
      size: 15,
      style: {
        color: "var(--text-3)"
      }
    })), !collapsed && /*#__PURE__*/React.createElement("div", {
      className: "sb-resize",
      onMouseDown: () => {
        resizing.current = true;
        document.body.style.cursor = "col-resize";
      }
    }));
  }
  window.Sidebar = Sidebar;
})();

/* ==================== js/chat.jsx ==================== */
/* Hermes — chat.jsx : thread, messages, home, composer, mic overlay */
(function () {
  const {
    useState,
    useRef,
    useEffect,
    useLayoutEffect
  } = React;
  const I = window.Icons;
  const D = window.HermesData;
  function modelMeta(id) {
    // Don't fall back to MODELS[0] for an unknown/stale id — that would show the
    // WRONG model's name. Derive the name from the id itself instead.
    return D.MODELS.find(m => m.id === id) || {
      id: id || "",
      name: id ? String(id).split("::").pop() : "No model — add one in Settings",
      icon: "Bot",
      provider: "",
      model: ""
    };
  }

  /* ---------- Assistant activity ("Thought for X") ---------- */
  function Activity({
    seconds
  }) {
    // Honest, non-expandable latency label (no fabricated reasoning trace).
    return /*#__PURE__*/React.createElement("div", {
      className: "activity"
    }, /*#__PURE__*/React.createElement("div", {
      className: "activity-head",
      style: {
        cursor: "default"
      }
    }, /*#__PURE__*/React.createElement(I.Sparkle, {
      size: 14,
      style: {
        color: "var(--accent-deep)"
      }
    }), /*#__PURE__*/React.createElement("span", null, "Responded in ", seconds, " second", seconds === 1 ? "" : "s")));
  }

  /* ---------- Message actions row ---------- */
  function Actions({
    onCopy,
    onRegen,
    onListen,
    listening,
    vote,
    onVote,
    onInfo
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "act-btn",
      "aria-label": "Copy",
      onClick: onCopy
    }, /*#__PURE__*/React.createElement(I.Copy, {
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      className: "act-btn" + (listening ? " on-up" : ""),
      "aria-label": "Read aloud",
      onClick: onListen
    }, listening ? /*#__PURE__*/React.createElement(I.Pause, {
      size: 15
    }) : /*#__PURE__*/React.createElement(I.Volume, {
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      className: "act-btn",
      "aria-label": "Info",
      onClick: onInfo
    }, /*#__PURE__*/React.createElement(I.Info, {
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      className: "act-btn" + (vote === 1 ? " on-up" : ""),
      "aria-label": "Good response",
      onClick: () => onVote(1)
    }, /*#__PURE__*/React.createElement(I.ThumbsUp, {
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      className: "act-btn" + (vote === -1 ? " on-down" : ""),
      "aria-label": "Bad response",
      onClick: () => onVote(-1)
    }, /*#__PURE__*/React.createElement(I.ThumbsDown, {
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      className: "act-btn",
      "aria-label": "Regenerate",
      onClick: onRegen
    }, /*#__PURE__*/React.createElement(I.Refresh, {
      size: 15
    })), /*#__PURE__*/React.createElement("button", {
      className: "act-btn",
      "aria-label": "More"
    }, /*#__PURE__*/React.createElement(I.MoreHorizontal, {
      size: 15
    })));
  }

  /* ---------- A single assistant turn ---------- */
  function AssistantTurn({
    msg,
    streaming,
    isLast,
    onFollowup,
    onToast,
    showTimestamps,
    showThinking,
    showTools,
    showUsage,
    onRegen,
    onRetry,
    avatars,
    latex,
    codeBlocks
  }) {
    const meta = modelMeta(msg.model);
    const Ic = I[meta.icon] || I.Bot;
    const [vote, setVote] = useState(0);
    const [listening, setListening] = useState(false);
    const mdRef = useRef(null);
    const isErr = !streaming && typeof msg.content === "string" && msg.content.trim().startsWith("⚠");
    // syntax-highlight code + typeset math once the reply has settled (respect the Settings toggles)
    useEffect(() => {
      if (!streaming && mdRef.current) D.enhanceRich(mdRef.current, {
        code: codeBlocks !== false,
        latex: latex !== false
      });
    }, [msg.content, streaming]);
    const copy = () => {
      navigator.clipboard && navigator.clipboard.writeText(msg.content);
      onToast({
        type: "success",
        title: "Copied to clipboard"
      });
    };
    const listen = () => {
      try {
        if (listening) {
          speechSynthesis.cancel();
          setListening(false);
          return;
        }
        const u = new SpeechSynthesisUtterance(msg.content.replace(/[#*`>]/g, "").slice(0, 600));
        u.onend = () => setListening(false);
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
        setListening(true);
      } catch {
        onToast({
          type: "info",
          title: "Text-to-speech unavailable"
        });
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "turn assistant anim-fadeup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "assistant-head"
    }, avatars !== false && /*#__PURE__*/React.createElement("span", {
      className: "am-icon"
    }, /*#__PURE__*/React.createElement(window.AgentGlyph, {
      size: 17,
      flap: !!streaming
    })), /*#__PURE__*/React.createElement("span", {
      className: "am-name"
    }, meta.name), streaming && !msg.content && /*#__PURE__*/React.createElement("span", {
      className: "am-thinking shimmer-text"
    }, "Thinking\u2026"), showTimestamps && msg.ts && /*#__PURE__*/React.createElement("span", {
      className: "ts"
    }, msg.ts)), msg.thought ? /*#__PURE__*/React.createElement(Activity, {
      seconds: msg.thought
    }) : null, msg.plan && msg.plan.length ? (() => {
      const done = msg.plan.filter(p => p.status === "completed").length;
      return /*#__PURE__*/React.createElement("div", {
        className: "agent-plan" + (done === msg.plan.length ? " agent-plan-done" : "")
      }, /*#__PURE__*/React.createElement("div", {
        className: "agent-plan-h"
      }, /*#__PURE__*/React.createElement(I.CheckCircle, {
        size: 13
      }), " Task plan", /*#__PURE__*/React.createElement("span", {
        className: "agent-plan-count"
      }, done, "/", msg.plan.length)), /*#__PURE__*/React.createElement("div", {
        className: "agent-plan-body"
      }, msg.plan.map((p, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "plan-item plan-" + (p.status || "pending")
      }, /*#__PURE__*/React.createElement("span", {
        className: "plan-tick"
      }, p.status === "completed" ? /*#__PURE__*/React.createElement(I.Check, {
        size: 12
      }) : p.status === "in_progress" ? /*#__PURE__*/React.createElement("span", {
        className: "plan-spin"
      }) : /*#__PURE__*/React.createElement("span", {
        className: "plan-dot"
      })), /*#__PURE__*/React.createElement("span", {
        className: "plan-text"
      }, p.content)))));
    })() : null, showThinking && msg.reasoning ? /*#__PURE__*/React.createElement("details", {
      className: "agent-trace",
      open: streaming
    }, /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement(I.Sparkle, {
      size: 13
    }), " Thinking", streaming ? "…" : ""), /*#__PURE__*/React.createElement("div", {
      className: "agent-trace-body"
    }, msg.reasoning)) : null, showTools && msg.tools && msg.tools.length ? (() => {
      const KIND_IC = {
        read: "FileText",
        edit: "Pencil",
        delete: "Trash",
        move: "File",
        search: "Filter",
        execute: "Command",
        fetch: "Globe",
        think: "Brain",
        other: "Wand"
      };
      const running = msg.tools.filter(t => t.status === "in_progress" || t.status === "pending").length;
      return /*#__PURE__*/React.createElement("details", {
        className: "agent-trace tool-trace",
        open: streaming
      }, /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement(I.Wand, {
        size: 13
      }), " Tools ", /*#__PURE__*/React.createElement("span", {
        className: "trace-count"
      }, msg.tools.length), streaming && running ? /*#__PURE__*/React.createElement("span", {
        className: "tool-spin tool-spin-sm"
      }) : null), /*#__PURE__*/React.createElement("div", {
        className: "agent-trace-body tool-cards"
      }, msg.tools.map((t, i) => {
        const TIcon = I[KIND_IC[t.kind]] || I.Wand;
        const st = t.status || (streaming ? "in_progress" : "completed");
        const out = t.output || (t.args && t.args !== t.input ? t.args : "");
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          className: "tool-card tool-" + st
        }, /*#__PURE__*/React.createElement("div", {
          className: "tool-card-head"
        }, /*#__PURE__*/React.createElement("span", {
          className: "tool-kind-ic"
        }, /*#__PURE__*/React.createElement(TIcon, {
          size: 13
        })), /*#__PURE__*/React.createElement("span", {
          className: "tool-name"
        }, t.name || "tool"), /*#__PURE__*/React.createElement("span", {
          className: "tool-status-ic"
        }, st === "in_progress" || st === "pending" ? /*#__PURE__*/React.createElement("span", {
          className: "tool-spin"
        }) : st === "failed" ? /*#__PURE__*/React.createElement(I.AlertTriangle, {
          size: 12
        }) : /*#__PURE__*/React.createElement(I.Check, {
          size: 12
        }))), t.input ? /*#__PURE__*/React.createElement("div", {
          className: "tool-io tool-in"
        }, /*#__PURE__*/React.createElement("code", null, t.input)) : null, out ? /*#__PURE__*/React.createElement("div", {
          className: "tool-io tool-out"
        }, out.length > 320 ? out.slice(0, 320) + "…" : out) : null);
      })));
    })() : null, streaming && !msg.content ? null : /*#__PURE__*/React.createElement("div", {
      className: "md",
      ref: mdRef,
      dangerouslySetInnerHTML: {
        __html: D.renderMarkdown(msg.content)
      }
    }), isErr && onRegen && /*#__PURE__*/React.createElement("div", {
      className: "err-retry"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      onClick: onRegen
    }, /*#__PURE__*/React.createElement(I.Refresh, {
      size: 14
    }), " Retry")), streaming && msg.content ? /*#__PURE__*/React.createElement("span", {
      className: "typing",
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)) : null, !streaming && /*#__PURE__*/React.createElement(Actions, {
      onCopy: copy,
      onRegen: onRegen,
      onListen: listen,
      listening: listening,
      vote: vote,
      onVote: v => {
        setVote(vote === v ? 0 : v);
        onToast({
          type: v === 1 ? "success" : "info",
          title: v === 1 ? "Thanks for the feedback!" : "Feedback noted"
        });
      },
      onInfo: () => onToast({
        type: "info",
        title: meta.name,
        desc: "Generated in " + (msg.thought || 3) + "s · ~" + Math.max(1, Math.round(msg.content.length / 4)) + " tokens"
      })
    }), showUsage && !streaming && msg.usage && msg.usage.size > 0 ? (() => {
      const fmtTok = n => n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "k" : String(n);
      const pct = Math.min(100, Math.round(msg.usage.used / msg.usage.size * 100));
      return /*#__PURE__*/React.createElement("div", {
        className: "usage-meter" + (pct >= 85 ? " usage-high" : ""),
        title: "Context window: " + msg.usage.used.toLocaleString() + " / " + msg.usage.size.toLocaleString() + " tokens (" + pct + "%)"
      }, /*#__PURE__*/React.createElement(I.Database, {
        size: 11
      }), /*#__PURE__*/React.createElement("span", {
        className: "usage-txt"
      }, fmtTok(msg.usage.used), " / ", fmtTok(msg.usage.size), " ctx"), /*#__PURE__*/React.createElement("span", {
        className: "usage-bar"
      }, /*#__PURE__*/React.createElement("span", {
        className: "usage-fill",
        style: {
          width: pct + "%"
        }
      })));
    })() : null, !streaming && isLast && msg.followups && msg.followups.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "followups anim-fadein"
    }, /*#__PURE__*/React.createElement("div", {
      className: "followups-h"
    }, /*#__PURE__*/React.createElement(I.Sparkle, {
      size: 13
    }), " Follow up"), msg.followups.map((q, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      className: "followup-q",
      onClick: () => onFollowup(q)
    }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
      className: "plus"
    }, /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    }))))));
  }

  /* ---------- Thread ---------- */
  function Thread({
    session,
    streaming,
    onFollowup,
    onToast,
    settings,
    onRegen,
    onEdit
  }) {
    const wrapRef = useRef(null);
    const [showJump, setShowJump] = useState(false);
    const [editing, setEditing] = useState(null); // { idx, text } of the user msg being edited
    const stickRef = useRef(true);

    // code copy via delegation
    useEffect(() => {
      const el = wrapRef.current;
      if (!el) return;
      const handler = e => {
        const btn = e.target.closest(".copy-float");
        if (!btn) return;
        const id = btn.getAttribute("data-copy");
        const code = el.querySelector("#" + CSS.escape(id));
        if (code) {
          navigator.clipboard && navigator.clipboard.writeText(code.textContent);
          btn.classList.add("copied");
          const tx = btn.querySelector(".cf-tx");
          if (tx) tx.textContent = "Copied!";
          setTimeout(() => {
            btn.classList.remove("copied");
            if (tx) tx.textContent = "Copy";
          }, 1400);
        }
      };
      el.addEventListener("click", handler);
      return () => el.removeEventListener("click", handler);
    }, []);
    const scrollToBottom = smooth => {
      const el = wrapRef.current;
      if (!el) return;
      el.scrollTo({
        top: el.scrollHeight,
        behavior: smooth ? "smooth" : "auto"
      });
    };
    useLayoutEffect(() => {
      scrollToBottom(false);
    }, [session && session.id]);
    useEffect(() => {
      if (settings.autoScroll !== false && stickRef.current) scrollToBottom(true);
    }, [session && session.messages.length, streaming && streaming.text]);
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const near = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
      stickRef.current = near;
      setShowJump(!near);
    };
    const msgs = session ? session.messages.slice() : [];
    return /*#__PURE__*/React.createElement("div", {
      className: "thread-wrap",
      ref: wrapRef,
      onScroll: onScroll
    }, /*#__PURE__*/React.createElement("div", {
      className: "thread" + (settings.bubbles ? "" : " bubbles-off")
    }, msgs.map((m, i) => {
      const isLast = i === msgs.length - 1;
      if (m.role === "user") {
        const isEd = editing && editing.idx === i;
        const saveEdit = () => {
          const t = editing.text.trim();
          if (t) {
            onEdit && onEdit(i, t);
          }
          setEditing(null);
        };
        return /*#__PURE__*/React.createElement("div", {
          className: "turn user anim-fadeup",
          key: i
        }, m.images && m.images.length > 0 && /*#__PURE__*/React.createElement("div", {
          className: "user-images"
        }, m.images.map((im, k) => /*#__PURE__*/React.createElement("img", {
          key: k,
          src: im.b64,
          alt: im.name || "image",
          loading: "lazy"
        }))), isEd ? /*#__PURE__*/React.createElement("div", {
          className: "user-edit"
        }, /*#__PURE__*/React.createElement("textarea", {
          className: "field",
          autoFocus: true,
          value: editing.text,
          rows: Math.min(8, (editing.text.match(/\n/g) || []).length + 2),
          onChange: e => setEditing({
            idx: i,
            text: e.target.value
          }),
          onKeyDown: e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              saveEdit();
            } else if (e.key === "Escape") setEditing(null);
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "user-edit-bar"
        }, /*#__PURE__*/React.createElement("button", {
          className: "btn btn-ghost",
          onClick: () => setEditing(null)
        }, "Cancel"), /*#__PURE__*/React.createElement("button", {
          className: "btn btn-primary",
          disabled: !editing.text.trim(),
          onClick: saveEdit
        }, "Save & resend"))) : m.content ? /*#__PURE__*/React.createElement("div", {
          className: "user-row"
        }, !streaming && onEdit && /*#__PURE__*/React.createElement("button", {
          className: "user-edit-btn",
          "aria-label": "Edit message",
          title: "Edit & resend",
          onClick: () => setEditing({
            idx: i,
            text: m.content
          })
        }, /*#__PURE__*/React.createElement(I.Pencil, {
          size: 14
        })), /*#__PURE__*/React.createElement("div", {
          className: "user-bubble"
        }, m.content)) : null);
      }
      const isStreamingThis = streaming && isLast;
      const liveMsg = isStreamingThis ? {
        ...m,
        content: streaming.text,
        reasoning: streaming.reasoning || m.reasoning,
        tools: streaming.tools && streaming.tools.length ? streaming.tools : m.tools,
        plan: streaming.plan && streaming.plan.length ? streaming.plan : m.plan,
        usage: streaming.usage || m.usage
      } : m;
      return /*#__PURE__*/React.createElement(AssistantTurn, {
        key: i,
        msg: liveMsg,
        streaming: isStreamingThis,
        isLast: isLast,
        onFollowup: onFollowup,
        onToast: onToast,
        showTimestamps: settings.timestamps,
        showThinking: settings.showThinking,
        showTools: settings.showTools,
        showUsage: settings.showUsage === true,
        onRegen: onRegen,
        avatars: settings.avatars,
        latex: settings.latex,
        codeBlocks: settings.codeBlocks
      });
    })), showJump && /*#__PURE__*/React.createElement("button", {
      className: "jump-latest",
      onClick: () => {
        stickRef.current = true;
        scrollToBottom(true);
        setShowJump(false);
      }
    }, /*#__PURE__*/React.createElement(I.ArrowDown, {
      size: 14
    }), " Jump to latest"));
  }

  /* ---------- Composer ---------- */
  function Composer({
    value,
    onChange,
    onSend,
    onStop,
    streaming,
    attachments,
    onAttach,
    onRemoveAttach,
    onFiles,
    placeholder,
    suggestChips,
    onSuggestChip,
    focusKey,
    commands
  }) {
    const taRef = useRef(null);
    const [focused, setFocused] = useState(false);
    const [launching, setLaunching] = useState(false);
    const [drag, setDrag] = useState(false);
    const [slashSel, setSlashSel] = useState(0);

    // Slash menu: typing "/" + letters (no space yet) filters the command list.
    const slashQ = commands && commands.length && /^\/[a-z]*$/i.test(value) ? value.slice(1).toLowerCase() : null;
    const slashList = slashQ != null ? commands.filter(c => c.name.startsWith(slashQ)) : [];
    useEffect(() => {
      setSlashSel(0);
    }, [value]);
    const runSlash = c => {
      onChange("");
      if (c && c.run) c.run();
    };
    const autosize = () => {
      const t = taRef.current;
      if (!t) return;
      t.style.height = "auto";
      t.style.height = Math.min(t.scrollHeight, 220) + "px";
    };
    useEffect(autosize, [value]);
    useEffect(() => {
      if (focusKey) taRef.current && taRef.current.focus();
    }, [focusKey]);
    const doSend = () => {
      if (!value.trim() && attachments.length === 0) return;
      if (!document.body.classList.contains("no-anim")) {
        setLaunching(true);
        setTimeout(() => setLaunching(false), 520);
      }
      onSend();
    };
    const onKey = e => {
      if (slashList.length) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSlashSel(s => (s + 1) % slashList.length);
          return;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSlashSel(s => (s - 1 + slashList.length) % slashList.length);
          return;
        }
        if (e.key === "Enter" || e.key === "Tab") {
          e.preventDefault();
          runSlash(slashList[slashSel] || slashList[0]);
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          onChange("");
          return;
        }
      }
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (streaming) return;
        doSend();
      }
    };
    // Paste an image (screenshot / copied picture) straight into the chat. Only
    // intercept a PURE-image paste so normal text/rich paste still works.
    const onPaste = e => {
      if (!onFiles) return;
      const items = Array.from(e.clipboardData && e.clipboardData.items || []);
      const imgs = items.filter(i => i.kind === "file" && /^image\//.test(i.type));
      const hasText = items.some(i => i.kind === "string");
      if (!imgs.length || hasText) return;
      e.preventDefault();
      const files = imgs.map(i => i.getAsFile()).filter(Boolean);
      if (files.length) onFiles(files);
    };
    const onDrop = e => {
      if (!onFiles) return;
      e.preventDefault();
      setDrag(false);
      const files = Array.from(e.dataTransfer && e.dataTransfer.files || []);
      if (files.length) onFiles(files);
    };
    const onDragOver = e => {
      if (onFiles && e.dataTransfer && Array.from(e.dataTransfer.types || []).includes("Files")) {
        e.preventDefault();
        setDrag(true);
      }
    };
    const onDragLeave = e => {
      if (e.currentTarget === e.target) setDrag(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "composer-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "composer-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "composer" + (focused ? " focused" : "") + (drag ? " drag" : ""),
      onDrop: onDrop,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave
    }, drag && /*#__PURE__*/React.createElement("div", {
      className: "drop-veil"
    }, /*#__PURE__*/React.createElement(I.Image, {
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, "Drop images or files to attach")), slashList.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "slash-menu"
    }, slashList.map((c, i) => {
      const Ic = I[c.icon] || I.Command;
      return /*#__PURE__*/React.createElement("button", {
        key: c.name,
        className: "slash-item" + (i === slashSel ? " sel" : ""),
        onMouseEnter: () => setSlashSel(i),
        onMouseDown: e => {
          e.preventDefault();
          runSlash(c);
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "slash-ic"
      }, /*#__PURE__*/React.createElement(Ic, {
        size: 15
      })), /*#__PURE__*/React.createElement("span", {
        className: "slash-name"
      }, "/", c.name), /*#__PURE__*/React.createElement("span", {
        className: "slash-desc"
      }, c.desc));
    })), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "attach-chips"
    }, attachments.map((a, i) => /*#__PURE__*/React.createElement("div", {
      className: "chip" + (a.kind === "image" ? " img" : ""),
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "thumb"
    }, a.kind === "image" && a.b64 ? /*#__PURE__*/React.createElement("img", {
      src: a.b64,
      alt: a.name
    }) : a.kind === "image" ? /*#__PURE__*/React.createElement(I.Image, {
      size: 16
    }) : /*#__PURE__*/React.createElement(I.FileText, {
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      className: "meta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nm"
    }, a.name), /*#__PURE__*/React.createElement("div", {
      className: "sz"
    }, a.size)), /*#__PURE__*/React.createElement("button", {
      className: "x",
      "aria-label": "Remove",
      onClick: () => onRemoveAttach(i)
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 13
    }))))), /*#__PURE__*/React.createElement("textarea", {
      ref: taRef,
      rows: 1,
      value: value,
      placeholder: placeholder || "Message your agent…",
      onChange: e => onChange(e.target.value),
      onKeyDown: onKey,
      onPaste: onPaste,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      "aria-label": "Message"
    }), suggestChips && suggestChips.length > 0 && !value && /*#__PURE__*/React.createElement("div", {
      className: "suggest-chips"
    }, suggestChips.map((c, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      className: "suggest-chip",
      onClick: () => onSuggestChip(c)
    }, React.createElement(I[c.icon] || I.Sparkle, {
      size: 14
    }), c.t1))), /*#__PURE__*/React.createElement("div", {
      className: "composer-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left"
    }, /*#__PURE__*/React.createElement("button", {
      className: "cz-btn",
      "aria-label": "Attach file",
      onClick: onAttach
    }, /*#__PURE__*/React.createElement(I.Plus, {
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      className: "right"
    }, streaming ? /*#__PURE__*/React.createElement("button", {
      className: "stop-btn",
      "aria-label": "Stop",
      onClick: onStop
    }, /*#__PURE__*/React.createElement("span", {
      className: "sq"
    })) : /*#__PURE__*/React.createElement("button", {
      className: "send-btn" + (launching ? " launching" : ""),
      "aria-label": "Send",
      disabled: !value.trim() && attachments.length === 0,
      onClick: doSend
    }, /*#__PURE__*/React.createElement(I.ArrowUp, {
      size: 19,
      sw: 2.4
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "disclaimer"
    }, "The agent can make mistakes. Verify important info.")));
  }

  /* ---------- Empty home (S2) ---------- */
  function Home({
    model,
    suggestions,
    onPick,
    composerProps,
    context
  }) {
    const meta = modelMeta(model);
    const ctx = context && (context.project || context.agent) ? context : null;
    return /*#__PURE__*/React.createElement("div", {
      className: "home"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-glyph"
    }, /*#__PURE__*/React.createElement(window.HermesGlyph, {
      size: 56
    })), /*#__PURE__*/React.createElement("div", {
      className: "home-title"
    }, ctx && ctx.project ? ctx.project.name : "How can I help?"), /*#__PURE__*/React.createElement("div", {
      className: "home-sub"
    }, "Using ", meta.name)), ctx && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        gap: 8,
        marginBottom: 12
      }
    }, ctx.project && /*#__PURE__*/React.createElement("span", {
      className: "tag-mini",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(I.Folder, {
      size: 12,
      style: {
        color: ctx.project.color
      }
    }), " ", ctx.project.name, /*#__PURE__*/React.createElement("button", {
      onClick: ctx.onClear,
      "aria-label": "Clear",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-3)",
        padding: 0,
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 12
    }))), ctx.agent && /*#__PURE__*/React.createElement("span", {
      className: "tag-mini",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(I.Bot, {
      size: 12,
      style: {
        color: ctx.agent.color
      }
    }), " ", ctx.agent.name, /*#__PURE__*/React.createElement("button", {
      onClick: ctx.onClear,
      "aria-label": "Clear",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-3)",
        padding: 0,
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 12
    })))), /*#__PURE__*/React.createElement(Composer, composerProps), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "var(--text-3)",
        fontSize: 12.5,
        fontWeight: 600,
        margin: "22px 2px 2px",
        textTransform: "uppercase",
        letterSpacing: ".04em"
      }
    }, "Suggested"), /*#__PURE__*/React.createElement("div", {
      className: "suggest-grid"
    }, suggestions.map((s, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      className: "suggest-card anim-fadeup",
      style: {
        animationDelay: i * 0.05 + "s"
      },
      onClick: () => onPick(s)
    }, /*#__PURE__*/React.createElement("div", {
      className: "ic"
    }, React.createElement(I[s.icon] || I.Sparkle, {
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      className: "t1"
    }, s.t1), /*#__PURE__*/React.createElement("div", {
      className: "t2"
    }, s.t2))))));
  }
  window.Chat = {
    Thread,
    Composer,
    Home,
    modelMeta
  };
})();

/* ==================== js/settings.jsx ==================== */
/* Hermes — settings.jsx : Settings modal (S7) */
(function () {
  const {
    useState
  } = React;
  const I = window.Icons;
  const {
    Modal,
    Switch,
    Segmented
  } = window.UI;
  const D = window.HermesData;
  const TABS = [{
    id: "general",
    label: "General",
    icon: "Settings"
  }, {
    id: "interface",
    label: "Interface",
    icon: "Sliders"
  }, {
    id: "personalization",
    label: "Personalization",
    icon: "Sparkle"
  }, {
    id: "connections",
    label: "Providers",
    icon: "Server"
  }, {
    id: "integrations",
    label: "Integrations",
    icon: "Plug"
  }, {
    id: "agent",
    label: "Agent",
    icon: "Sparkle"
  }, {
    id: "remote",
    label: "Remote access",
    icon: "Share"
  }, {
    id: "data",
    label: "Data Controls",
    icon: "Database"
  }, {
    id: "about",
    label: "About",
    icon: "Info"
  }];
  function Row({
    t,
    d,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "set-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, t), d && /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, d)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto"
      }
    }, children));
  }
  function UsageBar({
    pct,
    amber
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "usage-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fill" + (amber ? " amber" : ""),
      style: {
        width: pct + "%"
      }
    }));
  }

  // ---- Providers panel: add provider → key → fetch models → pick which to enable ----
  const PROV_ORDER = ["deepseek", "anthropic", "openai", "gemini", "groq", "openrouter", "mistral", "nous", "local"];
  function ProvidersPanel({
    onToast
  }) {
    const [provs, setProvs] = React.useState(null);
    const [active, setActive] = React.useState("deepseek");
    const [draft, setDraft] = React.useState({}); // {pid:{key, base_url}}
    const [avail, setAvail] = React.useState({}); // {pid:[modelId]} fetched live
    const [enabled, setEnabled] = React.useState({}); // {pid:[modelId]} chosen
    const [status, setStatus] = React.useState({}); // {pid:{ok,msg,busy}}
    const [open, setOpen] = React.useState(null); // which provider's config is open
    const load = () => fetch("/api/config").then(r => r.json()).then(c => {
      setProvs(c.providers);
      setActive(c.provider);
      const d = {},
        en = {};
      Object.entries(c.providers).forEach(([pid, p]) => {
        d[pid] = {
          key: "",
          base_url: p.base_url
        };
        en[pid] = p.models || [];
      });
      setDraft(d);
      setEnabled(en);
    });
    const [syncing, setSyncing] = React.useState(false);
    const syncAgent = () => {
      setSyncing(true);
      fetch("/api/providers/sync-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: "{}"
      }).then(r => r.json()).then(d => {
        const n = d && d.count || 0;
        onToast && onToast({
          type: n ? "success" : "info",
          title: n ? "Synced " + n + " provider" + (n === 1 ? "" : "s") + " from your agent" : "Already up to date",
          desc: n ? "They're in the model picker now." : "No new agent providers found."
        });
        window.HermesData && window.HermesData.refreshModels && window.HermesData.refreshModels();
        load();
      }).catch(() => onToast && onToast({
        type: "error",
        title: "Sync failed"
      })).finally(() => setSyncing(false));
    };
    React.useEffect(() => {
      load();
    }, []);
    if (!provs) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Providers"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-3)"
      }
    }, "Loading\u2026"));
    const upd = (pid, k, v) => setDraft(d => ({
      ...d,
      [pid]: {
        ...d[pid],
        [k]: v
      }
    }));
    const fetchModels = pid => {
      setStatus(s => ({
        ...s,
        [pid]: {
          busy: true,
          msg: "Fetching models…"
        }
      }));
      fetch("/api/test-key", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider: pid,
          key: draft[pid].key,
          base_url: draft[pid].base_url
        })
      }).then(r => r.json()).then(res => {
        if (res.ok) {
          setAvail(a => ({
            ...a,
            [pid]: res.models || []
          }));
          setStatus(s => ({
            ...s,
            [pid]: {
              ok: true,
              msg: "✓ " + (res.models || []).length + " models available — pick below"
            }
          }));
        } else setStatus(s => ({
          ...s,
          [pid]: {
            ok: false,
            msg: "✗ " + (res.error || "failed")
          }
        }));
      });
    };
    const toggleModel = (pid, m) => setEnabled(en => {
      const cur = en[pid] || [];
      const next = cur.includes(m) ? cur.filter(x => x !== m) : [...cur, m];
      return {
        ...en,
        [pid]: next
      };
    });
    const save = pid => {
      const body = {
        providers: {
          [pid]: {
            key: draft[pid].key,
            base_url: draft[pid].base_url,
            models: enabled[pid] || []
          }
        }
      };
      fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(r => r.json()).then(() => {
        onToast && onToast({
          type: "success",
          title: provs[pid].label + " saved",
          desc: (enabled[pid] || []).length + " model(s) enabled"
        });
        load();
      });
    };
    const setActiveProv = pid => {
      setActive(pid);
      fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider: pid,
          active_model: (enabled[pid] || [])[0] || ""
        })
      }).then(() => onToast && onToast({
        type: "success",
        title: "Active: " + provs[pid].label
      }));
    };
    const PIC = {
      deepseek: "Wand",
      anthropic: "Brain",
      openai: "Sparkle",
      gemini: "Globe",
      groq: "Zap",
      openrouter: "Layers",
      mistral: "Bot",
      nous: "Gift",
      local: "Server"
    };
    const cur = open && provs[open];

    // ---- grid of provider cards ----
    if (!cur) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        style: {
          marginBottom: 6
        }
      }, "Providers"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 13,
          color: "var(--text-3)",
          marginTop: 0
        }
      }, "Connect an AI provider to add models to your chat. Click one to paste its key and pick models. Keys stay on this device (chmod\xA0600). Look for the", /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 700,
          color: "var(--green)",
          border: "1px solid var(--green)",
          borderRadius: 6,
          padding: "1px 5px",
          margin: "0 4px"
        }
      }, "FREE"), "tag for no-cost tiers."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 12,
          marginTop: 14
        }
      }, PROV_ORDER.filter(pid => !(provs[pid] && provs[pid].from_agent && !provs[pid].key_set)).map(pid => {
        const p = provs[pid],
          en = enabled[pid] || [],
          Ic = I[PIC[pid]] || I.Bot;
        const connected = p.key_set || !p.needs_key && en.length || pid === "local";
        return /*#__PURE__*/React.createElement("button", {
          key: pid,
          onClick: () => {
            setOpen(pid);
            setStatus(s => ({
              ...s,
              [pid]: {}
            }));
          },
          style: {
            textAlign: "left",
            border: "1px solid var(--border)",
            borderRadius: 13,
            padding: 14,
            background: "var(--surface)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            outline: active === pid ? "1.5px solid var(--accent)" : "none",
            transition: "border-color .15s"
          },
          onMouseEnter: e => e.currentTarget.style.borderColor = "var(--accent)",
          onMouseLeave: e => e.currentTarget.style.borderColor = "var(--border)"
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: "inline-flex",
            width: 38,
            height: 38,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            background: "color-mix(in srgb, var(--accent) 12%, transparent)",
            color: "var(--accent-deep)"
          }
        }, /*#__PURE__*/React.createElement(Ic, {
          size: 21
        })), active === pid ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            fontWeight: 650,
            color: "var(--accent-deep)"
          }
        }, "\u25CF active") : connected ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            fontWeight: 600,
            color: "var(--green)"
          }
        }, "connected") : /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            color: "var(--text-3)"
          }
        }, "not set")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 650,
            fontSize: 14.5,
            display: "flex",
            alignItems: "center",
            gap: 6
          }
        }, p.label, p.free && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 9.5,
            fontWeight: 700,
            color: "var(--green)",
            border: "1px solid var(--green)",
            borderRadius: 5,
            padding: "0 4px"
          }
        }, "FREE")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: "var(--text-3)"
          }
        }, en.length ? en.length + " model" + (en.length === 1 ? "" : "s") + " enabled" : "tap to set up"));
      })), /*#__PURE__*/React.createElement(AgentProvidersCard, {
        onToast: onToast
      }));
    }

    // ---- focused provider config ----
    const pid = open,
      p = cur,
      st = status[pid] || {},
      av = avail[pid],
      en = enabled[pid] || [],
      Ic = I[PIC[pid]] || I.Bot;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      style: {
        padding: "4px 8px",
        marginBottom: 12
      },
      onClick: () => setOpen(null)
    }, /*#__PURE__*/React.createElement(I.ChevronRight, {
      size: 15,
      style: {
        transform: "rotate(180deg)"
      }
    }), " All providers"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 44,
        height: 44,
        borderRadius: 11,
        alignItems: "center",
        justifyContent: "center",
        background: "color-mix(in srgb, var(--accent) 12%, transparent)",
        color: "var(--accent-deep)"
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 25
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17,
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, p.label, p.free && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: "var(--green)",
        border: "1px solid var(--green)",
        borderRadius: 5,
        padding: "1px 5px"
      }
    }, "FREE"), active === pid && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--accent-deep)"
      }
    }, "\u25CF active")), p.free && p.free_note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)"
      }
    }, p.free_note))), p.needs_key && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "API key", p.signup_url && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("a", {
      href: p.signup_url,
      target: "_blank",
      rel: "noreferrer",
      style: {
        color: "var(--accent-deep)"
      }
    }, "get a key \u2192"))), /*#__PURE__*/React.createElement("input", {
      className: "field",
      type: "password",
      placeholder: p.key_set ? "•••••• saved — paste to replace" : "paste API key",
      value: draft[pid].key,
      onChange: e => upd(pid, "key", e.target.value)
    })), pid === "local" && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "Server URL"), /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: draft[pid].base_url,
      onChange: e => upd(pid, "base_url", e.target.value),
      placeholder: "http://localhost:11434"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: "var(--text-3)",
        margin: "6px 0 0"
      }
    }, "Where your models run \u2014 Ollama ", /*#__PURE__*/React.createElement("code", null, "http://localhost:11434"), ", LM Studio / MLX ", /*#__PURE__*/React.createElement("code", null, "http://localhost:1234"), ". The ", /*#__PURE__*/React.createElement("code", null, "/v1"), " is added automatically.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      disabled: st.busy,
      onClick: () => fetchModels(pid)
    }, st.busy ? "Fetching…" : "Fetch models"), st.msg && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: st.ok ? "var(--green)" : st.ok === false ? "var(--red)" : "var(--text-3)"
      }
    }, st.msg)), av && av.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        maxHeight: 220,
        overflow: "auto",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: 8
      }
    }, av.map(m => /*#__PURE__*/React.createElement("label", {
      key: m,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "5px 6px",
        cursor: "pointer",
        fontSize: 13.5,
        borderRadius: 7
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: en.includes(m),
      onChange: () => toggleModel(pid, m)
    }), " ", m))), (av || en.length > 0) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => save(pid)
    }, "Save ", en.length, " model", en.length === 1 ? "" : "s"), en.length > 0 && active !== pid && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      onClick: () => setActiveProv(pid)
    }, "Set as active")));
  }

  // ---- Add agent-backed providers (Nous Portal OAuth, Copilot, Bedrock, …) with NO
  //      key — they route through the local agent, which already holds the creds. ----
  function AgentProvidersCard({
    onToast
  }) {
    const [data, setData] = React.useState(null); // {providers:[{id,label,models,added}], kind}
    const [busy, setBusy] = React.useState("");
    const load = () => fetch("/api/agent/providers").then(r => r.json()).then(setData).catch(() => {});
    React.useEffect(() => {
      load();
    }, []);
    if (!data || !data.kind || !(data.providers || []).length) return null; // only when a local agent backs chat
    const toggle = p => {
      setBusy(p.id);
      fetch("/api/providers/add-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: p.id,
          add: !p.added
        })
      }).then(r => r.json()).then(() => {
        onToast && onToast({
          type: "success",
          title: (p.added ? "Removed " : "Added ") + p.label + (p.added ? "" : " · " + p.models + " models in the picker")
        });
        window.HermesData && window.HermesData.refreshModels && window.HermesData.refreshModels();
        load();
      }).catch(() => onToast && onToast({
        type: "error",
        title: "Couldn't update " + p.label
      })).then(() => setBusy(""));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "From your agent \u2014 no key needed"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        margin: "4px 0 12px"
      }
    }, "Your ", data.kind === "openclaw" ? "OpenClaw" : "Hermes", " agent is already signed in to these (Nous Portal, Copilot, Bedrock\u2026). Add any to your model picker \u2014 they run through the agent with its own credentials."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 10
      }
    }, data.providers.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        border: "1px solid var(--border)",
        borderRadius: 11,
        padding: "11px 13px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: p.added ? "color-mix(in srgb, var(--accent) 7%, transparent)" : "var(--surface)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13.5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, p.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-3)"
      }
    }, p.models, " model", p.models === 1 ? "" : "s")), /*#__PURE__*/React.createElement("button", {
      className: "btn " + (p.added ? "btn-outline" : "btn-primary"),
      disabled: busy === p.id,
      style: {
        padding: "5px 12px",
        fontSize: 12.5
      },
      onClick: () => toggle(p)
    }, busy === p.id ? "…" : p.added ? "Added ✓" : "Add")))));
  }

  // ---- Agent panel (install / detect / update Hermes & OpenClaw) ----
  // ---- Browser control (browser-use): let the agent drive a real browser ----
  // ---- Multiple agents: pick which Hermes profile to chat with ----
  function AgentProfilesCard({
    onToast
  }) {
    const [data, setData] = React.useState(null);
    const load = () => fetch("/api/agent-profiles").then(r => r.json()).then(setData).catch(() => {});
    React.useEffect(() => {
      load();
    }, []);
    if (!data || !data.profiles || data.profiles.length < 2) return null; // only when there's a choice
    const pick = name => {
      fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agent_profile: name
        })
      }).then(r => r.json()).then(() => {
        onToast && onToast({
          type: "success",
          title: "Active agent: " + (name || "auto")
        });
        load();
      });
    };
    const active = data.active || "";
    return /*#__PURE__*/React.createElement("div", {
      className: "set-section",
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Your agents"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-3)",
        marginTop: 2
      }
    }, "You have more than one Hermes agent (profile). Pick which one chats answer through. Each has its own model, memory, and skills."), data.profiles.map(p => {
      const on = active ? active === p.name : p.name === "default";
      return /*#__PURE__*/React.createElement("label", {
        key: p.name,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 13,
          marginTop: 8,
          cursor: "pointer",
          outline: on ? "2px solid var(--accent)" : "none"
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        name: "agentprofile",
        checked: on,
        onChange: () => pick(p.name)
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 650
        }
      }, p.name, p.name === "default" ? " (main)" : ""), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          color: "var(--text-3)"
        }
      }, p.model || "model not set", p.provider ? " · " + p.provider : "")), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11.5,
          color: p.running ? "var(--green)" : "var(--text-3)",
          display: "inline-flex",
          alignItems: "center",
          gap: 5
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 9,
          background: p.running ? "var(--green)" : "var(--text-3)"
        }
      }), p.running ? "running" : "stopped"));
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11.5,
        color: "var(--text-3)",
        marginTop: 8
      }
    }, "A profile must be running with its API enabled to chat through it. Start one with", /*#__PURE__*/React.createElement("code", {
      style: {
        margin: "0 4px"
      }
    }, "hermes --profile <name> gateway start"), "."));
  }
  function BrowserUseCard({
    onToast
  }) {
    const [st, setSt] = React.useState(null);
    const [log, setLog] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const load = () => fetch("/api/skill/browser-use").then(r => r.json()).then(setSt).catch(() => {});
    React.useEffect(() => {
      load();
    }, []);
    const run = kind => {
      setBusy(true);
      setLog("Starting…");
      fetch("/api/skill/browser-use/" + kind, {
        method: "POST"
      }).then(r => r.json()).then(({
        job
      }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then(r => r.json()).then(j => {
          setLog((j.log || []).join("\n"));
          if (j.status === "done" || j.status === "error") {
            clearInterval(poll);
            setBusy(false);
            load();
            onToast && onToast({
              type: j.status === "done" ? "success" : "error",
              title: "Browser control " + (j.status === "done" ? "ready" : "failed")
            });
          }
        }), 1500);
      }).catch(() => {
        setBusy(false);
        onToast && onToast({
          type: "error",
          title: "Failed to start"
        });
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "set-section",
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Browser control"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-3)",
        marginTop: 2
      }
    }, "Lets the agent drive a real web browser \u2014 open pages, click, fill forms, read JavaScript-heavy or logged-in sites, take screenshots. Use it for tasks that need a live page, not just a search. Installs the ", /*#__PURE__*/React.createElement("b", null, "browser-use"), " skill for your agent."), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 14,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 650
      }
    }, "browser-use"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: st && st.installed ? "var(--green)" : "var(--text-3)"
      }
    }, !st ? "checking…" : st.installed ? "✓ installed" + (st.current ? " · " + st.current : "") : "not installed"), st && st.update_available && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--accent-deep)",
        marginTop: 3
      }
    }, "\u2191 update available: ", st.latest)), st && !st.installed && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: busy,
      onClick: () => run("install")
    }, busy ? "Installing…" : "Install"), st && st.installed && st.update_available && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: busy,
      onClick: () => run("update")
    }, busy ? "Updating…" : "Update"), st && st.installed && !st.update_available && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--green)"
      }
    }, "up to date"))), log && /*#__PURE__*/React.createElement("pre", {
      style: {
        marginTop: 12,
        maxHeight: 180,
        overflow: "auto",
        background: "#0c0c10",
        color: "#cfe",
        padding: 12,
        borderRadius: 10,
        fontSize: 12,
        whiteSpace: "pre-wrap"
      }
    }, log));
  }

  // ---- live "is the on-device agent actually working?" diagnostic ----
  function AgentStatus() {
    const [d, setD] = React.useState(null);
    const [show, setShow] = React.useState(false);
    const probe = () => {
      setD("loading");
      fetch("/api/agent-debug").then(r => r.json()).then(setD).catch(() => setD({
        agent_ready: false,
        acp_detail: "offline"
      }));
    };
    React.useEffect(() => {
      probe();
    }, []);
    if (d === "loading" || d === null) return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-3)"
      }
    }, "Checking the on-device agent\u2026");
    const ready = d.agent_ready;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid " + (ready ? "var(--green)" : "var(--amber)"),
        background: "color-mix(in srgb, " + (ready ? "var(--green)" : "var(--amber)") + " 8%, transparent)",
        borderRadius: 11,
        padding: "11px 13px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontSize: 14,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 9,
        background: ready ? "var(--green)" : "var(--amber)"
      }
    }), ready ? "Agent ready — every model you pick runs here, with tools (terminal, web, files)." : "On-device agent not active"), !ready && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-2)",
        marginTop: 5
      }
    }, d.acp_detail || "—", d.hermes_bin && d.hermes_bin.startsWith("(") ? " · install Hermes below" : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 8,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      style: {
        padding: "3px 8px"
      },
      onClick: probe
    }, "Re-check"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      style: {
        padding: "3px 8px"
      },
      onClick: () => setShow(!show)
    }, show ? "Hide details" : "Details")), show && /*#__PURE__*/React.createElement("pre", {
      style: {
        marginTop: 8,
        fontSize: 11,
        background: "var(--code-bg)",
        padding: 10,
        borderRadius: 8,
        overflow: "auto",
        maxHeight: 200
      }
    }, JSON.stringify(d, null, 2)));
  }

  // ---- Scheduled tasks: the agent's cron jobs (runs prompts on a timer) ----
  // ---- Active agent: pick Hermes vs OpenClaw (only shown when both installed) ----
  function AgentKindCard({
    onToast
  }) {
    const [st, setSt] = React.useState(null); // {hermes, openclaw, pref, active}
    const load = () => fetch("/api/agent/active").then(r => r.json()).then(setSt).catch(() => {});
    React.useEffect(() => {
      load();
    }, []);
    if (!st || !(st.hermes && st.openclaw)) return null; // only a choice when BOTH are installed
    const cur = st.pref || st.active;
    const pick = k => {
      fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agent: k
        })
      }).then(r => r.json()).then(() => {
        onToast && onToast({
          type: "success",
          title: "Active agent: " + (k === "openclaw" ? "OpenClaw" : "Hermes")
        });
        window.__setAgentKind && window.__setAgentKind(k); // live-update the brand glyph + name
        window.HermesData && window.HermesData.refreshModels && window.HermesData.refreshModels();
        load();
      }).catch(() => onToast && onToast({
        type: "error",
        title: "Couldn't switch agent"
      }));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 14,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Active agent"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        margin: "4px 0 10px"
      }
    }, "Both Hermes and OpenClaw are installed. Pick which one powers your chats \u2014 your model picker switches to that agent's models."), /*#__PURE__*/React.createElement("div", {
      className: "effort-seg"
    }, /*#__PURE__*/React.createElement("button", {
      className: "effort-opt" + (cur === "hermes" ? " on" : ""),
      onClick: () => pick("hermes")
    }, "Hermes"), /*#__PURE__*/React.createElement("button", {
      className: "effort-opt" + (cur === "openclaw" ? " on" : ""),
      onClick: () => pick("openclaw")
    }, "OpenClaw")));
  }
  function CronCard({
    onToast
  }) {
    const [data, setData] = React.useState(null); // {available, jobs}
    const [form, setForm] = React.useState({
      name: "",
      schedule: "",
      prompt: ""
    });
    const [busy, setBusy] = React.useState(false);
    const load = () => fetch("/api/agent/cron").then(r => r.json()).then(setData).catch(() => {});
    React.useEffect(() => {
      load();
    }, []);
    if (!data) return null;
    if (!data.available) return /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        marginTop: 8
      }
    }, "Scheduled tasks need a local Hermes agent.");
    const post = (body, okMsg) => {
      setBusy(true);
      fetch("/api/agent/cron", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(r => r.json()).then(d => {
        setData(s => ({
          ...s,
          jobs: d.jobs || []
        }));
        onToast && onToast(d.ok ? {
          type: "success",
          title: okMsg
        } : {
          type: "error",
          title: d.message || "Failed"
        });
        if (d.ok && body.action === "create") setForm({
          name: "",
          schedule: "",
          prompt: ""
        });
      }).catch(() => onToast && onToast({
        type: "error",
        title: "Network error"
      })).then(() => setBusy(false));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, (data.jobs || []).length === 0 && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        margin: "4px 0 10px"
      }
    }, "No scheduled tasks yet \u2014 create your first one below."), (data.jobs || []).map(j => /*#__PURE__*/React.createElement("div", {
      key: j.id,
      className: "cron-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cron-dot" + (j.enabled ? " on" : ""),
      title: j.enabled ? "running on schedule" : "paused"
    }), /*#__PURE__*/React.createElement("span", {
      className: "cron-name",
      title: j.prompt || j.script
    }, j.name || j.id), /*#__PURE__*/React.createElement("code", {
      className: "cron-sched"
    }, j.schedule), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      disabled: busy,
      style: {
        padding: "3px 9px",
        fontSize: 12
      },
      onClick: () => post({
        action: "toggle",
        id: j.id
      }, j.enabled ? "Paused " + j.name : "Resumed " + j.name)
    }, j.enabled ? "Pause" : "Resume"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      disabled: busy,
      "aria-label": "Delete",
      style: {
        padding: "3px 7px"
      },
      onClick: () => post({
        action: "delete",
        id: j.id
      }, "Deleted " + j.name)
    }, /*#__PURE__*/React.createElement(I.Trash, {
      size: 14
    })))), /*#__PURE__*/React.createElement("div", {
      className: "cron-new"
    }, /*#__PURE__*/React.createElement("input", {
      className: "field",
      placeholder: "Name \u2014 e.g. Morning briefing",
      value: form.name,
      onChange: e => setForm({
        ...form,
        name: e.target.value
      })
    }), /*#__PURE__*/React.createElement("input", {
      className: "field",
      placeholder: "When \u2014 e.g. every 30m \xB7 daily 09:00",
      value: form.schedule,
      onChange: e => setForm({
        ...form,
        schedule: e.target.value
      })
    }), /*#__PURE__*/React.createElement("textarea", {
      className: "field",
      placeholder: "What should the agent do? e.g. Summarize my unread Telegram messages.",
      value: form.prompt,
      style: {
        minHeight: 54
      },
      onChange: e => setForm({
        ...form,
        prompt: e.target.value
      })
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: busy || !(form.name.trim() && form.schedule.trim() && form.prompt.trim()),
      onClick: () => post({
        action: "create",
        job: form
      }, "Task scheduled")
    }, "Schedule task")));
  }
  function AgentPanel({
    onToast,
    s,
    set
  }) {
    const [agents, setAgents] = React.useState(null);
    const [upd, setUpd] = React.useState({}); // {agent:{update_available,current,latest}}
    const [log, setLog] = React.useState("");
    const load = () => fetch("/api/agents").then(r => r.json()).then(d => {
      setAgents(d.agents);
      d.agents.forEach(a => {
        if (a.installed) fetch("/api/update/check/" + a.agent).then(r => r.json()).then(u => setUpd(s => ({
          ...s,
          [a.agent]: u
        })));
      });
    });
    React.useEffect(() => {
      load();
    }, []);
    const runJob = (aid, kind) => {
      setLog("Starting " + kind + " of " + aid + "…\n");
      fetch("/api/" + kind, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agent: aid
        })
      }).then(r => r.json()).then(({
        job
      }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then(r => r.json()).then(st => {
          setLog((st.log || []).join("\n"));
          if (st.status === "done" || st.status === "error") {
            clearInterval(poll);
            load();
            onToast && onToast({
              type: st.status === "done" ? "success" : "error",
              title: kind + " " + st.status
            });
          }
        }), 1200);
      });
    };
    if (!agents) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Agent"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-3)"
      }
    }, "Checking\u2026"));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 6
      }
    }, "Agent"), /*#__PURE__*/React.createElement(AgentStatus, {
      onToast: onToast
    }), /*#__PURE__*/React.createElement(AgentKindCard, {
      onToast: onToast
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-3)",
        marginTop: 14
      }
    }, "Install, detect, and keep your local agent runtime up to date. AgentBay fetches the latest from GitHub for your OS."), agents.map(a => {
      const u = upd[a.agent] || {};
      return /*#__PURE__*/React.createElement("div", {
        key: a.agent,
        style: {
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 14,
          marginTop: 12
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 650
        }
      }, a.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          color: a.installed ? "var(--green)" : "var(--text-3)"
        }
      }, a.installed ? "✓ installed" + (a.version ? " · " + a.version : "") : "not installed"), u.update_available && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "var(--accent-deep)",
          marginTop: 3
        }
      }, "\u2191 update available: ", u.latest)), !a.installed && /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary",
        onClick: () => runJob(a.agent, "install")
      }, "Install"), a.installed && u.update_available && /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary",
        onClick: () => runJob(a.agent, "update")
      }, "Update"), a.installed && !u.update_available && u.latest && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          color: "var(--green)"
        }
      }, "up to date")));
    }), log && /*#__PURE__*/React.createElement("pre", {
      style: {
        marginTop: 12,
        maxHeight: 200,
        overflow: "auto",
        background: "#0c0c10",
        color: "#cfe",
        padding: 12,
        borderRadius: 10,
        fontSize: 12,
        whiteSpace: "pre-wrap"
      }
    }, log), /*#__PURE__*/React.createElement(AgentProfilesCard, {
      onToast: onToast
    }), /*#__PURE__*/React.createElement(ReasoningEffortCard, {
      onToast: onToast
    }), s && set && /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 14,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Scheduled tasks"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        margin: "4px 0 0"
      }
    }, "Have the agent run prompts on a timer \u2014 daily briefings, recurring checks. Shares the agent's own schedule, so jobs run even when AgentBay is closed.")), /*#__PURE__*/React.createElement(Switch, {
      on: s.scheduledTasks === true,
      onChange: v => set("scheduledTasks", v),
      label: "Scheduled tasks"
    })), s.scheduledTasks === true && /*#__PURE__*/React.createElement(CronCard, {
      onToast: onToast
    })), /*#__PURE__*/React.createElement(BrowserUseCard, {
      onToast: onToast
    }));
  }

  // ---- Reasoning effort: how hard the local Hermes agent thinks (global agent default) ----
  function ReasoningEffortCard({
    onToast
  }) {
    const [state, setState] = React.useState(null); // {effort, options, available}
    const [busy, setBusy] = React.useState(false);
    React.useEffect(() => {
      fetch("/api/agent/reasoning-effort").then(r => r.json()).then(setState).catch(() => {});
    }, []);
    if (!state || !state.available) return null; // only when the local Hermes agent (ACP) backs chat
    const choose = effort => {
      setBusy(true);
      fetch("/api/agent/reasoning-effort", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          effort
        })
      }).then(r => r.json()).then(j => {
        setState(s => ({
          ...s,
          effort: j.effort
        }));
        onToast && onToast({
          type: j.ok ? "success" : "error",
          title: j.ok ? "Reasoning effort: " + (j.effort || "default") : "Couldn't set effort"
        });
      }).catch(() => {}).then(() => setBusy(false));
    };
    const opts = [""].concat(state.options); // "" = model default
    return /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 14,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Reasoning effort"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        margin: "4px 0 10px"
      }
    }, "How hard the agent thinks before answering. Sets your Hermes agent's global default \u2014 applies everywhere Hermes runs, not just AgentBay."), /*#__PURE__*/React.createElement("div", {
      className: "effort-seg"
    }, opts.map(o => /*#__PURE__*/React.createElement("button", {
      key: o || "default",
      className: "effort-opt" + ((state.effort || "") === o ? " on" : ""),
      disabled: busy,
      onClick: () => choose(o)
    }, o || "Default"))));
  }

  // ---- Accent color: curated "stones" that live-preview the whole app on hover ----
  const ACCENTS = [{
    name: "Sandal",
    hex: "#d9a36b"
  }, {
    name: "Clay",
    hex: "#cf7e5b"
  }, {
    name: "Coral",
    hex: "#ec7a5e"
  }, {
    name: "Rose",
    hex: "#e07a93"
  }, {
    name: "Rosewood",
    hex: "#c2698f"
  }, {
    name: "Plum",
    hex: "#9b7cd8"
  }, {
    name: "Indigo",
    hex: "#6d83e0"
  }, {
    name: "Ocean",
    hex: "#4f9fd6"
  }, {
    name: "Teal",
    hex: "#2fb0a3"
  }, {
    name: "Pine",
    hex: "#62a06a"
  }, {
    name: "Honey",
    hex: "#e0b13e"
  }, {
    name: "Slate",
    hex: "#8893a8"
  }];
  function AccentPicker({
    value,
    onPick
  }) {
    const [hover, setHover] = React.useState(null);
    // hover = live preview the whole UI; leaving reverts to the committed color
    React.useEffect(() => {
      document.documentElement.style.setProperty("--accent", hover || value || "#d9a36b");
    }, [hover, value]);
    const shown = ACCENTS.find(a => a.hex === (hover || value));
    return /*#__PURE__*/React.createElement("div", {
      className: "accent-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "accent-stones",
      onMouseLeave: () => setHover(null)
    }, ACCENTS.map(a => /*#__PURE__*/React.createElement("button", {
      key: a.hex,
      type: "button",
      "aria-label": a.name,
      className: "accent-stone" + (a.hex === value ? " sel" : ""),
      style: {
        "--c": a.hex
      },
      onMouseEnter: () => setHover(a.hex),
      onFocus: () => setHover(a.hex),
      onBlur: () => setHover(null),
      onClick: () => {
        setHover(null);
        onPick(a.hex);
      }
    }, a.hex === value && /*#__PURE__*/React.createElement(I.Check, {
      size: 14
    })))), /*#__PURE__*/React.createElement("div", {
      className: "accent-name"
    }, shown ? shown.name : "Custom", hover ? " · preview" : ""));
  }

  // ---- WhatsApp QR pairing, rendered live in the UI (reads the gateway bridge) ----
  function WhatsAppPair({
    connected,
    pairCmd
  }) {
    const [st, setSt] = React.useState({
      state: "waiting"
    });
    const [secs, setSecs] = React.useState(0);
    React.useEffect(() => {
      let alive = true;
      const tick = () => fetch("/api/integrations/whatsapp/qr").then(r => r.json()).then(d => {
        if (alive) setSt(d);
      }).catch(() => {});
      tick();
      const id = setInterval(tick, 2500);
      const sid = setInterval(() => alive && setSecs(s => s + 1), 1000);
      return () => {
        alive = false;
        clearInterval(id);
        clearInterval(sid);
      };
    }, []);
    const cmd = pairCmd || "hermes whatsapp";
    // The in-app QR only appears if the gateway emits one; WhatsApp pairing usually
    // needs an interactive terminal, so always offer the terminal command as the path.
    const TermHint = () => /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        marginTop: 10,
        lineHeight: 1.5
      }
    }, "No QR? WhatsApp pairing needs an interactive terminal \u2014 open one and run", " ", /*#__PURE__*/React.createElement("code", {
      style: {
        background: "var(--code-bg)",
        padding: "1px 6px",
        borderRadius: 6
      }
    }, cmd), ", scan the QR there. This card flips to ", /*#__PURE__*/React.createElement("b", null, "Linked"), " automatically once you're paired.");
    if (st.state === "paired") {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "var(--green)",
          fontWeight: 600,
          margin: "12px 0"
        }
      }, /*#__PURE__*/React.createElement(I.CheckCircle, {
        size: 18
      }), " WhatsApp linked \u2014 you can message the agent now.");
    }
    if (st.state === "off") {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "var(--text-3)",
          margin: "10px 0"
        }
      }, "Press ", /*#__PURE__*/React.createElement("b", null, "Connect"), " below to enable WhatsApp, then scan the QR (or pair from a terminal).");
    }
    if (st.state === "qr") {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          margin: "12px 0"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          marginBottom: 8
        }
      }, "On your phone: ", /*#__PURE__*/React.createElement("b", null, "WhatsApp \u2192 Settings \u2192 Linked Devices \u2192 Link a Device"), ", then scan:"), /*#__PURE__*/React.createElement("pre", {
        style: {
          display: "inline-block",
          lineHeight: 1,
          letterSpacing: 0,
          fontSize: 9,
          background: "#fff",
          color: "#000",
          padding: 12,
          borderRadius: 8,
          margin: 0,
          fontFamily: "ui-monospace, Menlo, monospace",
          whiteSpace: "pre"
        }
      }, st.qr), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          color: "var(--text-3)",
          marginTop: 6
        }
      }, "Code refreshes automatically. Keep this open until it links."));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "12px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "var(--text-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "typing",
      style: {
        height: 12
      }
    }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), "Enabling WhatsApp on your agent\u2026"), secs > 6 && /*#__PURE__*/React.createElement(TermHint, null));
  }

  // ---- Integrations: connect the agent to messaging channels ----
  function IntegrationsPanel({
    onToast
  }) {
    const [data, setData] = React.useState(null);
    const [open, setOpen] = React.useState(null); // channel id being configured
    const [draft, setDraft] = React.useState({}); // {env: value}
    const [busy, setBusy] = React.useState(false);
    const load = () => fetch("/api/integrations").then(r => r.json()).then(setData);
    React.useEffect(() => {
      load();
    }, []);
    if (!data) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Integrations"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-3)"
      }
    }, "Loading\u2026"));
    const channels = data.channels || [];
    const connectedCount = channels.filter(c => c.connected).length;
    const cur = channels.find(c => c.id === open);
    const openCard = c => {
      setOpen(c.id);
      setDraft({});
    };
    const save = c => {
      setBusy(true);
      fetch("/api/integrations/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          channel: c.id,
          values: draft
        })
      }).then(r => r.json()).then(res => {
        setBusy(false);
        if (!res.ok) {
          onToast && onToast({
            type: "error",
            title: "Could not save",
            desc: res.error || "failed"
          });
          return;
        }
        if (c.kind === "qr") {
          // Don't claim "connected" — pairing isn't done yet. Keep the card open so
          // the QR / pairing status (WhatsAppPair) stays visible.
          onToast && onToast({
            type: "info",
            title: c.label + " enabled",
            desc: "Scan the QR below to link your phone."
          });
          load();
        } else {
          // Honest: "connected" only once the gateway actually (re)started to load it.
          onToast && onToast({
            type: res.restarted ? "success" : "info",
            title: "Saved",
            desc: res.restarted ? c.label + " is starting on your agent." : "Saved — start/restart your agent so it picks this up."
          });
          setOpen(null);
          load();
        }
      }).catch(() => {
        setBusy(false);
        onToast && onToast({
          type: "error",
          title: "Network error"
        });
      });
    };
    const disconnect = c => {
      setBusy(true);
      fetch("/api/integrations/disconnect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          channel: c.id
        })
      }).then(r => r.json()).then(res => {
        setBusy(false);
        onToast && onToast({
          type: res.ok ? "success" : "error",
          title: res.ok ? c.label + " disconnected" : res.error || "failed"
        });
        setOpen(null);
        load();
      });
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 6
      }
    }, "Integrations"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-3)",
        marginTop: 0
      }
    }, "Reach your agent from the apps you already use. Connecting a channel stores its credentials with your agent (chmod\xA0600) and restarts it \u2014 every message then runs through the full agent, with tools. ", connectedCount > 0 && /*#__PURE__*/React.createElement("b", null, connectedCount, " connected.")), !data.gateway_ready && /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--amber)",
        background: "color-mix(in srgb, var(--amber) 8%, transparent)",
        borderRadius: 10,
        padding: "10px 12px",
        margin: "10px 0",
        fontSize: 13
      }
    }, "No agent gateway detected yet. Install or select your agent in the ", /*#__PURE__*/React.createElement("b", null, "Agent"), " tab first \u2014 channels deliver messages through it."), !cur && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
        gap: 12,
        marginTop: 14
      }
    }, channels.map(c => {
      const Ic = I[c.icon] || I.Plug;
      return /*#__PURE__*/React.createElement("button", {
        key: c.id,
        onClick: () => openCard(c),
        style: {
          textAlign: "left",
          border: "1px solid var(--border)",
          borderRadius: 13,
          padding: 14,
          background: "var(--surface)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          transition: "border-color .15s, transform .1s",
          outline: c.connected ? "1.5px solid var(--green)" : "none"
        },
        onMouseEnter: e => {
          e.currentTarget.style.borderColor = "var(--accent)";
        },
        onMouseLeave: e => {
          e.currentTarget.style.borderColor = "var(--border)";
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          width: 38,
          height: 38,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          background: "color-mix(in srgb, var(--accent) 12%, transparent)",
          color: "var(--accent-deep)"
        }
      }, /*#__PURE__*/React.createElement(Ic, {
        size: 22
      })), c.connected ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 650,
          color: "var(--green)",
          display: "inline-flex",
          alignItems: "center",
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 9,
          background: "var(--green)"
        }
      }), " Connected") : /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--text-3)"
        }
      }, "Not connected")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 650,
          fontSize: 14.5
        }
      }, c.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          color: "var(--text-3)",
          lineHeight: 1.4
        }
      }, c.blurb));
    })), cur && (() => {
      const Ic = I[cur.icon] || I.Plug;
      const missingReq = cur.fields.some(f => f.required && !f.is_set && !(draft[f.env] || "").trim());
      return /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 6
        }
      }, /*#__PURE__*/React.createElement("button", {
        className: "btn btn-ghost",
        style: {
          padding: "4px 8px",
          marginBottom: 10
        },
        onClick: () => setOpen(null)
      }, /*#__PURE__*/React.createElement(I.ChevronRight, {
        size: 15,
        style: {
          transform: "rotate(180deg)"
        }
      }), " All channels"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 6
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          width: 44,
          height: 44,
          borderRadius: 11,
          alignItems: "center",
          justifyContent: "center",
          background: "color-mix(in srgb, var(--accent) 12%, transparent)",
          color: "var(--accent-deep)"
        }
      }, /*#__PURE__*/React.createElement(Ic, {
        size: 26
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          fontSize: 16
        }
      }, cur.label, cur.connected && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 650,
          color: "var(--green)",
          marginLeft: 8
        }
      }, "\u25CF connected")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          color: "var(--text-3)"
        }
      }, cur.blurb))), cur.guide && cur.guide.length > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          border: "1px solid var(--border)",
          borderRadius: 11,
          padding: "12px 14px",
          margin: "12px 0",
          background: "var(--surface-2, var(--surface))"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: ".04em",
          color: "var(--text-3)",
          marginBottom: 8
        }
      }, "Setup"), /*#__PURE__*/React.createElement("ol", {
        style: {
          margin: 0,
          paddingLeft: 18,
          fontSize: 13,
          lineHeight: 1.65
        }
      }, cur.guide.map((g, i) => /*#__PURE__*/React.createElement("li", {
        key: i
      }, g))), cur.docs && /*#__PURE__*/React.createElement("a", {
        href: cur.docs,
        target: "_blank",
        rel: "noreferrer",
        style: {
          display: "inline-block",
          marginTop: 8,
          fontSize: 12.5,
          color: "var(--accent-deep)"
        }
      }, "Full docs \u2192")), cur.kind === "qr" && /*#__PURE__*/React.createElement(WhatsAppPair, {
        connected: cur.connected,
        pairCmd: cur.pair_cmd
      }), cur.fields.map(f => /*#__PURE__*/React.createElement("div", {
        key: f.env,
        style: {
          marginBottom: 12
        }
      }, /*#__PURE__*/React.createElement("label", {
        className: "field-label"
      }, f.label, f.required && /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--red)"
        }
      }, " *"), f.is_set && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--green)",
          marginLeft: 6
        }
      }, "\u25CF saved")), f.type === "textarea" ? /*#__PURE__*/React.createElement("textarea", {
        className: "field",
        style: {
          minHeight: 120,
          fontFamily: "ui-monospace, monospace",
          fontSize: 12.5
        },
        placeholder: f.is_set ? "•••••• saved — paste to replace" : f.placeholder,
        value: draft[f.env] || "",
        onChange: e => setDraft(d => ({
          ...d,
          [f.env]: e.target.value
        }))
      }) : /*#__PURE__*/React.createElement("input", {
        className: "field",
        type: f.type === "password" ? "password" : "text",
        placeholder: f.is_set && f.type === "password" ? "•••••• saved — paste to replace" : f.placeholder,
        value: draft[f.env] || "",
        onChange: e => setDraft(d => ({
          ...d,
          [f.env]: e.target.value
        }))
      }), f.help && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          color: "var(--text-3)",
          marginTop: 4
        }
      }, f.help))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginTop: 16
        }
      }, /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary",
        disabled: busy || missingReq && !cur.connected && cur.fields.length > 0,
        onClick: () => save(cur)
      }, busy ? "Saving…" : cur.connected ? "Update" : "Connect"), cur.connected && /*#__PURE__*/React.createElement("button", {
        className: "btn btn-danger",
        disabled: busy,
        onClick: () => disconnect(cur)
      }, "Disconnect")));
    })());
  }

  // ---- About + self-update (pulls from the public repo) ----
  function AboutPanel({
    onToast
  }) {
    const [v, setV] = React.useState(null);
    const [busy, setBusy] = React.useState(false);
    const [checking, setChecking] = React.useState(false);
    const [log, setLog] = React.useState(null);
    const load = () => {
      setV(null);
      fetch("/api/app/version").then(r => r.json()).then(setV).catch(() => setV({
        current: "?",
        error: "offline"
      }));
    };
    React.useEffect(() => {
      load();
    }, []);
    const check = () => {
      setChecking(true);
      fetch("/api/app/version").then(r => r.json()).then(d => {
        setV(d);
        setChecking(false);
        if (d.error) onToast({
          type: "error",
          title: "Couldn't check",
          desc: "You may be offline."
        });else if (d.update_available) onToast({
          type: "info",
          title: "Update available",
          desc: (d.latest || "") + " — click Update now."
        });else onToast({
          type: "success",
          title: "You're on the latest version"
        });
      }).catch(() => {
        setChecking(false);
        onToast({
          type: "error",
          title: "Couldn't check for updates",
          desc: "You may be offline."
        });
      });
    };
    const update = () => {
      setBusy(true);
      setLog(["Updating…"]);
      fetch("/api/app/update", {
        method: "POST"
      }).then(r => r.json()).then(({
        job
      }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then(r => r.json()).then(j => {
          setLog(j.log || []);
          if (j.status === "done") {
            clearInterval(poll);
            onToast({
              type: "success",
              title: "Updated — restarting…"
            });
            setTimeout(() => location.reload(), 4000);
          } else if (j.status === "error") {
            clearInterval(poll);
            setBusy(false);
            onToast({
              type: "error",
              title: "Update failed"
            });
          }
        }).catch(() => {
          clearInterval(poll);
          setTimeout(() => location.reload(), 4000);
        }), 1500);
      }).catch(() => {
        setBusy(false);
        onToast({
          type: "error",
          title: "Couldn't start update"
        });
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        paddingTop: 24
      }
    }, /*#__PURE__*/React.createElement(window.AgentGlyph, {
      size: 56
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 20,
        marginTop: 14
      }
    }, "AgentBay \u2014 a minimal home for your agent"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-3)",
        marginTop: 4
      }
    }, "Version ", v ? v.current : "…", " \xB7 MIT License"), v && v.update_available ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--accent-deep)",
        fontSize: 13.5,
        marginBottom: 10
      }
    }, "\u2191 A new version is available", v.latest ? " (" + v.latest + ")" : "", "."), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: busy,
      onClick: update
    }, busy ? "Updating…" : "Update now")) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, v && !v.error && /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--green)",
        fontSize: 13.5,
        marginBottom: 10
      }
    }, "You're on the latest version."), v && v.error && /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-3)",
        fontSize: 13.5,
        marginBottom: 10
      }
    }, "Couldn't reach GitHub to check."), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      disabled: checking,
      onClick: check
    }, checking ? "Checking…" : "Check for updates")), log && /*#__PURE__*/React.createElement("pre", {
      style: {
        marginTop: 14,
        maxHeight: 160,
        overflow: "auto",
        background: "#0c0c10",
        color: "#cfe",
        padding: 12,
        borderRadius: 10,
        fontSize: 12,
        whiteSpace: "pre-wrap",
        textAlign: "left"
      }
    }, log.join("\n")));
  }

  // ---- Remote access: open a public link to this UI (tunnel + token gate) ----
  function RemotePanel({
    onToast
  }) {
    const [st, setSt] = React.useState(null);
    const [busy, setBusy] = React.useState(false);
    const [provider, setProvider] = React.useState("cloudflared");
    const [instLog, setInstLog] = React.useState(null);
    const qrRef = React.useRef(null);
    const load = () => fetch("/api/share/status").then(r => r.json()).then(setSt).catch(() => {});
    React.useEffect(() => {
      load();
    }, []);
    React.useEffect(() => {
      if (!qrRef.current) return;
      if (st && st.link && window.qrcode) {
        try {
          const qr = window.qrcode(0, "M");
          qr.addData(st.link);
          qr.make();
          qrRef.current.innerHTML = qr.createImgTag(4, 0);
          const img = qrRef.current.querySelector("img"); // force it to fit the box (long tokens make big QRs)
          if (img) {
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.display = "block";
            img.style.imageRendering = "pixelated";
          }
        } catch (e) {
          qrRef.current.innerHTML = "";
        }
      } else {
        qrRef.current.innerHTML = "";
      }
    }, [st && st.link]);
    const start = () => {
      setBusy(true);
      fetch("/api/share/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider
        })
      }).then(r => r.json()).then(d => {
        setBusy(false);
        if (d.error) onToast({
          type: "error",
          title: d.needs_install ? "Install cloudflared first" : "Couldn't start",
          desc: d.error
        });else onToast({
          type: "success",
          title: "Public link is live"
        });
        load();
      }).catch(e => {
        setBusy(false);
        onToast({
          type: "error",
          title: String(e)
        });
      });
    };
    const stop = () => {
      setBusy(true);
      fetch("/api/share/stop", {
        method: "POST"
      }).then(() => {
        setBusy(false);
        load();
        onToast({
          type: "info",
          title: "Sharing stopped"
        });
      });
    };
    const copy = () => {
      if (st && st.link) {
        navigator.clipboard && navigator.clipboard.writeText(st.link);
        onToast({
          type: "success",
          title: "Link copied"
        });
      }
    };
    const install = () => {
      setInstLog(["Installing cloudflared… (this can take a minute)"]);
      fetch("/api/share/install", {
        method: "POST"
      }).then(r => r.json()).then(({
        job
      }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then(r => r.json()).then(j => {
          setInstLog(j.log || []);
          if (j.status === "done" || j.status === "error") {
            clearInterval(poll);
            load();
            onToast({
              type: j.status === "done" ? "success" : "error",
              title: "cloudflared " + j.status
            });
          }
        }), 1500);
      });
    };
    if (!st) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Remote access"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-3)"
      }
    }, "Checking\u2026"));
    const active = st.active;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 6
      }
    }, "Remote access"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        color: "var(--text-3)",
        marginTop: 0
      }
    }, "Create a public link so you (or anyone you send it to) can open this chat from a phone or any browser, anywhere."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 9,
        alignItems: "flex-start",
        background: "var(--field-bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "10px 12px",
        margin: "12px 0 16px"
      }
    }, /*#__PURE__*/React.createElement(I.AlertTriangle, {
      size: 16,
      style: {
        color: "var(--accent-deep)",
        flex: "0 0 auto",
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-2)",
        lineHeight: 1.5
      }
    }, "Anyone with the link can use this agent ", /*#__PURE__*/React.createElement("strong", null, "and the API key behind it"), ". The link carries a secret access key \u2014 only people you give the full link to can get in. Hit ", /*#__PURE__*/React.createElement("strong", null, "Stop sharing"), " when done.")), active ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "Public link ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-3)",
        fontWeight: 400
      }
    }, "\xB7 ", st.provider)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: st.link,
      readOnly: true,
      onFocusCapture: e => e.target.select(),
      style: {
        fontSize: 13
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: copy
    }, /*#__PURE__*/React.createElement(I.Copy, {
      size: 15
    }), " Copy")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        alignItems: "center",
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: qrRef,
      style: {
        width: 140,
        height: 140,
        flex: "0 0 140px",
        boxSizing: "border-box",
        background: "#fff",
        padding: 8,
        borderRadius: 10,
        border: "1px solid var(--border)",
        overflow: "hidden"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 13,
        color: "var(--text-2)",
        lineHeight: 1.6
      }
    }, "Scan with a phone camera to open it there.", /*#__PURE__*/React.createElement("br", null), "The link stops working the moment you stop sharing.")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      style: {
        marginTop: 20
      },
      disabled: busy,
      onClick: stop
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 15
    }), " Stop sharing")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "Method"), /*#__PURE__*/React.createElement("div", {
      className: "segmented",
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: provider === "cloudflared" ? "active" : "",
      onClick: () => setProvider("cloudflared")
    }, "Cloudflare (instant)"), /*#__PURE__*/React.createElement("button", {
      className: provider === "tailscale" ? "active" : "",
      disabled: !st.tailscale,
      onClick: () => setProvider("tailscale")
    }, "Tailscale Funnel")), provider === "cloudflared" && !st.cloudflared ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-3)"
      }
    }, "This method needs ", /*#__PURE__*/React.createElement("code", null, "cloudflared"), " (free, no account)."), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: install
    }, /*#__PURE__*/React.createElement(I.Download, {
      size: 15
    }), " Install cloudflared"), instLog && /*#__PURE__*/React.createElement("pre", {
      style: {
        marginTop: 12,
        maxHeight: 180,
        overflow: "auto",
        background: "#0c0c10",
        color: "#cfe",
        padding: 12,
        borderRadius: 10,
        fontSize: 12,
        whiteSpace: "pre-wrap"
      }
    }, instLog.join("\n"))) : /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: busy,
      onClick: start
    }, /*#__PURE__*/React.createElement(I.Share, {
      size: 15
    }), " ", busy ? "Starting…" : "Create public link"), provider === "tailscale" && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        marginTop: 10
      }
    }, "Uses your Tailscale tailnet. Needs Funnel enabled for this machine in the Tailscale admin (HTTPS + the \u201Cfunnel\u201D node attribute).")));
  }

  // ---- Password lock: enable/disable a real server-side login wall ----
  function PasswordLockCard({
    onToast
  }) {
    const [status, setStatus] = React.useState(null); // {enabled, authed}
    const [pw, setPw] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const load = () => fetch("/api/auth/status").then(r => r.json()).then(setStatus).catch(() => {});
    React.useEffect(() => {
      load();
    }, []);
    if (!status) return null;
    const post = (url, body, okMsg) => {
      setBusy(true);
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body || {})
      }).then(r => r.json()).then(d => {
        if (d.ok) {
          onToast && onToast({
            type: "success",
            title: okMsg
          });
          setPw("");
          load();
        } else onToast && onToast({
          type: "error",
          title: d.error || "Failed"
        });
        return d;
      }).catch(() => onToast && onToast({
        type: "error",
        title: "Network error"
      })).then(d => {
        setBusy(false);
        return d;
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "set-section",
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Password lock"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)",
        margin: "4px 0 12px"
      }
    }, "Require a password before AgentBay loads \u2014 protects it when you open it to the network or share a link. Stored only as a salted hash on this device."), status.enabled ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--green)",
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(I.Lock, {
      size: 14
    }), " Lock is on"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      disabled: busy,
      onClick: () => post("/api/auth/disable", {}, "Password lock turned off")
    }, "Turn off"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      disabled: busy,
      onClick: () => fetch("/api/auth/logout", {
        method: "POST"
      }).then(() => location.reload())
    }, "Log out")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "field",
      type: "password",
      placeholder: "Set a password (min 4 chars)",
      value: pw,
      onChange: e => setPw(e.target.value),
      style: {
        maxWidth: 280
      },
      onKeyDown: e => {
        if (e.key === "Enter" && pw.length >= 4) post("/api/auth/setup", {
          password: pw
        }, "Password lock on");
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: busy || pw.length < 4,
      onClick: () => post("/api/auth/setup", {
        password: pw
      }, "Password lock on")
    }, "Enable")));
  }
  function Settings({
    s,
    set,
    theme,
    onTheme,
    onClose,
    onDeleteAll,
    onImport,
    onExportAll,
    defaultModel,
    onDefaultModel,
    onToast
  }) {
    const [tab, setTab] = useState("general");
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      className: "settings-modal",
      width: 860,
      labelledBy: "set-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "settings-layout"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "settings-nav"
    }, /*#__PURE__*/React.createElement("div", {
      className: "nav-h",
      id: "set-h"
    }, "Settings"), TABS.map(t => /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "settings-tab" + (tab === t.id ? " active" : ""),
      onClick: () => setTab(t.id)
    }, React.createElement(I[t.icon], {
      size: 17
    }), /*#__PURE__*/React.createElement("span", {
      className: "lbl"
    }, t.label)))), /*#__PURE__*/React.createElement("div", {
      className: "settings-content"
    }, /*#__PURE__*/React.createElement("button", {
      className: "x-btn",
      style: {
        position: "absolute",
        right: 14,
        top: 14
      },
      "aria-label": "Close",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 18
    })), tab === "general" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 18
      }
    }, "General"), /*#__PURE__*/React.createElement(Row, {
      t: "Theme",
      d: "Light, dark, or follow your system."
    }, /*#__PURE__*/React.createElement(Segmented, {
      value: theme,
      onChange: onTheme,
      options: [{
        value: "light",
        label: "Light"
      }, {
        value: "dark",
        label: "Dark"
      }, {
        value: "system",
        label: "System"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      className: "set-row",
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, "Accent color"), /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, "Hover a color to preview it across the app, click to apply.")), /*#__PURE__*/React.createElement(AccentPicker, {
      value: s.accent,
      onPick: hex => set("accent", hex)
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Reduce motion",
      d: "Turn off animations, transitions & easter eggs."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.reduceMotion,
      onChange: v => set("reduceMotion", v),
      label: "Reduce motion"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Chat font size",
      d: "Comfortable reading size."
    }, /*#__PURE__*/React.createElement(Segmented, {
      value: s.fontSize,
      onChange: v => set("fontSize", v),
      options: [{
        value: "sm",
        label: "Small"
      }, {
        value: "md",
        label: "Default"
      }, {
        value: "lg",
        label: "Large"
      }]
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Show avatars",
      d: "Display the model icon on each reply."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.avatars,
      onChange: v => set("avatars", v),
      label: "Show avatars"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Render LaTeX",
      d: "Format math with KaTeX-style typesetting."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.latex,
      onChange: v => set("latex", v),
      label: "Render LaTeX"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Render code blocks",
      d: "Syntax-highlight fenced code."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.codeBlocks,
      onChange: v => set("codeBlocks", v),
      label: "Render code"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Desktop shortcut",
      d: "Add an AgentBay icon to your Desktop and apps menu \u2014 click it to open AgentBay, no terminal."
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      onClick: () => {
        fetch("/api/shortcut", {
          method: "POST"
        }).then(r => r.json()).then(d => {
          onToast(d.ok ? {
            type: "success",
            title: "Shortcut added",
            desc: "Look for AgentBay on your Desktop / apps menu."
          } : {
            type: "error",
            title: "Couldn't add shortcut",
            desc: d.error || ""
          });
        }).catch(() => onToast({
          type: "error",
          title: "Couldn't add shortcut"
        }));
      }
    }, /*#__PURE__*/React.createElement(I.Download, {
      size: 15
    }), " Add to Desktop")), /*#__PURE__*/React.createElement(PasswordLockCard, {
      onToast: onToast
    })), tab === "interface" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 18
      }
    }, "Interface"), /*#__PURE__*/React.createElement(Row, {
      t: "Collapse sidebar by default",
      d: "Start with a slim rail."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.collapseDefault,
      onChange: v => set("collapseDefault", v),
      label: "Collapse sidebar"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Message style",
      d: "Chat bubbles or full-width blocks."
    }, /*#__PURE__*/React.createElement(Segmented, {
      value: s.bubbles ? "bubbles" : "blocks",
      onChange: v => set("bubbles", v === "bubbles"),
      options: [{
        value: "bubbles",
        label: "Bubbles"
      }, {
        value: "blocks",
        label: "Blocks"
      }]
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Message timestamps",
      d: "Show the time beside each reply."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.timestamps,
      onChange: v => set("timestamps", v),
      label: "Timestamps"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Auto-scroll while streaming",
      d: "Follow the reply as it generates."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.autoScroll,
      onChange: v => set("autoScroll", v),
      label: "Auto-scroll"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Suggested follow-ups",
      d: "After each reply, suggest a few relevant questions to ask next."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.followups,
      onChange: v => set("followups", v),
      label: "Follow-ups"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Agents (experimental)",
      d: "Named personas you can pick per chat. Work in progress \u2014 off by default."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.agentsEnabled,
      onChange: v => set("agentsEnabled", v),
      label: "Agents"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Dashboard",
      d: "A visual overview of your chats and agent activity, in the sidebar. Off by default."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.dashboard === true,
      onChange: v => set("dashboard", v),
      label: "Dashboard"
    })), /*#__PURE__*/React.createElement("div", {
      className: "set-section",
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Agent transparency"), /*#__PURE__*/React.createElement(Row, {
      t: "Show the agent's thinking",
      d: "When the model reasons before answering, show that reasoning above the reply."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.showThinking,
      onChange: v => set("showThinking", v),
      label: "Show thinking"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Show tool calls",
      d: "List the tools the agent used (terminal, web, files\u2026) for each reply."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.showTools,
      onChange: v => set("showTools", v),
      label: "Show tools"
    })), /*#__PURE__*/React.createElement(Row, {
      t: "Context meter",
      d: "A small badge under each reply showing how much of the AI's memory window is in use (e.g. 15k / 1000k). Off by default."
    }, /*#__PURE__*/React.createElement(Switch, {
      on: s.showUsage === true,
      onChange: v => set("showUsage", v),
      label: "Context meter"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "set-section",
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Default model"), /*#__PURE__*/React.createElement("div", {
      className: "set-row",
      style: {
        borderTop: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, (D.MODELS.find(m => m.id === defaultModel) || {}).name || "No model selected"), /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, "New chats start with this model.")), /*#__PURE__*/React.createElement("select", {
      className: "mini-select",
      value: defaultModel,
      onChange: e => onDefaultModel(e.target.value)
    }, D.MODELS.map(m => /*#__PURE__*/React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name)))), /*#__PURE__*/React.createElement("div", {
      className: "set-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, "Fallback model"), /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, "If a reply errors, automatically retry it once with this model.")), /*#__PURE__*/React.createElement("select", {
      className: "mini-select",
      value: s.fallbackModel || "",
      onChange: e => set("fallbackModel", e.target.value)
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "None"), D.MODELS.map(m => /*#__PURE__*/React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name)))))), tab === "personalization" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 6
      }
    }, "Personalization"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-3)",
        fontSize: 13.5,
        marginTop: 0,
        marginBottom: 18
      }
    }, "A system prompt that's quietly included at the start of every chat."), /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "System prompt"), /*#__PURE__*/React.createElement("textarea", {
      className: "field",
      value: s.systemPrompt,
      onChange: e => set("systemPrompt", e.target.value),
      placeholder: "e.g. You are concise and friendly. Prefer examples over theory.",
      style: {
        minHeight: 140
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      style: {
        marginTop: 14
      },
      onClick: () => onToast({
        type: "success",
        title: "Personalization saved"
      })
    }, "Save")), tab === "connections" && /*#__PURE__*/React.createElement(ProvidersPanel, {
      onToast: onToast
    }), tab === "integrations" && /*#__PURE__*/React.createElement(IntegrationsPanel, {
      onToast: onToast
    }), tab === "agent" && /*#__PURE__*/React.createElement(AgentPanel, {
      onToast: onToast,
      s: s,
      set: set
    }), tab === "remote" && /*#__PURE__*/React.createElement(RemotePanel, {
      onToast: onToast
    }), tab === "data" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        marginBottom: 18
      }
    }, "Data Controls"), /*#__PURE__*/React.createElement(Row, {
      t: "Export all chats",
      d: "Download every conversation as JSON."
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      onClick: onExportAll
    }, /*#__PURE__*/React.createElement(I.Download, {
      size: 15
    }), " Export")), /*#__PURE__*/React.createElement(Row, {
      t: "Import chats",
      d: "Restore from a .json export."
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      onClick: onImport
    }, /*#__PURE__*/React.createElement(I.Upload, {
      size: 15
    }), " Import")), /*#__PURE__*/React.createElement(Row, {
      t: "Delete all chats",
      d: "Permanently remove every conversation."
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      onClick: onDeleteAll
    }, /*#__PURE__*/React.createElement(I.Trash, {
      size: 15
    }), " Delete all"))), tab === "about" && /*#__PURE__*/React.createElement(AboutPanel, {
      onToast: onToast
    }))));
  }
  window.Settings = Settings;
})();

/* ==================== js/modals.jsx ==================== */
/* Hermes — modals.jsx : search, popovers, share, tags, delete, export, import, tour, notes, workspace */
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const I = window.Icons;
  const {
    Modal,
    ModalHead,
    Popover,
    Switch,
    relTime
  } = window.UI;
  const D = window.HermesData;

  /* ---------- S5 Search ---------- */
  function highlight(text, q) {
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return text;
    return [text.slice(0, i), /*#__PURE__*/React.createElement("mark", {
      key: "m"
    }, text.slice(i, i + q.length)), text.slice(i + q.length)];
  }
  function SearchModal({
    sessions,
    onClose,
    onOpenChat,
    onNewChat,
    onOpenSettings
  }) {
    const [q, setQ] = useState("");
    const [cursor, setCursor] = useState(0);
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current && inputRef.current.focus();
    }, []);
    const chatMatches = q ? sessions.filter(s => s.title.toLowerCase().includes(q.toLowerCase())).slice(0, 20) : sessions.slice(0, 6);
    const msgMatches = q ? sessions.filter(s => s.messages.some(m => m.content.toLowerCase().includes(q.toLowerCase()))).slice(0, 8) : [];
    const items = [...chatMatches.map(s => ({
      type: "chat",
      s
    })), ...msgMatches.map(s => ({
      type: "msg",
      s
    }))];
    const showSuggest = q && items.length === 0;
    const choose = it => {
      if (it.type === "chat" || it.type === "msg") onOpenChat(it.s.id);
      onClose();
    };
    const onKey = e => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor(c => Math.min(c + 1, items.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor(c => Math.max(c - 1, 0));
      } else if (e.key === "Enter" && items[cursor]) {
        e.preventDefault();
        choose(items[cursor]);
      }
    };
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      className: "search-modal",
      width: 600
    }, /*#__PURE__*/React.createElement("div", {
      className: "search-input-wrap"
    }, /*#__PURE__*/React.createElement(I.Search, {
      size: 20,
      style: {
        color: "var(--text-3)"
      }
    }), /*#__PURE__*/React.createElement("input", {
      ref: inputRef,
      value: q,
      onChange: e => {
        setQ(e.target.value);
        setCursor(0);
      },
      onKeyDown: onKey,
      placeholder: "Search chats and messages\u2026",
      "aria-label": "Search"
    }), /*#__PURE__*/React.createElement("span", {
      className: "kbd-key"
    }, "ESC")), /*#__PURE__*/React.createElement("div", {
      className: "search-results"
    }, chatMatches.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "search-group-h"
    }, "Chats"), chatMatches.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "search-res" + (cursor === i ? " cursor" : ""),
      onClick: () => choose({
        type: "chat",
        s
      }),
      onMouseEnter: () => setCursor(i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.BookOpen, {
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      className: "body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ttl"
    }, highlight(s.title, q)), /*#__PURE__*/React.createElement("div", {
      className: "snip"
    }, relTime(s.updated), " \xB7 ", window.Chat.modelMeta(s.model).name))))), msgMatches.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "search-group-h"
    }, "Messages"), msgMatches.map((s, i) => {
      const idx = chatMatches.length + i;
      const hit = s.messages.find(m => m.content.toLowerCase().includes(q.toLowerCase()));
      const snippet = hit ? hit.content.replace(/[#*`>]/g, "").slice(0, 90) : "";
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        className: "search-res" + (cursor === idx ? " cursor" : ""),
        onClick: () => choose({
          type: "msg",
          s
        }),
        onMouseEnter: () => setCursor(idx)
      }, /*#__PURE__*/React.createElement("span", {
        className: "ic"
      }, /*#__PURE__*/React.createElement(I.FileText, {
        size: 16
      })), /*#__PURE__*/React.createElement("div", {
        className: "body"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ttl"
      }, s.title), /*#__PURE__*/React.createElement("div", {
        className: "snip"
      }, highlight(snippet, q))));
    })), showSuggest && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "search-group-h"
    }, "Suggestions"), /*#__PURE__*/React.createElement("div", {
      className: "search-res",
      onClick: () => {
        onNewChat();
        onClose();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Plus, {
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      className: "body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ttl"
    }, "Start a new chat"))), /*#__PURE__*/React.createElement("div", {
      className: "search-res",
      onClick: () => {
        onClose();
        onOpenSettings();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Settings, {
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      className: "body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ttl"
    }, "Open settings"))))), /*#__PURE__*/React.createElement("div", {
      className: "search-foot"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "kbd-key"
    }, "\u2191"), " ", /*#__PURE__*/React.createElement("span", {
      className: "kbd-key"
    }, "\u2193"), " navigate"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "kbd-key"
    }, "\u21B5"), " open"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "kbd-key"
    }, "esc"), " close")));
  }

  /* ---------- S6 User menu ---------- */
  function UserMenu({
    anchorRef,
    user,
    theme,
    onClose,
    onSettings,
    onShortcuts,
    onAbout,
    onTheme,
    onSignOut
  }) {
    return /*#__PURE__*/React.createElement(Popover, {
      anchorRef: anchorRef,
      onClose: onClose,
      side: "top",
      align: "left",
      width: 250,
      className: ""
    }, /*#__PURE__*/React.createElement("div", {
      className: "pop-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "avatar"
    }, user.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 650,
        fontSize: 14
      }
    }, user.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)"
      }
    }, user.email))), /*#__PURE__*/React.createElement("div", {
      className: "pop-divider"
    }), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onSettings();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Settings, {
      size: 17
    })), " Settings"), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onShortcuts();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Keyboard, {
      size: 17
    })), " Keyboard shortcuts ", /*#__PURE__*/React.createElement("span", {
      className: "kbd"
    }, "\u2318/")), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onAbout();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Info, {
      size: 17
    })), " About"), /*#__PURE__*/React.createElement("div", {
      className: "pop-divider"
    }), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => onTheme(theme === "dark" ? "light" : "dark")
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, theme === "dark" ? /*#__PURE__*/React.createElement(I.Sun, {
      size: 17
    }) : /*#__PURE__*/React.createElement(I.Moon, {
      size: 17
    })), "Switch to ", theme === "dark" ? "light" : "dark"), /*#__PURE__*/React.createElement("div", {
      className: "pop-divider"
    }), /*#__PURE__*/React.createElement("button", {
      className: "pop-item danger",
      onClick: () => {
        onClose();
        onSignOut();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.LogOut, {
      size: 17
    })), " Sign out"));
  }

  /* ---------- chat row context menu ---------- */
  function ChatMenu({
    anchorRef,
    session,
    onClose,
    onRename,
    onPin,
    onArchive,
    onShare,
    onExport,
    onTag,
    onDelete
  }) {
    return /*#__PURE__*/React.createElement(Popover, {
      anchorRef: anchorRef,
      onClose: onClose,
      align: "left",
      width: 210
    }, /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onRename(session);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Pencil, {
      size: 16
    })), " Rename"), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onPin(session);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Pin, {
      size: 16
    })), " ", session.pinned ? "Unpin" : "Pin"), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onTag(session);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Tag, {
      size: 16
    })), " Tags"), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onExport(session);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Download, {
      size: 16
    })), " Export"), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      onClick: () => {
        onClose();
        onArchive(session);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Archive, {
      size: 16
    })), " Archive"), /*#__PURE__*/React.createElement("div", {
      className: "pop-divider"
    }), /*#__PURE__*/React.createElement("button", {
      className: "pop-item danger",
      onClick: () => {
        onClose();
        onDelete(session);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Trash, {
      size: 16
    })), " Delete"));
  }

  /* ---------- export dropdown ---------- */
  function ExportMenu({
    anchorRef,
    onClose,
    onPick
  }) {
    const fmts = [["Markdown", "md"], ["JSON", "json"], ["Plain text", "txt"], ["HTML", "html"]];
    return /*#__PURE__*/React.createElement(Popover, {
      anchorRef: anchorRef,
      onClose: onClose,
      align: "right",
      width: 180
    }, fmts.map(([label, f]) => /*#__PURE__*/React.createElement("button", {
      key: f,
      className: "pop-item",
      onClick: () => {
        onClose();
        onPick(f, label);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.FileText, {
      size: 16
    })), " ", label)));
  }

  /* ---------- S8 keyboard shortcuts ---------- */
  function ShortcutsModal({
    onClose
  }) {
    const rows = [["⌘ K", "Search"], ["⌘ N", "New chat"], ["⌘ B", "Toggle sidebar"], ["⌘ /", "Focus composer / shortcuts"], ["Enter", "Send message"], ["Shift + Enter", "New line"], ["Esc", "Close modal"]];
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      width: 460,
      labelledBy: "kb-h"
    }, /*#__PURE__*/React.createElement(ModalHead, {
      title: "Keyboard shortcuts",
      onClose: onClose,
      id: "kb-h"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, rows.map(([k, a]) => /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderTop: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, a), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 5
      }
    }, k.split(" ").map((p, i) => p === "+" ? /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: "var(--text-faint)"
      }
    }, "+") : /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "kbd-key",
      style: {
        padding: "0 7px",
        height: 22
      }
    }, p)))))));
  }

  /* ---------- S9 share ---------- */
  function ShareModal({
    session,
    onClose,
    onToast
  }) {
    const [shared, setShared] = useState(false);
    const [incAtt, setIncAtt] = useState(true);
    const [incSys, setIncSys] = useState(false);
    const link = "https://hermes.app/s/" + session.id + "x" + Math.random().toString(36).slice(2, 7);
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      width: 460,
      labelledBy: "sh-h"
    }, /*#__PURE__*/React.createElement(ModalHead, {
      title: "Share chat",
      onClose: onClose,
      id: "sh-h"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 0,
        color: "var(--text-2)",
        fontSize: 14
      }
    }, "Anyone with the link can view a read-only copy of ", /*#__PURE__*/React.createElement("strong", null, session.title), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        margin: "8px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderTop: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "Include attachments"), /*#__PURE__*/React.createElement(Switch, {
      on: incAtt,
      onChange: setIncAtt,
      label: "Attachments"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderTop: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "Include system prompt"), /*#__PURE__*/React.createElement(Switch, {
      on: incSys,
      onChange: setIncSys,
      label: "System prompt"
    }))), !shared ? /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-full",
      onClick: () => {
        setShared(true);
        onToast({
          type: "success",
          title: "Share link created"
        });
      }
    }, /*#__PURE__*/React.createElement(I.Share, {
      size: 16
    }), " Create share link") : /*#__PURE__*/React.createElement("div", {
      className: "anim-fadein"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "qr"
    }, /*#__PURE__*/React.createElement(I.QrCode, {
      size: 88
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: link,
      readOnly: true,
      style: {
        fontSize: 13
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        navigator.clipboard && navigator.clipboard.writeText(link);
        onToast({
          type: "success",
          title: "Link copied"
        });
      }
    }, /*#__PURE__*/React.createElement(I.Copy, {
      size: 15
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setShared(false);
        onToast({
          type: "info",
          title: "Sharing stopped"
        });
      },
      style: {
        color: "var(--red)",
        fontSize: 13,
        marginTop: 12
      }
    }, "Stop sharing"))))));
  }

  /* ---------- S14 tags ---------- */
  function TagModal({
    session,
    allTags,
    onClose,
    onSave,
    onToast
  }) {
    const [sel, setSel] = useState(session.tags || []);
    const [tags, setTags] = useState(allTags);
    const [nw, setNw] = useState("");
    const toggle = t => setSel(x => x.includes(t) ? x.filter(y => y !== t) : [...x, t]);
    const add = () => {
      const t = nw.trim().toLowerCase();
      if (t && !tags.includes(t)) {
        setTags([...tags, t]);
        setSel([...sel, t]);
      }
      setNw("");
    };
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      width: 440,
      labelledBy: "tag-h"
    }, /*#__PURE__*/React.createElement(ModalHead, {
      title: "Tags",
      onClose: onClose,
      id: "tag-h"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 16
      }
    }, tags.map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      className: "tag-chip" + (sel.includes(t) ? " sel" : ""),
      onClick: () => toggle(t)
    }, sel.includes(t) && /*#__PURE__*/React.createElement(I.Check, {
      size: 13
    }), t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: nw,
      onChange: e => setNw(e.target.value),
      onKeyDown: e => e.key === "Enter" && add(),
      placeholder: "Create a tag\u2026"
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: add
    }, "Add"))), /*#__PURE__*/React.createElement("div", {
      className: "modal-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        onSave(sel);
        onToast({
          type: "success",
          title: "Tags updated"
        });
      }
    }, "Save")));
  }

  /* ---------- S15 delete confirm ---------- */
  function DeleteModal({
    title,
    name,
    body,
    requireType,
    onClose,
    onConfirm
  }) {
    const [txt, setTxt] = useState("");
    const ok = !requireType || txt === name;
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      width: 420,
      labelledBy: "del-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body",
      style: {
        textAlign: "center",
        paddingTop: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 12,
        background: "rgba(217,83,79,.12)",
        color: "var(--red)",
        display: "grid",
        placeItems: "center",
        margin: "0 auto 14px"
      }
    }, /*#__PURE__*/React.createElement(I.AlertTriangle, {
      size: 24
    })), /*#__PURE__*/React.createElement("h2", {
      id: "del-h",
      style: {
        margin: "0 0 6px",
        fontSize: 18
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-2)",
        fontSize: 14,
        margin: 0
      }
    }, body), requireType && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "Type ", /*#__PURE__*/React.createElement("strong", null, name), " to confirm"), /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: txt,
      onChange: e => setTxt(e.target.value),
      placeholder: name
    }))), /*#__PURE__*/React.createElement("div", {
      className: "modal-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger",
      disabled: !ok,
      onClick: onConfirm
    }, "Delete")));
  }

  /* ---------- S12 new folder ---------- */
  function FolderModal({
    onClose,
    onCreate
  }) {
    const [name, setName] = useState("");
    const colors = ["#d9a36b", "#4a9e6a", "#4a7fd9", "#b06fd9", "#d9534f", "#d9b84a", "#46b3a9", "#8a8a8a"];
    const [color, setColor] = useState(colors[0]);
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      width: 420,
      labelledBy: "fld-h"
    }, /*#__PURE__*/React.createElement(ModalHead, {
      title: "New folder",
      onClose: onClose,
      id: "fld-h"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "Name"), /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: name,
      onChange: e => setName(e.target.value),
      placeholder: "e.g. Work",
      autoFocus: true
    }), /*#__PURE__*/React.createElement("label", {
      className: "field-label",
      style: {
        marginTop: 16
      }
    }, "Color"), /*#__PURE__*/React.createElement("div", {
      className: "swatches"
    }, colors.map(c => /*#__PURE__*/React.createElement("div", {
      key: c,
      className: "swatch" + (color === c ? " sel" : ""),
      style: {
        background: c
      },
      onClick: () => setColor(c)
    })))), /*#__PURE__*/React.createElement("div", {
      className: "modal-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: !name.trim(),
      onClick: () => onCreate({
        name: name.trim(),
        color
      })
    }, "Create")));
  }

  /* ---------- S17 import ---------- */
  function ImportModal({
    onClose,
    onToast,
    onImport
  }) {
    const [parsed, setParsed] = useState(null);
    const [err, setErr] = useState("");
    const fileRef = useRef(null);
    const readFile = file => {
      if (!file) return;
      const fr = new FileReader();
      fr.onload = () => {
        try {
          const data = JSON.parse(String(fr.result));
          const arr = Array.isArray(data) ? data : Array.isArray(data.sessions) ? data.sessions : data.messages ? [data] : [];
          const clean = arr.filter(s => s && Array.isArray(s.messages)).map(s => ({
            id: "s" + Math.random().toString(36).slice(2, 9),
            title: s.title || "Imported chat",
            model: s.model || "",
            group: "Today",
            tags: s.tags || [],
            pinned: false,
            updated: Date.now(),
            messages: s.messages
          }));
          if (!clean.length) {
            setErr("No valid chats found in that file.");
            return;
          }
          setErr("");
          setParsed(clean);
        } catch (e) {
          setErr("That doesn't look like a valid .json export.");
        }
      };
      fr.readAsText(file);
    };
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: onClose,
      width: 460,
      labelledBy: "imp-h"
    }, /*#__PURE__*/React.createElement(ModalHead, {
      title: "Import chats",
      onClose: onClose,
      id: "imp-h"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React.createElement("input", {
      ref: fileRef,
      type: "file",
      accept: ".json,application/json",
      style: {
        display: "none"
      },
      onChange: e => readFile(e.target.files && e.target.files[0])
    }), !parsed ? /*#__PURE__*/React.createElement("div", {
      onClick: () => fileRef.current && fileRef.current.click(),
      onDragOver: e => e.preventDefault(),
      onDrop: e => {
        e.preventDefault();
        readFile(e.dataTransfer.files && e.dataTransfer.files[0]);
      },
      style: {
        border: "2px dashed var(--border-strong)",
        borderRadius: 12,
        padding: "40px 20px",
        textAlign: "center",
        cursor: "pointer",
        color: "var(--text-3)"
      }
    }, /*#__PURE__*/React.createElement(I.Upload, {
      size: 28,
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--text)"
      }
    }, "Drop a .json export here"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        marginTop: 4
      }
    }, "or click to browse"), err && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        marginTop: 12,
        color: "var(--danger, #d9534f)"
      }
    }, err)) : /*#__PURE__*/React.createElement("div", {
      className: "anim-fadein"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: "var(--text-2)",
        marginBottom: 10
      }
    }, "Found ", parsed.length, " chat", parsed.length === 1 ? "" : "s", " to import:"), parsed.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "8px 0",
        borderTop: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement(I.BookOpen, {
      size: 15,
      style: {
        color: "var(--text-3)"
      }
    }), p.title)))), parsed && /*#__PURE__*/React.createElement("div", {
      className: "modal-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        onImport && onImport(parsed);
        onClose();
        onToast({
          type: "success",
          title: "Imported " + parsed.length + " chat" + (parsed.length === 1 ? "" : "s")
        });
      }
    }, "Import ", parsed.length, " chat", parsed.length === 1 ? "" : "s")));
  }

  /* ---------- S23 changelog ---------- */
  const CHANGELOG_LATEST = "3.0.1";
  window.CHANGELOG_LATEST = CHANGELOG_LATEST; // shared with the App IIFE (separate scope)
  function ChangelogModal({
    onClose,
    onSeen
  }) {
    const [dontShow, setDontShow] = React.useState(false);
    const close = () => {
      onSeen && onSeen(dontShow ? "ALL" : CHANGELOG_LATEST);
      onClose();
    };
    const entries = [{
      v: "3.0.1",
      d: "Refined the streaming animation & added a thinking mascot."
    }, {
      v: "3.0.0",
      d: "Brand-new simplified interface for everyday chat."
    }, {
      v: "2.8.4",
      d: "Faster search across chats and messages."
    }, {
      v: "2.8.0",
      d: "Live task plan, rich tool-call cards & a context meter."
    }, {
      v: "2.7.2",
      d: "Share links now include a QR code."
    }];
    return /*#__PURE__*/React.createElement(Modal, {
      onClose: close,
      width: 480,
      labelledBy: "cl-h"
    }, /*#__PURE__*/React.createElement(ModalHead, {
      title: "What's new",
      onClose: close,
      id: "cl-h"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal-body"
    }, entries.map(e => /*#__PURE__*/React.createElement("div", {
      key: e.v,
      style: {
        display: "flex",
        gap: 12,
        padding: "12px 0",
        borderTop: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag-mini",
      style: {
        height: 18,
        alignSelf: "start"
      }
    }, e.v), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--text-2)"
      }
    }, e.d)))), /*#__PURE__*/React.createElement("div", {
      className: "modal-foot",
      style: {
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "var(--text-3)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: dontShow,
      onChange: e => setDontShow(e.target.checked)
    }), " Don't show again"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: close
    }, "Got it")));
  }
  window.Modals = {
    SearchModal,
    UserMenu,
    ChatMenu,
    ExportMenu,
    ShortcutsModal,
    ShareModal,
    TagModal,
    DeleteModal,
    FolderModal,
    ImportModal,
    ChangelogModal
  };
})();

/* ==================== js/views.jsx ==================== */
/* Hermes — views.jsx : Login, Notes, Workspace, Tour, ModelMenu */
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const I = window.Icons;
  const {
    Popover
  } = window.UI;
  const D = window.HermesData;

  /* ---------- S1 Login ---------- */
  function Login({
    onLogin
  }) {
    const [pw, setPw] = useState("");
    const [err, setErr] = useState("");
    const [shake, setShake] = useState(false);
    const [loading, setLoading] = useState(false);
    const submit = e => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        // any non-empty password "works"; empty triggers the 401 shake
        if (pw.trim().length >= 1) {
          onLogin();
        } else {
          setErr("Please enter your password.");
          setShake(true);
          setTimeout(() => setShake(false), 500);
          setLoading(false);
        }
      }, 550);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "login-screen"
    }, /*#__PURE__*/React.createElement(window.HermesGlyph, {
      size: 320,
      style: {
        position: "absolute",
        bottom: -60,
        right: -40
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "login-bg-glyph",
      style: {
        bottom: -60,
        right: -40
      }
    }), /*#__PURE__*/React.createElement("form", {
      className: "login-card" + (shake ? " shake" : ""),
      onSubmit: submit
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-logo"
    }, /*#__PURE__*/React.createElement(window.HermesGlyph, {
      size: 56
    })), /*#__PURE__*/React.createElement("div", {
      className: "login-h"
    }, "Welcome to Hermes"), /*#__PURE__*/React.createElement("div", {
      className: "login-sub"
    }, "Sign in to continue"), /*#__PURE__*/React.createElement("input", {
      className: "field",
      type: "password",
      value: pw,
      autoFocus: true,
      onChange: e => {
        setPw(e.target.value);
        setErr("");
      },
      placeholder: "Password",
      "aria-label": "Password"
    }), /*#__PURE__*/React.createElement("div", {
      className: "login-err"
    }, err), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-full",
      type: "submit",
      disabled: loading
    }, loading ? /*#__PURE__*/React.createElement("span", {
      className: "typing",
      style: {
        height: 14
      }
    }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)) : "Continue"), /*#__PURE__*/React.createElement("div", {
      className: "login-hint"
    }, "Forgot password? Contact your admin.")));
  }

  /* ---------- model dropdown ---------- */
  const MM_CAP = 20; // models shown per provider before "search to see the rest" (huge catalogs stay usable)
  function ModelMenu({
    anchorRef,
    current,
    defaultModel,
    onClose,
    onPick,
    onSetDefault
  }) {
    const [q, setQ] = React.useState("");
    const all = D.MODELS;
    const ql = q.trim().toLowerCase();
    const matches = ql ? all.filter(m => (m.name + " " + (m.desc || "")).toLowerCase().includes(ql)) : all;
    // group, preserving first-seen provider order
    const order = [];
    const gmap = {};
    matches.forEach(m => {
      const g = m.group || "Models";
      if (!gmap[g]) {
        gmap[g] = [];
        order.push(g);
      }
      gmap[g].push(m);
    });
    const curMeta = all.find(m => m.id === current);
    const [open, setOpen] = React.useState({});
    const isOpen = g => {
      if (ql) return true;
      if (g in open) return open[g];
      if (curMeta && curMeta.group === g) return true;
      return (gmap[g] || []).length <= 3 || order.length === 1;
    };
    return /*#__PURE__*/React.createElement(Popover, {
      anchorRef: anchorRef,
      onClose: onClose,
      align: "left",
      className: "model-menu",
      width: 368
    }, /*#__PURE__*/React.createElement("div", {
      className: "mm-search"
    }, /*#__PURE__*/React.createElement(I.Search, {
      size: 15
    }), /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      className: "mm-input",
      placeholder: "Search models\u2026",
      value: q,
      onChange: e => setQ(e.target.value)
    }), q && /*#__PURE__*/React.createElement("button", {
      className: "mm-clear",
      onClick: () => setQ(""),
      "aria-label": "Clear"
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mm-scroll"
    }, order.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "mm-empty"
    }, "No models match \u201C", q, "\u201D."), order.map(g => {
      const items = gmap[g];
      const exp = isOpen(g);
      const GIc = I[items[0] && items[0].icon] || I.Bot;
      return /*#__PURE__*/React.createElement("div", {
        key: g,
        className: "mm-group"
      }, /*#__PURE__*/React.createElement("button", {
        className: "mm-head",
        onClick: () => setOpen(o => Object.assign({}, o, {
          [g]: !exp
        }))
      }, /*#__PURE__*/React.createElement("span", {
        className: "mm-head-ic"
      }, /*#__PURE__*/React.createElement(GIc, {
        size: 15
      })), /*#__PURE__*/React.createElement("span", {
        className: "mm-head-name"
      }, g), /*#__PURE__*/React.createElement("span", {
        className: "mm-head-count"
      }, items.length), /*#__PURE__*/React.createElement("span", {
        className: "mm-head-chev"
      }, exp ? /*#__PURE__*/React.createElement(I.ChevronDown, {
        size: 15
      }) : /*#__PURE__*/React.createElement(I.ChevronRight, {
        size: 15
      }))), exp && (ql ? items : items.slice(0, MM_CAP)).map(m => {
        const Ic = I[m.icon] || I.Bot;
        return /*#__PURE__*/React.createElement("button", {
          key: m.id,
          className: "model-opt" + (m.id === current ? " sel" : ""),
          onClick: () => {
            onClose();
            onPick(m.id);
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "mo-icon"
        }, /*#__PURE__*/React.createElement(Ic, {
          size: 16
        })), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "mo-name"
        }, m.name, m.id === defaultModel && /*#__PURE__*/React.createElement("span", {
          className: "tag-mini"
        }, "Default"))), m.id === current && /*#__PURE__*/React.createElement("span", {
          className: "check"
        }, /*#__PURE__*/React.createElement(I.Check, {
          size: 17
        })));
      }), exp && !ql && items.length > MM_CAP && /*#__PURE__*/React.createElement("div", {
        className: "mm-more"
      }, "+", items.length - MM_CAP, " more \u2014 type above to search them"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "pop-divider"
    }), /*#__PURE__*/React.createElement("button", {
      className: "pop-item",
      style: {
        fontSize: 13,
        color: "var(--text-2)"
      },
      onClick: () => {
        onClose();
        onSetDefault(current);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, /*#__PURE__*/React.createElement(I.Pin, {
      size: 15
    })), " Set current as default"));
  }

  /* ---------- S10 Notes ---------- */
  function Notes({
    onClose
  }) {
    const load = () => {
      try {
        return JSON.parse(localStorage.getItem("ab_notes") || "[]");
      } catch (e) {
        return [];
      }
    };
    const [notes, setNotes] = React.useState(load);
    const [active, setActive] = React.useState(() => {
      const n = load();
      return n.length ? n[0].id : null;
    });
    React.useEffect(() => {
      try {
        localStorage.setItem("ab_notes", JSON.stringify(notes));
      } catch (e) {}
    }, [notes]);
    const note = notes.find(n => n.id === active);
    const update = body => setNotes(ns => ns.map(n => n.id === active ? {
      ...n,
      body,
      title: (body.split("\n")[0] || "Untitled").replace(/^#+\s*/, "").slice(0, 40) || "Untitled"
    } : n));
    const addNote = () => {
      const id = Date.now();
      setNotes(ns => [{
        id,
        title: "Untitled",
        body: "# Untitled\n\n",
        date: "Now"
      }, ...ns]);
      setActive(id);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "overlay",
      style: {
        padding: 0,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay-scrim",
      onClick: onClose
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal",
      style: {
        position: "relative",
        width: "min(1000px, 94vw)",
        height: "min(680px, 92vh)",
        maxHeight: "92vh",
        margin: "auto"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(I.Notebook, {
      size: 18,
      style: {
        verticalAlign: "-3px",
        marginRight: 8
      }
    }), "Notes"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: addNote
    }, /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    }), " New note"), /*#__PURE__*/React.createElement("button", {
      className: "x-btn",
      onClick: onClose,
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 18
    })))), /*#__PURE__*/React.createElement("div", {
      className: "split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "notes-list"
    }, notes.map(n => /*#__PURE__*/React.createElement("div", {
      key: n.id,
      className: "note-item" + (n.id === active ? " active" : ""),
      onClick: () => setActive(n.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "nt"
    }, n.title), /*#__PURE__*/React.createElement("div", {
      className: "ns"
    }, n.body.replace(/[#*>-]/g, "").trim().slice(0, 50)), /*#__PURE__*/React.createElement("div", {
      className: "nd"
    }, n.date)))), /*#__PURE__*/React.createElement("div", {
      className: "note-editor"
    }, note ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      value: note.body,
      onChange: e => update(e.target.value),
      spellCheck: false,
      style: {
        flex: 1,
        borderRight: "1px solid var(--border)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "md",
      style: {
        flex: 1,
        padding: "22px 26px",
        overflowY: "auto"
      },
      dangerouslySetInnerHTML: {
        __html: D.renderMarkdown(note.body)
      }
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        placeItems: "center",
        height: "100%",
        color: "var(--text-3)",
        textAlign: "center",
        padding: 30
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(I.Notebook, {
      size: 34,
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("div", null, "No notes yet."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        marginTop: 4
      }
    }, "Click \u201CNew note\u201D to start one.")))))));
  }

  /* ---------- S24 onboarding tour ---------- */
  const TOUR_STEPS = [{
    sel: ".composer",
    title: "Ask anything",
    body: "Type your question here and press Enter. Shift+Enter adds a new line.",
    place: "top"
  }, {
    sel: ".model-pill",
    title: "Pick a model",
    body: "Every model here runs through your agent — with tools (terminal, web, files) — using that model as its brain. You're never talking to a plain chatbot.",
    place: "bottom"
  }, {
    sel: ".sb-new",
    title: "Your chats live here",
    body: "Start fresh with New Chat. Past conversations are grouped by date in the sidebar.",
    place: "right"
  }, {
    sel: ".topbar .right .icon-btn",
    title: "Settings & more",
    body: "Open settings to change the theme, turn off animations, and more.",
    place: "bottom"
  }];
  function Tour({
    onDone
  }) {
    const [step, setStep] = useState(0);
    const [rect, setRect] = useState(null);
    const s = TOUR_STEPS[step];
    useEffect(() => {
      const el = document.querySelector(s.sel);
      if (el) {
        const r = el.getBoundingClientRect();
        setRect({
          top: r.top - 6,
          left: r.left - 6,
          width: r.width + 12,
          height: r.height + 12
        });
      } else setRect(null);
    }, [step]);
    if (!rect) return null;
    const cardStyle = {};
    if (s.place === "top") {
      cardStyle.left = Math.max(12, rect.left);
      cardStyle.bottom = window.innerHeight - rect.top + 10;
    } else if (s.place === "bottom") {
      cardStyle.left = Math.min(rect.left, window.innerWidth - 300);
      cardStyle.top = rect.top + rect.height + 10;
    } else if (s.place === "right") {
      cardStyle.left = rect.left + rect.width + 10;
      cardStyle.top = rect.top;
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "tour-spot",
      style: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "tour-card",
      style: cardStyle
    }, /*#__PURE__*/React.createElement("h4", null, s.title), /*#__PURE__*/React.createElement("p", null, s.body), /*#__PURE__*/React.createElement("div", {
      className: "tour-foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tour-dots"
    }, TOUR_STEPS.map((_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: i === step ? "on" : ""
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, step < TOUR_STEPS.length - 1 && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      style: {
        padding: "6px 12px"
      },
      onClick: onDone
    }, "Skip"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      style: {
        padding: "6px 14px"
      },
      onClick: () => step < TOUR_STEPS.length - 1 ? setStep(step + 1) : onDone()
    }, step < TOUR_STEPS.length - 1 ? "Next" : "Done")))));
  }

  /* ---------- Onboarding gate: AgentBay needs a real agent to be more than a chatbot ----------
     Shows when no agent is detected on this machine. Guides install; if the user
     skips, it warns that AgentBay will act as a plain chatbot (no tools/terminal)
     and re-appears on the next launch until an agent is actually installed. */
  function OnboardingGate({
    onInstalled,
    onSkip
  }) {
    const [agents, setAgents] = useState(null); // null = checking
    const [busy, setBusy] = useState(null); // agent id currently installing
    const [log, setLog] = useState("");
    const load = () => fetch("/api/agents").then(r => r.json()).then(d => {
      const list = d.agents || [];
      setAgents(list);
      if (list.some(a => a.installed)) onInstalled && onInstalled();
      return list;
    }).catch(() => setAgents([]));
    useEffect(() => {
      load();
    }, []);
    const install = aid => {
      setBusy(aid);
      setLog("Starting install of " + aid + "…\n");
      fetch("/api/install", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agent: aid
        })
      }).then(r => r.json()).then(({
        job
      }) => {
        if (!job) {
          setBusy(null);
          setLog("Could not start installer.");
          return;
        }
        const poll = setInterval(() => fetch("/api/install/status/" + job).then(r => r.json()).then(st => {
          setLog((st.log || []).join("\n"));
          if (st.status === "done" || st.status === "error") {
            clearInterval(poll);
            setBusy(null);
            load(); // flips to installed → onInstalled() closes the gate
          }
        }), 1200);
      }).catch(() => {
        setBusy(null);
        setLog("Install request failed.");
      });
    };
    if (agents === null) return null; // still checking — no flash
    if (agents.some(a => a.installed)) return null; // gate passed

    return /*#__PURE__*/React.createElement("div", {
      className: "overlay",
      style: {
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay-scrim"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal",
      style: {
        position: "relative",
        width: "min(560px, 94vw)",
        margin: "auto",
        padding: 26
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 44,
        height: 44
      }
    }, /*#__PURE__*/React.createElement(window.HermesGlyph, {
      size: 44
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 20
      }
    }, "Welcome to AgentBay"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-3)"
      }
    }, "Let's connect a real agent first."))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--amber)",
        background: "color-mix(in srgb, var(--amber) 9%, transparent)",
        borderRadius: 11,
        padding: "11px 13px",
        margin: "14px 0",
        fontSize: 13.5,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("b", null, "No agent detected on this computer."), " AgentBay is a front-end for an agent (Hermes). Without one, every model here is a ", /*#__PURE__*/React.createElement("b", null, "plain chatbot"), " \u2014 no terminal, no web, no files, no tools. Install an agent to unlock all of it."), agents.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.agent,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        border: "1px solid var(--border)",
        borderRadius: 11,
        padding: 13,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 650
      }
    }, a.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-3)"
      }
    }, a.installed ? "✓ installed" : "not installed — one click to set up")), !a.installed && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      disabled: !!busy,
      onClick: () => install(a.agent)
    }, busy === a.agent ? "Installing…" : "Install"))), log && /*#__PURE__*/React.createElement("pre", {
      style: {
        marginTop: 12,
        maxHeight: 160,
        overflow: "auto",
        background: "#0c0c10",
        color: "#cfe",
        padding: 12,
        borderRadius: 10,
        fontSize: 12,
        whiteSpace: "pre-wrap"
      }
    }, log), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://hermes-agent.nousresearch.com/docs/getting-started/quickstart",
      target: "_blank",
      rel: "noreferrer",
      style: {
        fontSize: 12.5,
        color: "var(--accent-deep)"
      }
    }, "What's an agent? \u2192"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      disabled: !!busy,
      onClick: onSkip,
      title: "AgentBay will work as a plain chatbot until you install an agent"
    }, "Skip \u2014 use as a chatbot"))));
  }

  /* ---------- Dashboard: your chats & agent at a glance ----------
     Every chart is hand-rolled SVG (no chart library, works offline) and chosen
     to be readable by a non-technical person: a 24-hour clock, activity rings,
     a flower of tool petals, a dot lane of reply speeds, a calendar of days. */
  const DASH_COLORS = ["var(--accent)", "#7d9bd8", "#67b894", "#c98ab1", "#d8b25e", "#8893a8"];
  const DASH_KIND = {
    execute: "Ran commands",
    read: "Read files",
    edit: "Edited files",
    search: "Searched",
    fetch: "Browsed the web",
    think: "Thought it through",
    delete: "Cleaned up",
    move: "Moved files",
    other: "Other tools"
  };
  const DASH_SRC = {
    cli: "Terminal",
    acp: "AgentBay & editors",
    cron: "Scheduled jobs",
    telegram: "Telegram",
    api_server: "API",
    discord: "Discord",
    slack: "Slack",
    whatsapp: "WhatsApp",
    other: "Other"
  };
  function dashNum(n) {
    n = n || 0;
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + "k";
    return String(n);
  }
  function dashCrunch(sessions) {
    const o = {
      chats: 0,
      you: 0,
      ai: 0,
      wordsYou: 0,
      wordsAi: 0,
      images: 0,
      tools: 0,
      byKind: {},
      models: {},
      hours: new Array(24).fill(0),
      days: {},
      speeds: [],
      ctx: [],
      plansDone: 0,
      plansTotal: 0,
      top: []
    };
    (sessions || []).forEach(s => {
      const msgs = (s.messages || []).filter(m => m && (m.role === "user" || m.role === "assistant"));
      if (!msgs.length) return;
      o.chats++;
      o.top.push({
        title: s.title || "Untitled",
        n: msgs.length
      });
      msgs.forEach(m => {
        const d = new Date(m.t || s.updated || Date.now());
        const key = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        o.days[key] = (o.days[key] || 0) + 1;
        // hour of day: new messages carry a real timestamp; older ones have a "2:14 PM" label
        let hr = m.t ? d.getHours() : null;
        if (hr == null && typeof m.ts === "string") {
          const mt = m.ts.match(/(\d+):\d+\s*(AM|PM)?/i);
          if (mt) {
            hr = parseInt(mt[1], 10) % 12;
            if (/pm/i.test(mt[2] || "")) hr += 12;
          }
        }
        if (hr != null && hr >= 0 && hr < 24) o.hours[hr]++;
        const words = String(m.content || "").trim().split(/\s+/).filter(Boolean).length;
        if (m.role === "user") {
          o.you++;
          o.wordsYou += words;
          if (m.images && m.images.length) o.images += m.images.length;
        } else {
          o.ai++;
          o.wordsAi += words;
          if (m.model) o.models[m.model] = (o.models[m.model] || 0) + 1;
          const secs = m.took || m.thought;
          if (secs) o.speeds.push(Math.min(60, secs));
          if (m.usage && m.usage.size > 0) o.ctx.push(Math.min(100, m.usage.used / m.usage.size * 100));
          (m.tools || []).forEach(t => {
            o.tools++;
            const k = t && t.kind || "other";
            o.byKind[k] = (o.byKind[k] || 0) + 1;
          });
          if (m.plan && m.plan.length) {
            o.plansTotal += m.plan.length;
            o.plansDone += m.plan.filter(p => p.status === "completed").length;
          }
        }
      });
    });
    o.activeDays = Object.keys(o.days).length;
    o.top.sort((a, b) => b.n - a.n);
    o.top = o.top.slice(0, 5);
    return o;
  }

  // A 24-hour clock — each hand is an hour, longer = busier.
  function ClockChart({
    hours
  }) {
    const W = 260,
      cx = W / 2,
      cy = 126,
      r0 = 42,
      rMax = 64;
    const max = Math.max(1, Math.max.apply(null, hours));
    const total = hours.reduce((a, b) => a + b, 0);
    const peak = hours.indexOf(Math.max.apply(null, hours));
    const fmt = h => h === 0 ? "12 AM" : h < 12 ? h + " AM" : h === 12 ? "12 PM" : h - 12 + " PM";
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " 252",
      className: "dash-svg",
      role: "img",
      "aria-label": "Activity by hour"
    }, hours.map((n, h) => {
      const a = h / 24 * Math.PI * 2 - Math.PI / 2;
      const len = n ? 8 + n / max * (rMax - 8) : 3;
      return /*#__PURE__*/React.createElement("line", {
        key: h,
        x1: cx + Math.cos(a) * r0,
        y1: cy + Math.sin(a) * r0,
        x2: cx + Math.cos(a) * (r0 + len),
        y2: cy + Math.sin(a) * (r0 + len),
        stroke: n && h === peak ? "var(--accent)" : "color-mix(in srgb, var(--accent) " + (n ? Math.round(26 + n / max * 50) : 13) + "%, transparent)",
        strokeWidth: "6",
        strokeLinecap: "round"
      });
    }), [["12 AM", 0], ["6 AM", 6], ["12 PM", 12], ["6 PM", 18]].map(([t, h]) => {
      const a = h / 24 * Math.PI * 2 - Math.PI / 2,
        rr = r0 + rMax + 15;
      return /*#__PURE__*/React.createElement("text", {
        key: t,
        x: cx + Math.cos(a) * rr,
        y: cy + Math.sin(a) * rr + 3.5,
        textAnchor: "middle",
        className: "dash-tick"
      }, t);
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 3,
      textAnchor: "middle",
      className: "dash-center-big"
    }, total ? fmt(peak) : "—"), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + 15,
      textAnchor: "middle",
      className: "dash-center-sub"
    }, total ? "your busiest hour" : "no times yet"));
  }
  function dashArc(cx, cy, r, pct) {
    const a0 = -Math.PI / 2,
      a1 = a0 + Math.min(0.9999, Math.max(0.004, pct)) * Math.PI * 2;
    return "M " + (cx + Math.cos(a0) * r) + " " + (cy + Math.sin(a0) * r) + " A " + r + " " + r + " 0 " + (pct > 0.5 ? 1 : 0) + " 1 " + (cx + Math.cos(a1) * r) + " " + (cy + Math.sin(a1) * r);
  }

  // Activity rings — each ring is a model; how far it travels is its share of replies.
  function RingChart({
    items,
    total
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dash-rings"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 140 140",
      width: "132",
      height: "132"
    }, items.map((it, i) => {
      const r = 58 - i * 13;
      return /*#__PURE__*/React.createElement("g", {
        key: it.label
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "70",
        cy: "70",
        r: r,
        fill: "none",
        stroke: "color-mix(in srgb, var(--text-3) 13%, transparent)",
        strokeWidth: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: dashArc(70, 70, r, total ? it.n / total : 0),
        fill: "none",
        stroke: DASH_COLORS[i % DASH_COLORS.length],
        strokeWidth: "9",
        strokeLinecap: "round"
      }));
    })), /*#__PURE__*/React.createElement("div", {
      className: "dash-legend"
    }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: it.label,
      className: "dash-leg-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot",
      style: {
        background: DASH_COLORS[i % DASH_COLORS.length]
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "lab",
      title: it.label
    }, it.label), /*#__PURE__*/React.createElement("span", {
      className: "val"
    }, Math.round(total ? it.n / total * 100 : 0), "%")))));
  }

  // A flower — each petal is a kind of work the agent did; bigger petal = more often.
  function PetalChart({
    items
  }) {
    const W = 260,
      cx = W / 2,
      cy = 118;
    const max = Math.max(1, Math.max.apply(null, items.map(i => i.n)));
    const N = items.length;
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " 236",
      className: "dash-svg"
    }, items.map((it, i) => {
      const a = i / N * Math.PI * 2 - Math.PI / 2;
      const len = 34 + it.n / max * 58,
        w = 13 + it.n / max * 9;
      const tx = cx + Math.cos(a) * len,
        ty = cy + Math.sin(a) * len;
      const mx = cx + Math.cos(a) * len * 0.55,
        my = cy + Math.sin(a) * len * 0.55;
      const px = Math.cos(a + Math.PI / 2) * w,
        py = Math.sin(a + Math.PI / 2) * w;
      const lx = cx + Math.cos(a) * (len + 14),
        ly = cy + Math.sin(a) * (len + 14);
      return /*#__PURE__*/React.createElement("g", {
        key: it.label
      }, /*#__PURE__*/React.createElement("path", {
        d: "M " + cx + " " + cy + " Q " + (mx + px) + " " + (my + py) + " " + tx + " " + ty + " Q " + (mx - px) + " " + (my - py) + " " + cx + " " + cy + " Z",
        fill: "color-mix(in srgb, " + DASH_COLORS[i % DASH_COLORS.length] + " " + Math.round(40 + it.n / max * 42) + "%, transparent)"
      }), /*#__PURE__*/React.createElement("text", {
        x: lx,
        y: ly + (Math.sin(a) > 0.5 ? 8 : Math.sin(a) < -0.5 ? -2 : 3),
        textAnchor: Math.cos(a) > 0.3 ? "start" : Math.cos(a) < -0.3 ? "end" : "middle",
        className: "dash-tick"
      }, it.label, " \xB7 ", it.n));
    }), /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: "12",
      fill: "var(--surface)",
      stroke: "var(--border)"
    }));
  }

  // Every dot is one reply, placed by how long it took.
  function SpeedDots({
    speeds
  }) {
    const W = 300,
      H = 88,
      x0 = 10,
      x1 = W - 10;
    const maxS = Math.max(5, Math.min(30, Math.ceil(Math.max.apply(null, speeds))));
    const med = speeds.slice().sort((a, b) => a - b)[Math.floor(speeds.length / 2)] || 0;
    const X = s => x0 + Math.min(1, s / maxS) * (x1 - x0);
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " " + H,
      className: "dash-svg"
    }, /*#__PURE__*/React.createElement("line", {
      x1: x0,
      y1: H - 22,
      x2: x1,
      y2: H - 22,
      stroke: "var(--border)"
    }), speeds.slice(-160).map((s, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: X(s),
      cy: 16 + i * 53 % 34,
      r: "3.6",
      fill: "color-mix(in srgb, var(--accent) 38%, transparent)"
    })), /*#__PURE__*/React.createElement("line", {
      x1: X(med),
      y1: 8,
      x2: X(med),
      y2: H - 22,
      stroke: "var(--accent)",
      strokeWidth: "2",
      strokeDasharray: "3 3"
    }), /*#__PURE__*/React.createElement("text", {
      x: Math.min(x1 - 26, Math.max(x0 + 26, X(med))),
      y: H - 8,
      textAnchor: "middle",
      className: "dash-tick"
    }, "typically ", med, "s"), /*#__PURE__*/React.createElement("text", {
      x: x0,
      y: H - 8,
      className: "dash-tick"
    }, "fast"), /*#__PURE__*/React.createElement("text", {
      x: x1,
      y: H - 8,
      textAnchor: "end",
      className: "dash-tick"
    }, maxS, "s+"));
  }

  // A calendar — each square is a day; deeper color, more messages.
  function HeatStrip({
    days
  }) {
    const weeks = 10,
      cell = 15,
      gap = 3;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(today);
    start.setDate(start.getDate() - (weeks * 7 - 1) - today.getDay());
    const list = [];
    let max = 1;
    for (let i = 0; i < weeks * 7 + 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (d > today) break;
      const n = days[d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()] || 0;
      if (n > max) max = n;
      list.push({
        d,
        n,
        col: Math.floor(i / 7),
        row: i % 7
      });
    }
    const W = (weeks + 1) * (cell + gap) + 26,
      H = 7 * (cell + gap) + 4;
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " " + H,
      className: "dash-svg dash-heat"
    }, ["M", "W", "F"].map((t, i) => /*#__PURE__*/React.createElement("text", {
      key: t,
      x: "2",
      y: (i * 2 + 1) * (cell + gap) + cell - 3,
      className: "dash-tick"
    }, t)), list.map((c, i) => /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: 24 + c.col * (cell + gap),
      y: c.row * (cell + gap),
      width: cell,
      height: cell,
      rx: "4",
      fill: c.n ? "color-mix(in srgb, var(--accent) " + Math.round(22 + c.n / max * 66) + "%, transparent)" : "color-mix(in srgb, var(--text-3) 10%, transparent)"
    }, /*#__PURE__*/React.createElement("title", null, c.d.toDateString() + " — " + c.n + " message" + (c.n === 1 ? "" : "s")))));
  }

  // Who does the talking — your words vs the agent's.
  function Butterfly({
    you,
    ai
  }) {
    const W = 320,
      H = 62,
      mid = W / 2;
    const max = Math.max(1, you, ai);
    const wl = you / max * (mid - 16),
      wr = ai / max * (mid - 16);
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " " + H,
      className: "dash-svg"
    }, /*#__PURE__*/React.createElement("rect", {
      x: mid - 5 - wl,
      y: "14",
      width: wl,
      height: "16",
      rx: "8",
      fill: "color-mix(in srgb, var(--accent) 82%, transparent)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: mid + 5,
      y: "14",
      width: wr,
      height: "16",
      rx: "8",
      fill: "#7d9bd8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: mid,
      y1: "6",
      x2: mid,
      y2: "38",
      stroke: "var(--border)"
    }), /*#__PURE__*/React.createElement("text", {
      x: mid - 10,
      y: "54",
      textAnchor: "end",
      className: "dash-tick"
    }, "You \xB7 ", dashNum(you), " words"), /*#__PURE__*/React.createElement("text", {
      x: mid + 10,
      y: "54",
      className: "dash-tick"
    }, "Agent \xB7 ", dashNum(ai), " words"));
  }

  // Half-dial — how full the AI's working memory gets in a typical reply.
  function GaugeArc({
    pct
  }) {
    const W = 220,
      cx = W / 2,
      cy = 102,
      r = 72;
    const a = Math.PI + Math.min(100, pct) / 100 * Math.PI;
    const col = pct >= 85 ? "#d9534f" : pct >= 60 ? "#d8a14e" : "var(--accent)";
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " 118",
      className: "dash-svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M " + (cx - r) + " " + cy + " A " + r + " " + r + " 0 0 1 " + (cx + r) + " " + cy,
      fill: "none",
      stroke: "color-mix(in srgb, var(--text-3) 15%, transparent)",
      strokeWidth: "13",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M " + (cx - r) + " " + cy + " A " + r + " " + r + " 0 0 1 " + (cx + Math.cos(a) * r) + " " + (cy + Math.sin(a) * r),
      fill: "none",
      stroke: col,
      strokeWidth: "13",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 16,
      textAnchor: "middle",
      className: "dash-center-big"
    }, Math.round(pct), "%"), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + 2,
      textAnchor: "middle",
      className: "dash-center-sub"
    }, "of memory in a typical reply"));
  }

  // One stacked pill — where the agent's chats come from.
  function SourceBar({
    items
  }) {
    const total = items.reduce((a, b) => a + b.n, 0) || 1;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "dash-stack"
    }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
      key: it.source,
      style: {
        width: it.n / total * 100 + "%",
        background: DASH_COLORS[i % DASH_COLORS.length]
      },
      title: (DASH_SRC[it.source] || it.source) + " · " + it.n
    }))), /*#__PURE__*/React.createElement("div", {
      className: "dash-legend dash-legend-flow"
    }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
      key: it.source,
      className: "dash-leg-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot",
      style: {
        background: DASH_COLORS[i % DASH_COLORS.length]
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "lab"
    }, DASH_SRC[it.source] || it.source), /*#__PURE__*/React.createElement("span", {
      className: "val"
    }, dashNum(it.n))))));
  }

  // Defined OUTSIDE Dashboard so re-renders don't remount them (a component created
  // inside render gets a new identity each time → React remounts the subtree → the
  // fade-up animation replays on every sessions sync = visible blinking).
  function DashTile({
    v,
    l
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dash-tile anim-fadeup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "v"
    }, v), /*#__PURE__*/React.createElement("div", {
      className: "l"
    }, l));
  }
  function DashCard({
    t,
    d,
    children,
    full,
    note
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dash-card anim-fadeup" + (full ? " dash-full" : "")
    }, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, d), note ? /*#__PURE__*/React.createElement("div", {
      className: "dash-note"
    }, note) : children);
  }
  function Dashboard({
    sessions,
    onClose,
    onNewChat
  }) {
    // freeze the data as-of-open: the 700ms/8s session syncs would otherwise
    // recompute + repaint every chart for no visible benefit
    const [snap] = React.useState(sessions);
    const S = React.useMemo(() => dashCrunch(snap), [snap]);
    const [agent, setAgent] = React.useState(null);
    React.useEffect(() => {
      fetch("/api/dashboard/agent").then(r => r.json()).then(d => setAgent(d && d.sessions ? d : null)).catch(() => {});
    }, []);
    const models = Object.entries(S.models).sort((a, b) => b[1] - a[1]);
    // display name: strip the "provider::" prefix old messages carry in their model id
    const modelName = id => {
      const s = String(id);
      return (s.includes("::") ? s.split("::").pop() : s) || s;
    };
    const ringItems = models.slice(0, 4).map(([label, n]) => ({
      label: modelName(label),
      n
    }));
    const moreModels = models.slice(4).reduce((a, [, n]) => a + n, 0);
    if (moreModels) ringItems.push({
      label: "others",
      n: moreModels
    });
    const ringTotal = ringItems.reduce((a, b) => a + b.n, 0); // % of model-tagged replies
    const petalItems = Object.entries(S.byKind).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, n]) => ({
      label: DASH_KIND[k] || k,
      n
    }));
    const avgCtx = S.ctx.length ? S.ctx.reduce((a, b) => a + b, 0) / S.ctx.length : 0;
    const empty = S.you + S.ai === 0;
    const Tile = DashTile,
      Card = DashCard; // stable identities — no remount, no blink

    return /*#__PURE__*/React.createElement("div", {
      className: "overlay",
      style: {
        padding: 0,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay-scrim",
      onClick: onClose
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal dash-modal",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(I.Chart, {
      size: 18,
      style: {
        verticalAlign: "-3px",
        marginRight: 8
      }
    }), "Dashboard"), /*#__PURE__*/React.createElement("button", {
      className: "x-btn",
      onClick: onClose,
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      className: "dash-body"
    }, empty ? /*#__PURE__*/React.createElement("div", {
      className: "dash-welcome"
    }, /*#__PURE__*/React.createElement(window.HermesGlyph, {
      size: 46
    }), /*#__PURE__*/React.createElement("h3", null, "Your dashboard grows as you chat"), /*#__PURE__*/React.createElement("p", null, "Once you've had a few conversations, this page fills with charts: when you chat, which models do the work, what the agent did for you, and more."), onNewChat && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        onClose();
        onNewChat();
      }
    }, "Start a chat")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "dash-hero"
    }, /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(S.chats),
      l: "chats"
    }), /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(S.you + S.ai),
      l: "messages"
    }), /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(S.tools),
      l: "things the agent did"
    }), /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(S.activeDays),
      l: "active day" + (S.activeDays === 1 ? "" : "s")
    }), S.plansTotal > 0 && /*#__PURE__*/React.createElement(Tile, {
      v: S.plansDone + "/" + S.plansTotal,
      l: "plan steps completed"
    }), S.images > 0 && /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(S.images),
      l: "images shared"
    })), /*#__PURE__*/React.createElement("div", {
      className: "dash-grid"
    }, /*#__PURE__*/React.createElement(Card, {
      t: "When you chat",
      d: "A 24-hour clock \u2014 longer hands mean busier hours."
    }, /*#__PURE__*/React.createElement(ClockChart, {
      hours: S.hours
    })), /*#__PURE__*/React.createElement(Card, {
      t: "Models doing the work",
      d: "Each ring is a model \u2014 how far it reaches around is its share of replies.",
      note: ringItems.length ? null : "No replies yet."
    }, /*#__PURE__*/React.createElement(RingChart, {
      items: ringItems,
      total: ringTotal
    })), /*#__PURE__*/React.createElement(Card, {
      t: "What the agent did for you",
      d: "Each petal is a kind of work \u2014 a bigger petal means it happened more.",
      note: petalItems.length ? null : "The agent hasn't used tools here yet — ask it to run a command or read a file."
    }, /*#__PURE__*/React.createElement(PetalChart, {
      items: petalItems
    })), /*#__PURE__*/React.createElement(Card, {
      t: "How fast replies arrive",
      d: "Every dot is one reply \u2014 the dotted line marks a typical wait.",
      note: S.speeds.length ? null : "Reply timings appear after your next few chats."
    }, /*#__PURE__*/React.createElement(SpeedDots, {
      speeds: S.speeds
    })), /*#__PURE__*/React.createElement(Card, {
      t: "The conversation balance",
      d: "Who does the talking \u2014 you, or the agent."
    }, /*#__PURE__*/React.createElement(Butterfly, {
      you: S.wordsYou,
      ai: S.wordsAi
    })), /*#__PURE__*/React.createElement(Card, {
      t: "Memory in use",
      d: "How much of the AI's working memory a typical reply needs.",
      note: S.ctx.length ? null : "Appears once the agent reports its memory use (chat through your local agent)."
    }, /*#__PURE__*/React.createElement(GaugeArc, {
      pct: avgCtx
    }))), /*#__PURE__*/React.createElement(Card, {
      full: true,
      t: "Your last 10 weeks",
      d: "Each square is a day \u2014 the deeper the color, the more you chatted."
    }, /*#__PURE__*/React.createElement(HeatStrip, {
      days: S.days
    })), /*#__PURE__*/React.createElement(Card, {
      full: true,
      t: "Your biggest chats",
      d: "The conversations with the most back-and-forth."
    }, /*#__PURE__*/React.createElement("div", {
      className: "dash-rows"
    }, S.top.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "dash-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ttl",
      title: c.title
    }, c.title), /*#__PURE__*/React.createElement("span", {
      className: "bar"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: c.n / Math.max(1, S.top[0].n) * 100 + "%"
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "cnt"
    }, c.n))))), agent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "dash-sec"
    }, /*#__PURE__*/React.createElement(I.Bot, {
      size: 15
    }), " Your agent \u2014 lifetime, across everything it does", /*#__PURE__*/React.createElement("span", {
      className: "dash-sec-sub"
    }, "terminal, editors, schedules, messengers \u2014 not just AgentBay")), /*#__PURE__*/React.createElement("div", {
      className: "dash-hero"
    }, /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(agent.sessions),
      l: "agent sessions"
    }), /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(agent.messages),
      l: "messages handled"
    }), /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(agent.tool_calls),
      l: "tools run"
    }), /*#__PURE__*/React.createElement(Tile, {
      v: dashNum(agent.tokens_in + agent.tokens_out),
      l: "tokens processed"
    }), agent.est_cost_usd > 0 && /*#__PURE__*/React.createElement(Tile, {
      v: "$" + agent.est_cost_usd,
      l: "estimated spend"
    })), /*#__PURE__*/React.createElement(Card, {
      full: true,
      t: "Where the agent's chats come from",
      d: "One bar, split by surface \u2014 hover a segment for details."
    }, /*#__PURE__*/React.createElement(SourceBar, {
      items: agent.by_source || []
    })))))));
  }
  window.Views = {
    Login,
    ModelMenu,
    Notes,
    Tour,
    OnboardingGate,
    Dashboard
  };
})();

/* ==================== js/hub.jsx : Projects + Agents (sub-agents) ==================== */
(function () {
  const I = window.Icons;
  const D = window.HermesData;
  const {
    useState,
    useRef
  } = React;
  const COLORS = ["#d97706", "#2563eb", "#dc2626", "#7c3aed", "#059669", "#db2777", "#0891b2"];
  const TEXT_RE = /\.(txt|md|markdown|csv|tsv|json|ya?ml|log|js|jsx|ts|tsx|py|rb|go|rs|java|c|h|cpp|cs|php|sh|sql|html?|css|xml|ini|toml|env)$|^text\//i;
  const fmtSize = n => n < 1024 ? n + " B" : n < 1048576 ? (n / 1024).toFixed(0) + " KB" : (n / 1048576).toFixed(1) + " MB";

  // Built-in personas (the portable subset of Claude Code subagents: a named
  // system prompt the user picks per chat — no autonomous tool use).
  const DEFAULT_AGENTS = [{
    id: "general",
    name: "General",
    description: "Helpful all-rounder for everyday questions.",
    system: "",
    model: "",
    color: "#6b7280"
  }, {
    id: "coder",
    name: "Code Reviewer",
    description: "Reviews code for bugs, security & clarity.",
    system: "You are a meticulous senior code reviewer. Identify bugs, security issues, edge cases, and unclear naming. Cite specific lines when given code, and prefer concrete fixes over vague advice.",
    model: "",
    color: "#2563eb"
  }, {
    id: "debugger",
    name: "Debugger",
    description: "Finds the root cause of errors, step by step.",
    system: "You are a systematic debugger. Form hypotheses, ask only for the minimal information you need, and reason step by step to the root cause before proposing a fix.",
    model: "",
    color: "#dc2626"
  }, {
    id: "writer",
    name: "Writer",
    description: "Clear, concise prose and editing.",
    system: "You are a sharp editor. Write and revise for clarity and concision, prefer plain language, and keep the author's voice.",
    model: "",
    color: "#7c3aed"
  }, {
    id: "analyst",
    name: "Data Analyst",
    description: "Explains data, writes correct SQL.",
    system: "You are a careful data analyst. Explain analyses plainly, write correct SQL, and always state your assumptions and caveats.",
    model: "",
    color: "#059669"
  }];
  function Shell({
    icon,
    title,
    onClose,
    headRight,
    children,
    width
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "overlay",
      style: {
        padding: 0,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "overlay-scrim",
      onClick: onClose
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal",
      style: {
        position: "relative",
        width: width || "min(1000px, 94vw)",
        height: "min(680px, 92vh)",
        maxHeight: "92vh",
        margin: "auto"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-head"
    }, /*#__PURE__*/React.createElement("h2", null, React.createElement(I[icon], {
      size: 18,
      style: {
        verticalAlign: "-3px",
        marginRight: 8
      }
    }), title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, headRight, /*#__PURE__*/React.createElement("button", {
      className: "x-btn",
      onClick: onClose,
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 18
    })))), children));
  }

  // ---------- Projects: instructions + knowledge files; chats in a project use them ----------
  function Projects({
    projects,
    setProjects,
    onClose,
    onToast,
    onStartChat
  }) {
    const [activeId, setActiveId] = useState(projects[0] ? projects[0].id : null);
    const fileRef = useRef(null);
    const proj = projects.find(p => p.id === activeId);
    const upd = patch => setProjects(ps => ps.map(p => p.id === activeId ? {
      ...p,
      ...patch
    } : p));
    const add = () => {
      const id = "p" + Date.now().toString(36);
      setProjects(ps => [{
        id,
        name: "New project",
        instructions: "",
        files: [],
        color: COLORS[ps.length % COLORS.length]
      }, ...ps]);
      setActiveId(id);
    };
    const del = () => {
      if (proj) {
        setProjects(ps => ps.filter(p => p.id !== activeId));
        setActiveId(null);
        onToast({
          type: "info",
          title: "Project deleted"
        });
      }
    };
    const [drag, setDrag] = useState(false);
    const addFiles = list => {
      const pid = activeId;
      Array.from(list || []).forEach(f => {
        if (f.size > 25 * 1024 * 1024) {
          onToast({
            type: "info",
            title: f.name + " skipped",
            desc: "Files must be under 25 MB."
          });
          return;
        }
        const fr = new FileReader();
        fr.onload = () => {
          fetch("/api/extract", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: f.name,
              b64: String(fr.result)
            })
          }).then(r => r.json()).then(res => {
            setProjects(ps => ps.map(p => p.id === pid ? {
              ...p,
              files: [...p.files, {
                name: f.name,
                size: fmtSize(f.size),
                text: res.text || "",
                note: res.note || ""
              }]
            } : p));
            if (!res.text) onToast({
              type: "info",
              title: f.name + " added",
              desc: res.note || "stored — no text extracted"
            });
          }).catch(() => onToast({
            type: "error",
            title: "Upload failed",
            desc: f.name
          }));
        };
        fr.readAsDataURL(f); // base64 (handles any file type)
      });
    };
    const know = proj ? proj.files.reduce((n, f) => n + (f.text ? f.text.length : 0), 0) : 0;
    return /*#__PURE__*/React.createElement(Shell, {
      icon: "Folder",
      title: "Projects",
      onClose: onClose,
      headRight: /*#__PURE__*/React.createElement("button", {
        className: "btn btn-ghost",
        onClick: add
      }, /*#__PURE__*/React.createElement(I.Plus, {
        size: 15
      }), " New project")
    }, /*#__PURE__*/React.createElement("div", {
      className: "split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "notes-list"
    }, projects.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 14px",
        fontSize: 13,
        color: "var(--text-3)"
      }
    }, "No projects yet."), projects.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "note-item" + (p.id === activeId ? " active" : ""),
      onClick: () => setActiveId(p.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "nt",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(I.Folder, {
      size: 14,
      style: {
        color: p.color
      }
    }), p.name), /*#__PURE__*/React.createElement("div", {
      className: "ns"
    }, p.files.length, " file", p.files.length === 1 ? "" : "s", " \xB7 ", p.instructions ? "has instructions" : "no instructions")))), /*#__PURE__*/React.createElement("div", {
      className: "note-editor",
      style: {
        overflowY: "auto"
      }
    }, !proj ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        placeItems: "center",
        height: "100%",
        color: "var(--text-3)",
        textAlign: "center",
        padding: 30
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(I.Folder, {
      size: 34,
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("div", null, "Create a project to give Hermes standing instructions and knowledge files."))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 24px",
        outline: drag ? "2px dashed var(--accent)" : "none",
        outlineOffset: -8,
        borderRadius: 12
      },
      onDragOver: e => {
        e.preventDefault();
        if (!drag) setDrag(true);
      },
      onDragLeave: e => {
        e.preventDefault();
        setDrag(false);
      },
      onDrop: e => {
        e.preventDefault();
        setDrag(false);
        addFiles(e.dataTransfer.files);
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: proj.name,
      onChange: e => upd({
        name: e.target.value
      }),
      style: {
        fontSize: 16,
        fontWeight: 650,
        marginBottom: 16
      }
    }), /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "Custom instructions"), /*#__PURE__*/React.createElement("textarea", {
      className: "field",
      value: proj.instructions,
      onChange: e => upd({
        instructions: e.target.value
      }),
      placeholder: "e.g. You are helping with the Acme mobile app. Always answer in the context of our React Native codebase and house style.",
      style: {
        minHeight: 110,
        marginBottom: 18
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "field-label",
      style: {
        margin: 0
      }
    }, "Project knowledge ", know > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-3)",
        fontWeight: 400
      }
    }, "(~", Math.round(know / 4), " tokens)")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-outline",
      style: {
        padding: "5px 10px"
      },
      onClick: () => fileRef.current && fileRef.current.click()
    }, /*#__PURE__*/React.createElement(I.Upload, {
      size: 14
    }), " Add files")), /*#__PURE__*/React.createElement("input", {
      ref: fileRef,
      type: "file",
      multiple: true,
      style: {
        display: "none"
      },
      onChange: e => {
        addFiles(e.target.files);
        e.target.value = "";
      }
    }), proj.files.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px dashed var(--border-strong)",
        borderRadius: 10,
        padding: "18px",
        textAlign: "center",
        color: "var(--text-3)",
        fontSize: 13
      }
    }, "Drag files here, or click ", /*#__PURE__*/React.createElement("strong", null, "Add files"), ". Any type \u2014 docs (.docx, .pdf, .xlsx, .pptx), code, .csv, .txt, images. The assistant reads their text.") : proj.files.map((f, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "set-row",
      style: {
        padding: "8px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rl",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(I.FileText, {
      size: 15,
      style: {
        color: f.text ? "var(--text-3)" : "var(--text-faint)"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, f.name), /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, f.size, f.note ? " · " + f.note : f.text ? "" : ""))), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      style: {
        padding: "4px 8px"
      },
      onClick: () => upd({
        files: proj.files.filter((_, j) => j !== i)
      })
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 14
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => onStartChat(proj.id)
    }, /*#__PURE__*/React.createElement(I.Pencil, {
      size: 15
    }), " Start a chat in this project"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      style: {
        color: "var(--red)"
      },
      onClick: del
    }, /*#__PURE__*/React.createElement(I.Trash, {
      size: 15
    }), " Delete"))))));
  }

  // ---------- Agents: named persona presets (the portable subset of subagents) ----------
  function Agents({
    agents,
    setAgents,
    models,
    onClose,
    onToast,
    onStartChat
  }) {
    const [activeId, setActiveId] = useState(agents[0] ? agents[0].id : null);
    const ag = agents.find(a => a.id === activeId);
    const upd = patch => setAgents(as => as.map(a => a.id === activeId ? {
      ...a,
      ...patch
    } : a));
    const add = () => {
      const id = "a" + Date.now().toString(36);
      setAgents(as => [...as, {
        id,
        name: "New agent",
        description: "",
        system: "",
        model: "",
        color: COLORS[as.length % COLORS.length]
      }]);
      setActiveId(id);
    };
    const del = () => {
      if (ag) {
        setAgents(as => as.filter(a => a.id !== activeId));
        setActiveId(null);
        onToast({
          type: "info",
          title: "Agent deleted"
        });
      }
    };
    return /*#__PURE__*/React.createElement(Shell, {
      icon: "Bot",
      title: "Agents",
      onClose: onClose,
      headRight: /*#__PURE__*/React.createElement("button", {
        className: "btn btn-ghost",
        onClick: add
      }, /*#__PURE__*/React.createElement(I.Plus, {
        size: 15
      }), " New agent")
    }, /*#__PURE__*/React.createElement("div", {
      className: "split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "notes-list"
    }, agents.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.id,
      className: "note-item" + (a.id === activeId ? " active" : ""),
      onClick: () => setActiveId(a.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "nt",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(I.Bot, {
      size: 14,
      style: {
        color: a.color
      }
    }), a.name), /*#__PURE__*/React.createElement("div", {
      className: "ns"
    }, a.description || "No description")))), /*#__PURE__*/React.createElement("div", {
      className: "note-editor",
      style: {
        overflowY: "auto"
      }
    }, !ag ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        placeItems: "center",
        height: "100%",
        color: "var(--text-3)",
        textAlign: "center",
        padding: 30
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(I.Bot, {
      size: 34,
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("div", null, "Agents are named personas \u2014 a system prompt (and optional model) you pick per chat."))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 24px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: ag.name,
      onChange: e => upd({
        name: e.target.value
      }),
      style: {
        fontSize: 16,
        fontWeight: 650,
        marginBottom: 12
      }
    }), /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "When to use it"), /*#__PURE__*/React.createElement("input", {
      className: "field",
      value: ag.description,
      onChange: e => upd({
        description: e.target.value
      }),
      placeholder: "Short description shown in the picker",
      style: {
        marginBottom: 16
      }
    }), /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "System prompt"), /*#__PURE__*/React.createElement("textarea", {
      className: "field",
      value: ag.system,
      onChange: e => upd({
        system: e.target.value
      }),
      placeholder: "e.g. You are a meticulous code reviewer\u2026",
      style: {
        minHeight: 130,
        marginBottom: 16
      }
    }), /*#__PURE__*/React.createElement("label", {
      className: "field-label"
    }, "Model"), /*#__PURE__*/React.createElement("select", {
      className: "mini-select",
      value: ag.model || "",
      onChange: e => upd({
        model: e.target.value
      }),
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Use the chat's current model"), (models || []).map(m => /*#__PURE__*/React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => onStartChat(ag.id)
    }, /*#__PURE__*/React.createElement(I.Pencil, {
      size: 15
    }), " Start a chat with this agent"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      style: {
        color: "var(--red)"
      },
      onClick: del
    }, /*#__PURE__*/React.createElement(I.Trash, {
      size: 15
    }), " Delete"))))));
  }

  // ---- Skills: what the agent can do (self-created); flags newly added ones ----
  function Skills({
    onClose
  }) {
    const [skills, setSkills] = useState(null);
    const seen = (() => {
      try {
        return new Set(JSON.parse(localStorage.getItem("ab_seen_skills") || "[]"));
      } catch (e) {
        return new Set();
      }
    })();
    React.useEffect(() => {
      fetch("/api/skills").then(r => r.json()).then(d => {
        const list = d.skills || [];
        setSkills(list);
        setTimeout(() => {
          try {
            localStorage.setItem("ab_seen_skills", JSON.stringify(list.map(s => s.name)));
          } catch (e) {}
        }, 1500);
      }).catch(() => setSkills([]));
    }, []);
    const isNew = n => !!(skills && seen.size > 0 && !seen.has(n));
    return /*#__PURE__*/React.createElement(Shell, {
      icon: "Wand",
      title: "Skills",
      onClose: onClose,
      width: "min(760px, 94vw)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 24px",
        overflowY: "auto"
      }
    }, !skills ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-3)"
      }
    }, "Loading\u2026") : skills.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-3)"
      }
    }, "No skills yet. Your agent creates skills automatically as it learns new tasks.") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-3)",
        marginBottom: 12
      }
    }, skills.length, " skills \u2014 your agent builds these from experience and reuses them."), skills.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "set-row",
      style: {
        padding: "10px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rl",
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, React.createElement(I.Wand || I.Sparkle, {
      size: 14,
      style: {
        color: "var(--accent-deep)"
      }
    }), s.name, isNew(s.name) && /*#__PURE__*/React.createElement("span", {
      className: "tag-mini",
      style: {
        background: "var(--accent-soft)",
        color: "var(--accent-ink)"
      }
    }, "new")), s.description && /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, s.description)))))));
  }
  window.Hub = {
    Projects,
    Agents,
    Skills,
    DEFAULT_AGENTS
  };
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
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
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
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
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
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
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
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
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
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});

/* ==================== js/tweaks.jsx ==================== */
/* Hermes — tweaks.jsx : designer Tweaks panel (accent / radius / density / motion) */
(function () {
  const {
    useEffect
  } = React;
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakColor,
    TweakRadio,
    TweakSlider
  } = window;
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#d9a36b",
    "corners": "default",
    "density": "regular",
    "animSpeed": 1
  } /*EDITMODE-END*/;
  const RADII = {
    sharp: {
      r: "4px",
      rlg: "7px",
      rxl: "12px"
    },
    default: {
      r: "8px",
      rlg: "14px",
      rxl: "22px"
    },
    round: {
      r: "12px",
      rlg: "18px",
      rxl: "26px"
    }
  };
  const DENSITY = {
    compact: 14.5,
    regular: 15.5,
    comfy: 16.5
  };
  function TweaksController() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    useEffect(() => {
      const root = document.documentElement.style;
      // accent is owned by Settings → Appearance, not this hidden dev panel
      const rad = RADII[t.corners] || RADII.default;
      root.setProperty("--r", rad.r);
      root.setProperty("--r-lg", rad.rlg);
      root.setProperty("--r-xl", rad.rxl);
      root.setProperty("--content-fs", (DENSITY[t.density] || 15.5) + "px");
      root.setProperty("--speed", String(t.animSpeed || 1));
    }, [t.accent, t.corners, t.density, t.animSpeed]);
    return /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
      label: "Brand"
    }), /*#__PURE__*/React.createElement(TweakColor, {
      label: "Accent",
      value: t.accent,
      options: ["#d9a36b", "#46b3a9", "#5b7cfa", "#e0698a", "#6aa84f"],
      onChange: v => setTweak("accent", v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Shape & feel"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "Corners",
      value: t.corners,
      options: ["sharp", "default", "round"],
      onChange: v => setTweak("corners", v)
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "Density",
      value: t.density,
      options: ["compact", "regular", "comfy"],
      onChange: v => setTweak("density", v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Motion"
    }), /*#__PURE__*/React.createElement(TweakSlider, {
      label: "Animation speed",
      value: t.animSpeed,
      min: 0.5,
      max: 2,
      step: 0.1,
      unit: "\xD7",
      onChange: v => setTweak("animSpeed", v)
    }));
  }
  window.TweaksController = TweaksController;
})();

/* ==================== js/app.jsx ==================== */
/* Hermes — app.jsx : root orchestrator */
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useCallback
  } = React;
  const I = window.Icons;
  const D = window.HermesData;
  const {
    Modal,
    ToastProvider,
    useToast,
    fireConfetti,
    useLocal
  } = window.UI;
  const {
    Thread,
    Composer,
    Home,
    modelMeta
  } = window.Chat;
  const Mo = window.Modals;
  const V = window.Views;
  const Hub = window.Hub;
  const DEFAULT_SETTINGS = {
    reduceMotion: false,
    lang: "en",
    fontSize: "md",
    avatars: true,
    latex: true,
    codeBlocks: true,
    collapseDefault: false,
    bubbles: true,
    timestamps: false,
    autoScroll: true,
    followups: false,
    agentsEnabled: false,
    accent: "#d9a36b",
    systemPrompt: "",
    stt: "Whisper (local)",
    tts: "Browser (system)",
    showThinking: true,
    showTools: true,
    fallbackModel: "",
    dashboard: false,
    scheduledTasks: false,
    showUsage: false
  };
  function buildUser(name) {
    const nm = (name || "").trim();
    if (!nm) return {
      name: "User",
      initials: "U",
      role: "Local",
      email: ""
    };
    const w = nm.split(/\s+/);
    const initials = (w.length > 1 ? w[0][0] + w[1][0] : nm.slice(0, 2)).toUpperCase();
    return {
      name: nm,
      initials,
      role: "Local",
      email: ""
    };
  }
  const USER = buildUser("");
  const FONT_PX = {
    sm: 14.5,
    md: 15.5,
    lg: 17
  };
  function uid() {
    return "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  }
  function App() {
    const toast = useToast();
    const [loggedIn, setLoggedIn] = useLocal("hermes_logged", true);
    const [theme, setTheme] = useLocal("hermes_theme", "light");
    const [settings, setSettings] = useLocal("hermes_settings", DEFAULT_SETTINGS);
    const [sessions, setSessions] = useLocal("ab_sessions", []);
    const [activeId, setActiveId] = useState(null);
    // which on-device agent is active (drives the brand glyph + name + thinking animation)
    const [agentKind, setAgentKindState] = useState(null);
    const setAgentKind = k => {
      window.__agentKind = k || "hermes";
      setAgentKindState(k || "hermes");
    };
    useEffect(() => {
      window.__setAgentKind = setAgentKind; // AgentKindCard (separate IIFE) calls this on switch
      fetch("/api/agent/active").then(r => r.json()).then(d => setAgentKind(d.active || "hermes")).catch(() => {});
    }, []);

    // ---- server-side chat sync: every browser/device on this account shares chats.
    // The store lives with the AgentBay instance; we merge by id (newest `updated`
    // wins) and honour tombstones, so a teammate's chats show up and deletes stick.
    const syncSnap = useRef(new Map()); // id -> JSON(content w/o `updated`) at last sync
    const streamingSidRef = useRef(null); // session with an in-flight turn — sync must never clobber it
    const syncReady = useRef(false);
    const sessionsLive = useRef(sessions);
    useEffect(() => {
      sessionsLive.current = sessions;
    }, [sessions]);
    const _sansUpd = s => {
      const c = Object.assign({}, s);
      delete c.updated;
      return JSON.stringify(c);
    };
    const _grpFor = ts => {
      const day = 864e5,
        d = Date.now() - (ts || Date.now());
      return d < day ? "Today" : d < 2 * day ? "Yesterday" : d < 7 * day ? "Previous 7 Days" : d < 30 * day ? "Previous 30 Days" : "Older";
    };
    const _normSession = s => {
      // ensure synced chats have what the sidebar needs to render
      const out = Object.assign({
        tags: [],
        pinned: false,
        messages: []
      }, s);
      if (!out.group || D.GROUP_ORDER.indexOf(out.group) === -1) out.group = _grpFor(out.updated);
      return out;
    };
    const reconcileServer = useCallback((srv, del) => {
      const delSet = new Set(del || []);
      setSessions(local => {
        const byId = new Map(local.map(s => [s.id, s]));
        (srv || []).forEach(raw => {
          const s = _normSession(raw);
          if (!s || !s.id || delSet.has(s.id)) return;
          if (s.id === streamingSidRef.current) return; // never overwrite a session mid-stream (would drop the live reply)
          const loc = byId.get(s.id);
          if (!loc || (s.updated || 0) > (loc.updated || 0)) {
            // The server copy has no image base64 (stripped before sync) — restore
            // the thumbnails from the local copy by message index so they don't vanish.
            if (loc && loc.messages) {
              (s.messages || []).forEach((m, mi) => {
                const lm = loc.messages[mi];
                if (m && m.images && lm && lm.images) m.images.forEach((im, ii) => {
                  if (im && !im.b64 && lm.images[ii] && lm.images[ii].b64) im.b64 = lm.images[ii].b64;
                });
              });
            }
            byId.set(s.id, s);
            syncSnap.current.set(s.id, _sansUpd(s));
          }
        });
        delSet.forEach(id => {
          byId.delete(id);
          syncSnap.current.delete(id);
        });
        return Array.from(byId.values()).map(_normSession).sort((a, b) => (b.updated || 0) - (a.updated || 0));
      });
    }, []);
    // initial pull: merge the server's chats into whatever is cached locally
    useEffect(() => {
      fetch("/api/sessions").then(r => r.json()).then(d => reconcileServer(d.sessions, d.deleted)).catch(() => {}).finally(() => {
        syncReady.current = true;
      });
    }, []);
    // push local changes up (debounced); stamp `updated` on whatever changed
    useEffect(() => {
      if (!syncReady.current) return;
      const t = setTimeout(() => {
        const now = Date.now();
        let bumped = false;
        const payload = sessionsLive.current.filter(s => s.id !== streamingSidRef.current).map(s => {
          if (syncSnap.current.get(s.id) !== _sansUpd(s)) {
            bumped = true;
            return Object.assign({}, s, {
              updated: now
            });
          }
          return s;
        });
        if (!bumped && syncSnap.current.size) return;
        payload.forEach(s => syncSnap.current.set(s.id, _sansUpd(s)));
        // Don't ship megabytes of pasted-image base64 to the server every 700ms —
        // strip image data from the sync payload (kept locally for the thumbnail).
        const lean = payload.map(s => ({
          ...s,
          messages: (s.messages || []).map(m => m.images && m.images.length ? Object.assign({}, m, {
            images: m.images.map(im => ({
              name: im.name,
              mime: im.mime
            }))
          }) : m)
        }));
        fetch("/api/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            sessions: lean
          })
        }).then(r => r.json()).then(d => reconcileServer(d.sessions, d.deleted)).catch(() => {});
      }, 700);
      return () => clearTimeout(t);
    }, [sessions]);
    // pull other browsers' changes periodically + when the tab regains focus
    useEffect(() => {
      const pull = () => {
        if (syncReady.current) fetch("/api/sessions").then(r => r.json()).then(d => reconcileServer(d.sessions, d.deleted)).catch(() => {});
      };
      const id = setInterval(pull, 8000);
      window.addEventListener("focus", pull);
      return () => {
        clearInterval(id);
        window.removeEventListener("focus", pull);
      };
    }, []);
    const removeSessionRemote = id => {
      try {
        fetch("/api/sessions/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id,
            ts: Date.now()
          })
        });
      } catch (e) {}
    };
    const [sidebarW, setSidebarW] = useLocal("hermes_sbw", 260);
    const [collapsed, setCollapsed] = useState(settings.collapseDefault);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [defaultModel, setDefaultModel] = useLocal("ab_default_model_v3", "");
    const [homeModel, setHomeModel] = useState(defaultModel);
    const [folders, setFolders] = useLocal("ab_folders", []);
    const [projects, setProjects] = useLocal("ab_projects", []);
    const [agents, setAgents] = useLocal("ab_agents", Hub.DEFAULT_AGENTS);
    const [composerProject, setComposerProject] = useState(null); // project id for the next new chat
    const [composerAgent, setComposerAgent] = useState(null); // agent id for the next new chat
    const [modelsTick, setModelsTick] = useState(0); // bumps when enabled models refresh
    const [userName, setUserName] = useState(""); // real account name from server
    const user = React.useMemo(() => buildUser(userName), [userName]);
    const [changelogSeen, setChangelogSeen] = useLocal("ab_changelog_seen", "");
    useEffect(() => {
      fetch("/api/config").then(r => r.json()).then(c => setUserName(c.user_name || "")).catch(() => {});
    }, []);
    // One-time import of existing chats from a co-located agent (Hermes workspace etc.)
    const importAgentChats = React.useCallback(announce => {
      const grpFor = ts => {
        const d = Date.now() - (ts || Date.now()),
          day = 864e5;
        return d < day ? "Today" : d < 2 * day ? "Yesterday" : d < 7 * day ? "Previous 7 Days" : d < 30 * day ? "Previous 30 Days" : "Older";
      };
      return fetch("/api/import/sessions").then(r => r.json()).then(d => {
        const imp = (d.sessions || []).filter(s => s && Array.isArray(s.messages) && s.messages.length);
        let added = 0;
        setSessions(ss => {
          const have = new Set(ss.map(s => s.id));
          const add = imp.filter(s => !have.has(s.id)).map(s => ({
            id: s.id,
            title: s.title,
            model: s.model || "",
            tags: s.tags || [],
            pinned: false,
            updated: s.updated || Date.now(),
            group: grpFor(s.updated),
            messages: s.messages
          }));
          added = add.length;
          return add.length ? [...add, ...ss] : ss;
        });
        if (announce) toast({
          type: added ? "success" : "info",
          title: added ? "Imported " + added + " chat" + (added === 1 ? "" : "s") : "No new chats to import"
        });
        return added;
      }).catch(() => {
        if (announce) toast({
          type: "error",
          title: "Import failed"
        });
        return 0;
      });
    }, []);
    useEffect(() => {
      if (!localStorage.getItem("ab_hermes_imported")) {
        importAgentChats(true).finally(() => localStorage.setItem("ab_hermes_imported", "1"));
      }
      if (!localStorage.getItem("ab_providers_imported")) {
        fetch("/api/import/providers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: "{}"
        }).then(r => r.json()).then(d => {
          const n = (d.imported || []).length;
          if (n) toast({
            type: "success",
            title: "Imported " + n + " provider key" + (n === 1 ? "" : "s") + " from your agent"
          });
        }).catch(() => {}).finally(() => localStorage.setItem("ab_providers_imported", "1"));
      }
    }, []);
    const [suggestions] = useState(() => D.pickSuggestions());

    // load enabled models from backend on mount + expose a refresher
    const refreshModels = React.useCallback(() => D.refreshModels().then(list => {
      setModelsTick(t => t + 1);
      const ids = list.map(m => m.id);
      // Default to the first REAL provider model (we only list authenticated
      // providers, so it works out of the box) rather than "agent::default",
      // whose Hermes config may be unset → "No inference provider configured".
      const firstReal = ids.find(id => id !== "agent::default") || ids[0] || "";
      setHomeModel(hm => hm && ids.includes(hm) ? hm : firstReal);
      setDefaultModel(dm => dm && ids.includes(dm) ? dm : firstReal);
    }), []);
    useEffect(() => {
      refreshModels();
    }, []);
    // App self-update: surface an available update as a persistent banner.
    // Re-checks on load and whenever the tab regains focus (covers reopen/return
    // without a manual refresh). Assets are served no-store, so a normal reload
    // after updating always pulls the new UI — no hard refresh needed.
    const [appUpd, setAppUpd] = useState(null); // {update_available, latest, current}
    const [updating, setUpdating] = useState(false);
    const checkAppUpdate = useCallback(() => {
      fetch("/api/app/version").then(r => r.json()).then(setAppUpd).catch(() => {});
    }, []);
    useEffect(() => {
      checkAppUpdate();
      const onFocus = () => checkAppUpdate();
      window.addEventListener("focus", onFocus);
      document.addEventListener("visibilitychange", onFocus);
      return () => {
        window.removeEventListener("focus", onFocus);
        document.removeEventListener("visibilitychange", onFocus);
      };
    }, []);
    const runAppUpdate = useCallback(() => {
      setUpdating(true);
      toast({
        type: "info",
        title: "Updating AgentBay…"
      });
      fetch("/api/app/update", {
        method: "POST"
      }).then(r => r.json()).then(({
        job
      }) => {
        const poll = setInterval(() => fetch("/api/install/status/" + job).then(r => r.json()).then(j => {
          if (j.status === "done") {
            clearInterval(poll);
            toast({
              type: "success",
              title: "Updated — reloading…"
            });
            setTimeout(() => location.reload(), 3500);
          } else if (j.status === "error") {
            clearInterval(poll);
            setUpdating(false);
            toast({
              type: "error",
              title: "Update failed",
              desc: "Open Settings → About for details."
            });
          }
        }).catch(() => {}), 1200);
      }).catch(() => {
        setUpdating(false);
        toast({
          type: "error",
          title: "Update failed"
        });
      });
    }, []);
    // show the Skills entry only when the backend is an agent that has skills
    const [skillsCount, setSkillsCount] = useState(0);
    useEffect(() => {
      fetch("/api/skills").then(r => r.json()).then(d => setSkillsCount((d.skills || []).length)).catch(() => {});
    }, []);

    // composer
    const [draft, setDraft] = useState("");
    const [attachments, setAttachments] = useState([]);
    const [focusKey, setFocusKey] = useState(0);

    // streaming
    const [streaming, setStreaming] = useState(null); // { sessionId, text, full, timer }
    const streamRef = useRef(null);
    const abortRef = useRef(null); // AbortController for the in-flight stream (real Stop)
    const metaRef = useRef({}); // {sessionId: {reasoning, tools}} captured from the reply
    const sessionsRef = useRef(sessions);
    useEffect(() => {
      sessionsRef.current = sessions;
    }, [sessions]);
    useEffect(() => {
      streamingSidRef.current = streaming ? streaming.sessionId : null;
    }, [streaming]);

    // overlays
    const [modal, setModal] = useState(null); // {kind, data}
    const [pop, setPop] = useState(null); // {kind, anchor, data}
    const [renaming, setRenaming] = useState(false);
    const [renameVal, setRenameVal] = useState("");
    const [tour, setTour] = useLocal("hermes_tour_done", false);
    const [showTour, setShowTour] = useState(false);
    // Onboarding agent-gate: re-checked every launch (session-scoped skip, not persisted)
    const [hasAgent, setHasAgent] = useState(null); // null = unknown
    const [onboardSkipped, setOnboardSkipped] = useState(false);
    useEffect(() => {
      if (!loggedIn) return;
      fetch("/api/agents").then(r => r.json()).then(d => setHasAgent((d.agents || []).some(a => a.installed))).catch(() => setHasAgent(false));
    }, [loggedIn]);
    const topModelRef = useRef(null);
    const headModelRef = useRef(null);
    const settingsRef = useRef(null);
    const bellRef = useRef(null);
    const avatarRef = useRef(null);
    const headMenuRef = useRef(null);
    const exportRef = useRef(null);
    const active = sessions.find(s => s.id === activeId);
    const currentModel = active ? active.model : homeModel;
    const allTags = Array.from(new Set(sessions.flatMap(s => s.tags || []))).filter(Boolean);

    /* ---- theme application ---- */
    useEffect(() => {
      if (theme === "white") setTheme("light");
    }, []);
    useEffect(() => {
      const apply = () => {
        let t = theme;
        if (theme === "white") t = "light";
        if (theme === "system") t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", t);
        // match the code-highlight theme to light/dark so syntax colors stay readable
        const hl = document.getElementById("hljs-light"),
          hd = document.getElementById("hljs-dark");
        if (hl && hd) {
          hl.disabled = t === "dark";
          hd.disabled = t !== "dark";
        }
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
    const setS = (k, v) => setSettings(s => ({
      ...s,
      [k]: v
    }));

    /* ---- first-login tour — only once the agent gate is resolved (don't tour over it) ---- */
    useEffect(() => {
      if (loggedIn && !tour && (hasAgent === true || onboardSkipped)) {
        setShowTour(true);
        setTour(true);
      }
    }, [loggedIn, hasAgent, onboardSkipped]);

    /* ---- keyboard shortcuts ---- */
    useEffect(() => {
      const onKey = e => {
        const meta = e.metaKey || e.ctrlKey;
        if (meta && e.key.toLowerCase() === "k") {
          e.preventDefault();
          setModal({
            kind: "search"
          });
        } else if (meta && e.key.toLowerCase() === "n") {
          e.preventDefault();
          newChat();
        } else if (meta && e.key.toLowerCase() === "b") {
          e.preventDefault();
          setCollapsed(c => !c);
        } else if (meta && e.key === "/") {
          e.preventDefault();
          setModal({
            kind: "shortcuts"
          });
        }
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
        if (streamRef.current === "cancel") {
          finalize(sessionId, full, followups, t0);
          return;
        }
        const chunk = reduce ? tokens.length : Math.max(1, Math.round(Math.random() * 2) + 1);
        i += chunk;
        setStreaming({
          sessionId,
          text: tokens.slice(0, i).join(""),
          phase: "stream"
        });
        if (i < tokens.length) streamRef.current = setTimeout(step, reduce ? 0 : 16 + Math.random() * 26);else finalize(sessionId, full, followups, t0);
      };
      step();
    };
    const startStream = (sessionId, prompt, model, images, isRetry) => {
      const followups = []; // real, relevant follow-ups are fetched after the reply (if enabled)
      // Fallback model: if this attempt errors and a (different) fallback is configured,
      // retry the same prompt once with it. Returns true when a retry was kicked off.
      const tryFallback = () => {
        const fb = settings.fallbackModel;
        if (isRetry || !fb || fb === model) return false;
        try {
          toast({
            type: "info",
            title: "Primary failed — retrying with fallback model"
          });
        } catch (e) {}
        setSessions(ss => ss.map(s => {
          // swap the errored assistant turn's model label
          if (s.id !== sessionId) return s;
          const msgs = s.messages.slice();
          const last = msgs[msgs.length - 1];
          if (last && last.role === "assistant") msgs[msgs.length - 1] = {
            ...last,
            model: fb
          };
          return {
            ...s,
            messages: msgs
          };
        }));
        startStream(sessionId, prompt, fb, images, true);
        return true;
      };
      // push empty assistant msg
      setSessions(ss => ss.map(s => s.id === sessionId ? {
        ...s,
        messages: [...s.messages, {
          role: "assistant",
          content: "",
          model,
          t: Date.now(),
          ts: new Date().toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
          }),
          followups,
          thought: 0
        }]
      } : s));
      setStreaming({
        sessionId,
        text: "",
        phase: "think"
      });
      const t0 = Date.now();

      // build message history for this session (exclude the just-pushed empty assistant)
      const sess = (sessionsRef.current || []).find(s => s.id === sessionId);
      const history = (sess ? sess.messages : []).filter(m => (m.role === "user" || m.role === "assistant") && m.content).map(m => ({
        role: m.role,
        content: m.content
      }));
      if (!history.length || history[history.length - 1].content !== prompt) history.push({
        role: "user",
        content: prompt
      });

      // Compose system context (backend folds these after its base prompt):
      // Project knowledge → Agent persona → personalization (most specific last).
      const sysBlocks = [];
      const proj = sess && sess.projectId ? projects.find(p => p.id === sess.projectId) : null;
      if (proj) {
        let blk = "# Project: " + proj.name;
        if (proj.instructions && proj.instructions.trim()) blk += "\n" + proj.instructions.trim();
        const withText = (proj.files || []).filter(f => f.text);
        if (withText.length) blk += "\n\n# Project knowledge\n" + withText.map(f => "--- " + f.name + " ---\n" + f.text).join("\n\n");
        sysBlocks.push(blk);
      }
      const ag = sess && sess.agentId ? agents.find(a => a.id === sess.agentId) : null;
      if (ag && ag.system && ag.system.trim()) sysBlocks.push(ag.system.trim());
      if (settings.systemPrompt && settings.systemPrompt.trim()) sysBlocks.push("# User preferences\n" + settings.systemPrompt.trim());
      // unshift in reverse so final order is [project, agent, preferences]
      for (let i = sysBlocks.length - 1; i >= 0; i--) history.unshift({
        role: "system",
        content: sysBlocks[i]
      });

      // real backend call → AgentBay. model id = "provider::model"
      const [provId, ...rest] = String(model || "").split("::");
      const modelName = rest.join("::");
      const reqBody = JSON.stringify({
        messages: history,
        provider: provId || undefined,
        model: modelName || undefined,
        session_id: sessionId,
        images: images && images.length ? images : undefined
      });

      // AbortController so Stop can close the connection immediately (real Stop also
      // POSTs /api/chat/cancel to halt the agent server-side).
      const ac = typeof AbortController !== "undefined" ? new AbortController() : null;
      abortRef.current = ac;
      const signal = ac ? ac.signal : undefined;

      // Live streaming: render tokens + the agent's thinking + tool calls as they
      // arrive. Falls back to the plain /api/chat + typewriter on any error.
      const fallback = () => fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: reqBody,
        signal
      }).then(r => r.json()).then(d => {
        if (streamRef.current === "cancel") {
          finalize(sessionId, "", followups, t0);
          return;
        }
        const reply = d.reply || "⚠ " + (d.error || "no response from model");
        if (reply.startsWith("⚠") && tryFallback()) return; // primary errored → fallback model
        metaRef.current[sessionId] = {
          reasoning: d.reasoning || "",
          tools: d.tools || [],
          plan: d.plan || [],
          usage: d.usage || null
        };
        runTypewriter(sessionId, reply, followups, t0);
      }).catch(e => {
        if (e && e.name === "AbortError") return;
        runTypewriter(sessionId, "⚠ " + e, followups, t0);
      });
      (async () => {
        let resp;
        try {
          resp = await fetch("/api/chat/stream", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: reqBody,
            signal
          });
          if (!resp.ok || !resp.body) throw new Error("no stream");
        } catch (e) {
          if (e && e.name === "AbortError") return;
          return fallback();
        }
        const reader = resp.body.getReader();
        const dec = new TextDecoder();
        let buf = "",
          content = "",
          reasoning = "",
          tools = [],
          plan = [],
          usage = null,
          gotAny = false;
        const pump = extra => setStreaming({
          sessionId,
          text: content,
          reasoning,
          tools: tools.slice(),
          plan: plan.slice(),
          usage,
          phase: content ? "stream" : "think",
          ...extra
        });
        try {
          while (true) {
            const {
              done,
              value
            } = await reader.read();
            if (done) break;
            if (streamRef.current === "cancel") {
              try {
                reader.cancel();
              } catch (e) {}
              finalize(sessionId, content, followups, t0);
              return;
            }
            buf += dec.decode(value, {
              stream: true
            });
            let nl;
            while ((nl = buf.indexOf("\n\n")) >= 0) {
              const line = buf.slice(0, nl).split("\n").find(l => l.startsWith("data:"));
              buf = buf.slice(nl + 2);
              if (!line) continue;
              let ev;
              try {
                ev = JSON.parse(line.slice(5).trim());
              } catch (e) {
                continue;
              }
              gotAny = true;
              if (ev.type === "token") {
                content += ev.data;
                pump();
              } else if (ev.type === "reasoning") {
                reasoning += ev.data;
                pump();
              } else if (ev.type === "tool") {
                const i = ev.data.index || 0;
                tools[i] = Object.assign({}, tools[i], ev.data);
                pump();
              } else if (ev.type === "plan") {
                plan = Array.isArray(ev.data) ? ev.data : [];
                pump();
              } else if (ev.type === "usage") {
                usage = ev.data;
                pump();
              } else if (ev.type === "error") {
                content = content || "⚠ " + ev.data;
                pump();
              }
            }
          }
        } catch (e) {
          if (e && e.name === "AbortError") return;
          if (streamRef.current === "cancel") return;
          if (!gotAny) return fallback();
        }
        if (!gotAny) return fallback();
        const finalContent = content || "⚠ no response from model";
        if (finalContent.startsWith("⚠") && tryFallback()) return; // primary errored → fallback model
        metaRef.current[sessionId] = {
          reasoning,
          tools: tools.filter(Boolean),
          plan,
          usage
        };
        finalize(sessionId, finalContent, followups, t0);
      })();
    };
    const finalize = (sessionId, full, followups, t0) => {
      const secs = Math.max(1, Math.round((Date.now() - t0) / 1000));
      const meta = metaRef.current[sessionId] || {};
      delete metaRef.current[sessionId];
      setSessions(ss => ss.map(s => {
        if (s.id !== sessionId) return s;
        const msgs = s.messages.slice();
        const last = msgs[msgs.length - 1];
        if (last && last.role === "assistant") msgs[msgs.length - 1] = {
          ...last,
          content: full,
          thought: Math.min(secs, 9),
          took: secs,
          followups,
          reasoning: meta.reasoning || "",
          tools: meta.tools || [],
          plan: meta.plan || [],
          usage: meta.usage || null
        };
        return {
          ...s,
          messages: msgs,
          updated: Date.now()
        };
      }));
      setStreaming(null);
      streamRef.current = null;

      // Suggested follow-ups (opt-in) — ask the model for relevant ones from the real conversation.
      if (settings.followups && full && !full.startsWith("⚠")) {
        const sess = (sessionsRef.current || []).find(s => s.id === sessionId);
        const hist = (sess ? sess.messages : []).filter(m => m.content).map(m => ({
          role: m.role,
          content: m.content
        }));
        if (!hist.length || hist[hist.length - 1].content !== full) hist.push({
          role: "assistant",
          content: full
        });
        const [provId, ...rest] = String(sess && sess.model || "").split("::");
        fetch("/api/followups", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messages: hist,
            provider: provId || undefined,
            model: rest.join("::") || undefined
          })
        }).then(r => r.json()).then(d => {
          const fu = d && d.followups || [];
          if (!fu.length) return;
          setSessions(ss => ss.map(s => {
            if (s.id !== sessionId) return s;
            const msgs = s.messages.slice();
            const last = msgs[msgs.length - 1];
            if (last && last.role === "assistant") msgs[msgs.length - 1] = {
              ...last,
              followups: fu
            };
            return {
              ...s,
              messages: msgs
            };
          }));
        }).catch(() => {});
      }
    };
    const stopStream = () => {
      if (streamRef.current && typeof streamRef.current !== "string") clearTimeout(streamRef.current);
      const sid = streaming && streaming.sessionId;
      const partial = streaming ? streaming.text : "";
      streamRef.current = "cancel"; // reader loop bails on its next tick
      try {
        abortRef.current && abortRef.current.abort();
      } catch (e) {} // close the connection now
      if (sid) {
        // REAL stop — tell the server to cancel the agent turn (ACP session/cancel + kill)
        try {
          fetch("/api/chat/cancel", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              session_id: sid
            })
          }).catch(() => {});
        } catch (e) {}
        setSessions(ss => ss.map(s => {
          if (s.id !== sid) return s;
          const msgs = s.messages.slice();
          const last = msgs[msgs.length - 1];
          if (last && last.role === "assistant") msgs[msgs.length - 1] = {
            ...last,
            content: partial || "*(stopped)*",
            thought: 1
          };
          return {
            ...s,
            messages: msgs
          };
        }));
      }
      setStreaming(null);
      abortRef.current = null;
      streamRef.current = null;
    };

    /* ---- send ---- */
    const send = text => {
      const typed = (text != null ? text : draft).trim();
      if (!typed && attachments.length === 0) return;
      // Images are sent to the (multimodal) agent as real data — capture them now
      // (state clears before startStream runs) and show them in the user's bubble.
      const images = attachments.filter(a => a.kind === "image" && a.b64).map(a => ({
        mime: a.mime,
        b64: a.b64,
        name: a.name
      }));
      // Fold attached TEXT file contents into the message; only non-image, non-text
      // files are listed "by name only" (images travel as image data, not a note).
      const textParts = attachments.filter(a => a.text).map(a => "\n\n--- Attached file: " + a.name + " ---\n" + a.text);
      const named = attachments.filter(a => !a.text && a.kind !== "image").map(a => a.name);
      const body = typed + textParts.join("") + (named.length ? "\n\n[Attached (by name only): " + named.join(", ") + "]" : "");
      const title = (typed || attachments[0] && attachments[0].name || "New chat").slice(0, 40);
      const userMsg = {
        role: "user",
        content: body,
        t: Date.now()
      };
      if (images.length) userMsg.images = images;
      let sid = activeId;
      if (!active) {
        sid = uid();
        const newS = {
          id: sid,
          title,
          model: homeModel,
          group: "Today",
          tags: [],
          pinned: false,
          updated: Date.now(),
          projectId: composerProject || null,
          agentId: composerAgent || null,
          messages: [userMsg]
        };
        setSessions(ss => [newS, ...ss]);
        setActiveId(sid);
        if (!sessions.some(s => s.messages.length > 1)) {
          fireConfetti();
        }
        setComposerProject(null);
        setComposerAgent(null); // context now lives on the session
      } else {
        setSessions(ss => ss.map(s => s.id === sid ? {
          ...s,
          messages: [...s.messages, userMsg],
          updated: Date.now()
        } : s));
      }
      setDraft("");
      setAttachments([]);
      const model = active ? active.model : homeModel;
      setTimeout(() => startStream(sid, body, model, images), 60);
    };

    /* ---- start a chat scoped to a project / agent ---- */
    const startProjectChat = projectId => {
      if (streaming) stopStream();
      setModal(null);
      setActiveId(null);
      setDraft("");
      setAttachments([]);
      setComposerProject(projectId);
      setComposerAgent(null);
      setHomeModel(defaultModel);
      setFocusKey(k => k + 1);
    };
    const startAgentChat = agentId => {
      if (streaming) stopStream();
      const a = agents.find(x => x.id === agentId);
      setModal(null);
      setActiveId(null);
      setDraft("");
      setAttachments([]);
      setComposerAgent(agentId);
      setComposerProject(null);
      setHomeModel(a && a.model ? a.model : defaultModel); // honor the agent's model override
      setFocusKey(k => k + 1);
    };

    /* ---- regenerate: drop the last assistant turn, re-run from the last user prompt ---- */
    const regenerate = sessionId => {
      if (streaming) return;
      const sess = (sessionsRef.current || []).find(s => s.id === sessionId);
      if (!sess) return;
      const msgs = sess.messages.slice();
      let lastUserIdx = -1;
      for (let i = msgs.length - 1; i >= 0; i--) {
        if (msgs[i].role === "user") {
          lastUserIdx = i;
          break;
        }
      }
      if (lastUserIdx < 0) return;
      const prompt = msgs[lastUserIdx].content;
      const trimmed = msgs.slice(0, lastUserIdx + 1); // keep through the user message
      setSessions(ss => ss.map(s => s.id === sessionId ? {
        ...s,
        messages: trimmed
      } : s));
      setTimeout(() => startStream(sessionId, prompt, sess.model), 60);
    };

    // Edit a prior user message: replace its text, drop everything after it, re-run.
    const editMessage = (sessionId, idx, text) => {
      if (streaming) stopStream();
      const sess = (sessionsRef.current || []).find(s => s.id === sessionId);
      if (!sess || !sess.messages[idx] || sess.messages[idx].role !== "user") return;
      const msgs = sess.messages.slice(0, idx + 1);
      msgs[idx] = {
        ...msgs[idx],
        content: text
      };
      setSessions(ss => ss.map(s => s.id === sessionId ? {
        ...s,
        messages: msgs,
        updated: Date.now()
      } : s));
      setTimeout(() => startStream(sessionId, text, sess.model), 80);
    };
    const newChat = () => {
      if (streaming) stopStream();
      setActiveId(null);
      setDraft("");
      setAttachments([]);
      setHomeModel(defaultModel);
      setComposerProject(null);
      setComposerAgent(null);
      setMobileOpen(false);
      setFocusKey(k => k + 1);
    };
    const openChat = id => {
      if (streaming) stopStream();
      setActiveId(id);
      setMobileOpen(false);
      setRenaming(false);
    };
    const pickModel = id => {
      if (active) setSessions(ss => ss.map(s => s.id === active.id ? {
        ...s,
        model: id
      } : s));else setHomeModel(id);
      // id = "provider::model" → set active provider + model on the backend
      const [prov, ...rest] = String(id || "").split("::");
      fetch("/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider: prov,
          active_model: rest.join("::")
        })
      }).catch(() => {});
    };

    /* ---- session ops ---- */
    const renameSession = (id, title) => setSessions(ss => ss.map(s => s.id === id ? {
      ...s,
      title
    } : s));
    const pinSession = s => {
      setSessions(ss => ss.map(x => x.id === s.id ? {
        ...x,
        pinned: !x.pinned
      } : x));
      toast({
        type: "success",
        title: s.pinned ? "Unpinned" : "Pinned to top"
      });
    };
    const archiveSession = s => {
      removeSessionRemote(s.id);
      setSessions(ss => ss.filter(x => x.id !== s.id));
      if (activeId === s.id) setActiveId(null);
      toast({
        type: "info",
        title: "Chat archived"
      });
    };
    const deleteSession = s => {
      removeSessionRemote(s.id);
      setSessions(ss => ss.filter(x => x.id !== s.id));
      if (activeId === s.id) setActiveId(null);
      setModal(null);
      toast({
        type: "info",
        title: "Chat deleted"
      });
    };

    /* ---- composer helpers: real file attach (reads text content, sent with the message) ---- */
    const fileInputRef = useRef(null);
    const fmtSize = n => n < 1024 ? n + " B" : n < 1048576 ? (n / 1024).toFixed(0) + " KB" : (n / 1048576).toFixed(1) + " MB";
    const TEXT_RE = /\.(txt|md|markdown|csv|tsv|json|ya?ml|log|js|jsx|ts|tsx|py|rb|go|rs|java|c|h|cpp|cs|php|sh|sql|html?|css|xml|ini|toml|env)$|^text\//i;
    const onFilesPicked = fileList => {
      Array.from(fileList || []).forEach(f => {
        if (f.size > 25 * 1024 * 1024) {
          toast({
            type: "info",
            title: f.name + " skipped",
            desc: "Files must be under 25 MB."
          });
          return;
        }
        const kind = /^image\//.test(f.type) ? "image" : "file";
        const fr = new FileReader();
        fr.onload = () => {
          fetch("/api/extract", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: f.name,
              b64: String(fr.result)
            })
          }).then(r => r.json()).then(res => {
            // Keep image bytes so they're sent to the (multimodal) agent, not just shown.
            const extra = kind === "image" ? {
              b64: String(fr.result),
              mime: f.type || "image/png"
            } : {};
            setAttachments(x => [...x, {
              name: f.name,
              size: fmtSize(f.size),
              kind,
              text: res.text || "",
              ...extra
            }]);
            if (!res.text && kind !== "image") toast({
              type: "info",
              title: f.name + " attached",
              desc: res.note || "no text extracted"
            });
          }).catch(() => toast({
            type: "error",
            title: "Attach failed",
            desc: f.name
          }));
        };
        fr.readAsDataURL(f); // base64 → server extracts any file type
      });
    };
    const attachFile = () => fileInputRef.current && fileInputRef.current.click();
    // Slash commands — typing "/" at the start of the composer opens this menu.
    const slashCommands = [{
      name: "new",
      desc: "Start a new chat",
      icon: "Plus",
      run: () => newChat()
    }, {
      name: "model",
      desc: "Switch model",
      icon: "Bot",
      run: () => setPop({
        kind: "model",
        anchor: headModelRef.current ? headModelRef : topModelRef
      })
    }, {
      name: "search",
      desc: "Search chats & messages",
      icon: "Search",
      run: () => setModal({
        kind: "search"
      })
    }, {
      name: "settings",
      desc: "Open settings",
      icon: "Settings",
      run: () => setModal({
        kind: "settings"
      })
    }, {
      name: "shortcuts",
      desc: "Keyboard shortcuts",
      icon: "Keyboard",
      run: () => setModal({
        kind: "shortcuts"
      })
    }];
    const composerProps = {
      value: draft,
      onChange: setDraft,
      onSend: () => send(),
      onStop: stopStream,
      streaming: !!streaming,
      attachments,
      onAttach: attachFile,
      onFiles: onFilesPicked,
      onRemoveAttach: i => setAttachments(x => x.filter((_, j) => j !== i)),
      focusKey,
      commands: slashCommands,
      placeholder: (active ? "Reply to " : "Message ") + (window.agentBrandName ? window.agentBrandName(agentKind) : "Hermes") + "…"
    };

    /* ---- export ---- */
    const downloadBlob = (name, text, type) => {
      try {
        const url = URL.createObjectURL(new Blob([text], {
          type: type || "application/json"
        }));
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch (e) {
        toast({
          type: "info",
          title: "Download blocked by browser"
        });
      }
    };
    const slug = s => (s || "chat").replace(/[^\w.-]+/g, "-").slice(0, 50) || "chat";
    const serialize = (s, fmt) => {
      const rows = (s.messages || []).map(m => ({
        who: m.role === "user" ? "You" : "Assistant",
        c: m.content || ""
      }));
      if (fmt === "json") return JSON.stringify(s, null, 2);
      if (fmt === "txt") return (s.title || "Chat") + "\n\n" + rows.map(r => r.who + ":\n" + r.c).join("\n\n");
      if (fmt === "html") return "<!doctype html><meta charset=utf-8><title>" + (s.title || "Chat") + "</title><body style='font:15px/1.6 system-ui;max-width:720px;margin:40px auto;padding:0 16px'>" + "<h1>" + (s.title || "Chat") + "</h1>" + rows.map(r => "<p><b>" + r.who + ":</b><br>" + r.c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\n/g, "<br>") + "</p>").join("") + "</body>";
      return "# " + (s.title || "Chat") + "\n\n" + rows.map(r => "**" + r.who + ":** " + r.c).join("\n\n"); // md
    };
    const doExport = (fmt, label) => {
      if (!active) {
        toast({
          type: "info",
          title: "Open a chat to export it"
        });
        return;
      }
      const mime = fmt === "json" ? "application/json" : fmt === "html" ? "text/html" : "text/" + (fmt === "md" ? "markdown" : "plain");
      downloadBlob(slug(active.title) + "." + fmt, serialize(active, fmt), mime);
      toast({
        type: "success",
        title: "Exported as " + (label || fmt)
      });
    };
    const exportAll = () => {
      if (!sessions.length) {
        toast({
          type: "info",
          title: "No chats to export"
        });
        return;
      }
      downloadBlob("hermes-export.json", JSON.stringify({
        exported: new Date().toISOString(),
        sessions
      }, null, 2), "application/json");
      toast({
        type: "success",
        title: "Exported all chats",
        desc: sessions.length + " conversations"
      });
    };

    /* ---- popovers ---- */
    const openChatMenu = (s, ref) => setPop({
      kind: "chatmenu",
      anchor: ref,
      data: s
    });
    if (!loggedIn) {
      return /*#__PURE__*/React.createElement(V.Login, {
        onLogin: () => {
          setLoggedIn(true);
          if (!tour) setTimeout(() => {}, 0);
        }
      });
    }
    const showHeader = !!active;
    return /*#__PURE__*/React.createElement("div", {
      className: "app"
    }, mobileOpen && /*#__PURE__*/React.createElement("div", {
      className: "mobile-backdrop",
      onClick: () => setMobileOpen(false)
    }), /*#__PURE__*/React.createElement(window.Sidebar, {
      collapsed: collapsed,
      mobileOpen: mobileOpen,
      sessions: sessions,
      activeId: activeId,
      folders: folders,
      groupOrder: D.GROUP_ORDER,
      user: user,
      theme: theme,
      agentKind: agentKind,
      onNewChat: newChat,
      onOpenChat: openChat,
      onOpenSearch: () => setModal({
        kind: "search"
      }),
      onOpenNotes: () => setModal({
        kind: "notes"
      }),
      onOpenDashboard: () => setModal({
        kind: "dashboard"
      }),
      showDashboard: settings.dashboard === true,
      onOpenProjects: () => setModal({
        kind: "projects"
      }),
      onOpenAgents: () => setModal({
        kind: "agents"
      }),
      onOpenSkills: () => setModal({
        kind: "skills"
      }),
      showSkills: skillsCount > 0,
      showAgents: settings.agentsEnabled,
      onNewFolder: () => setModal({
        kind: "folder"
      }),
      onChatMenu: openChatMenu,
      onToggleCollapse: () => {
        if (window.innerWidth <= 720) setMobileOpen(m => !m);else setCollapsed(c => !c);
      },
      onUserClick: ref => setPop({
        kind: "usermenu",
        anchor: ref
      }),
      onResize: x => {
        const w = Math.max(220, Math.min(360, x));
        setSidebarW(w);
        document.documentElement.style.setProperty("--sidebar-w", w + "px");
      }
    }), /*#__PURE__*/React.createElement("main", {
      className: "main"
    }, appUpd && appUpd.update_available && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 14px",
        background: "color-mix(in srgb, var(--accent) 14%, var(--surface))",
        borderBottom: "1px solid var(--border)",
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        color: "var(--accent-deep)"
      }
    }, /*#__PURE__*/React.createElement(I.Download, {
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, "A new version of AgentBay is available", appUpd.latest ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-3)"
      }
    }, " (", appUpd.latest, ")") : null, "."), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      style: {
        padding: "5px 14px"
      },
      disabled: updating,
      onClick: runAppUpdate
    }, updating ? "Updating…" : "Update now"), /*#__PURE__*/React.createElement("button", {
      className: "x-btn",
      "aria-label": "Dismiss",
      onClick: () => setAppUpd(null)
    }, /*#__PURE__*/React.createElement(I.X, {
      size: 16
    }))), /*#__PURE__*/React.createElement("div", {
      className: "topbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left"
    }, /*#__PURE__*/React.createElement("button", {
      className: "icon-btn tb-menu-btn",
      "aria-label": "Toggle sidebar",
      onClick: () => {
        if (window.innerWidth <= 720) setMobileOpen(m => !m);else setCollapsed(c => !c);
      }
    }, /*#__PURE__*/React.createElement(I.Menu, {
      size: 19
    }))), /*#__PURE__*/React.createElement("div", {
      className: "center"
    }, !showHeader ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("button", {
      ref: topModelRef,
      className: "model-pill",
      onClick: () => setPop({
        kind: "model",
        anchor: topModelRef
      })
    }, React.createElement(I[modelMeta(homeModel).icon] || I.Bot, {
      size: 17,
      style: {
        color: "var(--accent-deep)"
      }
    }), modelMeta(homeModel).name, /*#__PURE__*/React.createElement(I.ChevronDown, {
      size: 15,
      className: "chev"
    }))) : /*#__PURE__*/React.createElement(ChatHeader, {
      active: active,
      renaming: renaming,
      renameVal: renameVal,
      setRenameVal: setRenameVal,
      onModel: () => setPop({
        kind: "model",
        anchor: headModelRef
      }),
      modelRef: headModelRef,
      onStartRename: () => {
        setRenaming(true);
        setRenameVal(active.title);
      },
      onCommitRename: () => {
        if (renameVal.trim()) renameSession(active.id, renameVal.trim());
        setRenaming(false);
        toast({
          type: "success",
          title: "Renamed"
        });
      },
      onCancelRename: () => setRenaming(false),
      onMenu: () => setPop({
        kind: "chatmenu",
        anchor: headMenuRef,
        data: active
      }),
      menuRef: headMenuRef,
      onTags: () => setModal({
        kind: "tag",
        data: active
      }),
      ctx: {
        project: projects.find(p => p.id === active.projectId),
        agent: agents.find(a => a.id === active.agentId)
      }
    })), !showHeader && /*#__PURE__*/React.createElement("div", {
      className: "set-default"
    }, homeModel !== defaultModel ? /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setDefaultModel(homeModel);
        toast({
          type: "success",
          title: "Default model set",
          desc: modelMeta(homeModel).name
        });
      }
    }, "Set as default") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-faint)"
      }
    }, "Default model")), /*#__PURE__*/React.createElement("div", {
      className: "tb-spacer"
    }), /*#__PURE__*/React.createElement("div", {
      className: "right"
    }, /*#__PURE__*/React.createElement("button", {
      ref: settingsRef,
      className: "icon-btn",
      "aria-label": "Settings",
      onClick: () => setModal({
        kind: "settings"
      })
    }, /*#__PURE__*/React.createElement(I.Settings, {
      size: 19
    })), (() => {
      const showBadge = changelogSeen !== "ALL" && changelogSeen !== window.CHANGELOG_LATEST;
      return /*#__PURE__*/React.createElement("button", {
        ref: bellRef,
        className: "icon-btn" + (showBadge ? " has-badge" : ""),
        "aria-label": "Notifications",
        onClick: () => setModal({
          kind: "changelog"
        })
      }, /*#__PURE__*/React.createElement(I.Bell, {
        size: 19
      }), showBadge && /*#__PURE__*/React.createElement("span", {
        className: "badge"
      }));
    })(), /*#__PURE__*/React.createElement("button", {
      ref: avatarRef,
      className: "icon-btn",
      "aria-label": "Account",
      onClick: () => setPop({
        kind: "usermenu",
        anchor: avatarRef
      }),
      style: {
        width: 38
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "avatar",
      style: {
        width: 30,
        height: 30
      }
    }, user.initials)))), !active ? /*#__PURE__*/React.createElement(Home, {
      model: homeModel,
      suggestions: suggestions,
      onPick: s => {
        send(s.prompt);
      },
      composerProps: composerProps,
      context: {
        project: projects.find(p => p.id === composerProject),
        agent: agents.find(a => a.id === composerAgent),
        onClear: () => {
          setComposerProject(null);
          setComposerAgent(null);
        }
      }
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Thread, {
      session: active,
      streaming: streaming && streaming.sessionId === active.id ? streaming : null,
      onFollowup: q => send(q),
      onToast: toast,
      settings: settings,
      onRegen: () => regenerate(active.id),
      onEdit: (idx, text) => editMessage(active.id, idx, text)
    }), /*#__PURE__*/React.createElement(Composer, composerProps))), /*#__PURE__*/React.createElement("input", {
      ref: fileInputRef,
      type: "file",
      multiple: true,
      style: {
        display: "none"
      },
      onChange: e => {
        onFilesPicked(e.target.files);
        e.target.value = "";
      }
    }), modal && modal.kind === "settings" && /*#__PURE__*/React.createElement(window.Settings, {
      s: settings,
      set: setS,
      theme: theme,
      onTheme: setTheme,
      onClose: () => {
        setModal(null);
        refreshModels();
      },
      defaultModel: defaultModel,
      onDefaultModel: m => {
        setDefaultModel(m);
        toast({
          type: "success",
          title: "Default model set"
        });
      },
      onDeleteAll: () => setModal({
        kind: "deleteAll"
      }),
      onImport: () => setModal({
        kind: "import"
      }),
      onExportAll: exportAll,
      onToast: toast
    }), modal && modal.kind === "search" && /*#__PURE__*/React.createElement(Mo.SearchModal, {
      sessions: sessions,
      onClose: () => setModal(null),
      onOpenChat: openChat,
      onNewChat: newChat,
      onOpenSettings: () => setModal({
        kind: "settings"
      })
    }), modal && modal.kind === "shortcuts" && /*#__PURE__*/React.createElement(Mo.ShortcutsModal, {
      onClose: () => setModal(null)
    }), modal && modal.kind === "about" && /*#__PURE__*/React.createElement(Modal, {
      onClose: () => setModal(null),
      width: 400
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-body",
      style: {
        textAlign: "center",
        padding: "34px 24px"
      }
    }, /*#__PURE__*/React.createElement(window.HermesGlyph, {
      size: 56
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 19,
        marginTop: 14
      }
    }, "AgentBay"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-3)",
        marginTop: 4
      }
    }, "MIT License"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-faint)",
        fontSize: 13,
        marginTop: 18
      }
    }, "Your on-device AI agent \u2014 Hermes & OpenClaw"))), modal && modal.kind === "tag" && /*#__PURE__*/React.createElement(Mo.TagModal, {
      session: modal.data,
      allTags: allTags.length ? allTags : ["code", "writing", "study"],
      onClose: () => setModal(null),
      onToast: toast,
      onSave: tags => {
        setSessions(ss => ss.map(s => s.id === modal.data.id ? {
          ...s,
          tags
        } : s));
        setModal(null);
      }
    }), modal && modal.kind === "folder" && /*#__PURE__*/React.createElement(Mo.FolderModal, {
      onClose: () => setModal(null),
      onCreate: f => {
        setFolders(x => [...x, f]);
        setModal(null);
        toast({
          type: "success",
          title: "Folder created",
          desc: f.name
        });
      }
    }), modal && modal.kind === "import" && /*#__PURE__*/React.createElement(Mo.ImportModal, {
      onClose: () => setModal(null),
      onToast: toast,
      onImport: arr => {
        setSessions(ss => [...arr, ...ss]);
      }
    }), modal && modal.kind === "changelog" && /*#__PURE__*/React.createElement(Mo.ChangelogModal, {
      onSeen: setChangelogSeen,
      onClose: () => {
        setModal(null);
        if (!tour) {
          setShowTour(true);
          setTour(true);
        }
      }
    }), modal && modal.kind === "notes" && /*#__PURE__*/React.createElement(V.Notes, {
      onClose: () => setModal(null)
    }), modal && modal.kind === "dashboard" && /*#__PURE__*/React.createElement(V.Dashboard, {
      sessions: sessions,
      onClose: () => setModal(null),
      onNewChat: newChat
    }), modal && modal.kind === "projects" && /*#__PURE__*/React.createElement(Hub.Projects, {
      projects: projects,
      setProjects: setProjects,
      onClose: () => setModal(null),
      onToast: toast,
      onStartChat: startProjectChat
    }), modal && modal.kind === "agents" && /*#__PURE__*/React.createElement(Hub.Agents, {
      agents: agents,
      setAgents: setAgents,
      models: D.MODELS,
      onClose: () => setModal(null),
      onToast: toast,
      onStartChat: startAgentChat
    }), modal && modal.kind === "skills" && /*#__PURE__*/React.createElement(Hub.Skills, {
      onClose: () => setModal(null)
    }), modal && modal.kind === "delete" && /*#__PURE__*/React.createElement(Mo.DeleteModal, {
      title: "Delete chat?",
      name: modal.data.title,
      body: "This will permanently delete \u201C" + modal.data.title + "\u201D. This can't be undone.",
      onClose: () => setModal(null),
      onConfirm: () => deleteSession(modal.data)
    }), modal && modal.kind === "deleteAll" && /*#__PURE__*/React.createElement(Mo.DeleteModal, {
      title: "Delete all chats?",
      name: "DELETE",
      requireType: true,
      body: "This permanently removes all " + sessions.length + " conversations.",
      onClose: () => setModal(null),
      onConfirm: () => {
        sessionsLive.current.forEach(s => removeSessionRemote(s.id));
        setSessions([]);
        setActiveId(null);
        setModal(null);
        toast({
          type: "info",
          title: "All chats deleted"
        });
      }
    }), modal && modal.kind === "signout" && /*#__PURE__*/React.createElement(Mo.DeleteModal, {
      title: "Sign out?",
      name: "signout",
      body: "You'll need your password to sign back in.",
      onClose: () => setModal(null),
      onConfirm: () => {
        setModal(null);
        setLoggedIn(false);
        setActiveId(null);
      }
    }), pop && pop.kind === "model" && /*#__PURE__*/React.createElement(V.ModelMenu, {
      anchorRef: pop.anchor,
      current: currentModel,
      defaultModel: defaultModel,
      onClose: () => setPop(null),
      onPick: pickModel,
      onSetDefault: m => {
        setDefaultModel(m);
        toast({
          type: "success",
          title: "Default model set"
        });
      }
    }), pop && pop.kind === "usermenu" && /*#__PURE__*/React.createElement(Mo.UserMenu, {
      anchorRef: pop.anchor,
      user: user,
      theme: theme,
      onClose: () => setPop(null),
      onSettings: () => setModal({
        kind: "settings"
      }),
      onShortcuts: () => setModal({
        kind: "shortcuts"
      }),
      onAbout: () => setModal({
        kind: "about"
      }),
      onTheme: setTheme,
      onSignOut: () => setModal({
        kind: "signout"
      })
    }), pop && pop.kind === "chatmenu" && /*#__PURE__*/React.createElement(Mo.ChatMenu, {
      anchorRef: pop.anchor,
      session: pop.data,
      onClose: () => setPop(null),
      onRename: s => {
        openChat(s.id);
        setTimeout(() => {
          setRenaming(true);
          setRenameVal(s.title);
        }, 0);
      },
      onPin: pinSession,
      onArchive: archiveSession,
      onShare: s => setModal({
        kind: "share",
        data: s
      }),
      onExport: s => {
        openChat(s.id);
        setPop({
          kind: "export",
          anchor: pop.anchor,
          data: s
        });
      },
      onTag: s => setModal({
        kind: "tag",
        data: s
      }),
      onDelete: s => setModal({
        kind: "delete",
        data: s
      })
    }), pop && pop.kind === "export" && /*#__PURE__*/React.createElement(Mo.ExportMenu, {
      anchorRef: pop.anchor,
      onClose: () => setPop(null),
      onPick: doExport
    }), loggedIn && hasAgent === false && !onboardSkipped && /*#__PURE__*/React.createElement(V.OnboardingGate, {
      onInstalled: () => {
        setHasAgent(true);
        toast({
          type: "success",
          title: "Agent installed",
          desc: "Every model now runs with full tools."
        });
      },
      onSkip: () => setOnboardSkipped(true)
    }), showTour && /*#__PURE__*/React.createElement(V.Tour, {
      onDone: () => setShowTour(false)
    }));
  }

  /* ---------- chat header (active) ---------- */
  function ChatHeader({
    active,
    renaming,
    renameVal,
    setRenameVal,
    onModel,
    modelRef,
    onStartRename,
    onCommitRename,
    onCancelRename,
    onMenu,
    menuRef,
    onTags,
    ctx
  }) {
    const meta = modelMeta(active.model);
    const Ic = I[meta.icon] || I.Bot;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("button", {
      ref: modelRef,
      className: "model-pill",
      onClick: onModel
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 16,
      style: {
        color: "var(--accent-deep)"
      }
    }), meta.name, /*#__PURE__*/React.createElement(I.ChevronDown, {
      size: 14,
      className: "chev"
    })), ctx && ctx.project && /*#__PURE__*/React.createElement("span", {
      className: "tag-mini",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        marginLeft: 4
      }
    }, /*#__PURE__*/React.createElement(I.Folder, {
      size: 12,
      style: {
        color: ctx.project.color
      }
    }), ctx.project.name), ctx && ctx.agent && /*#__PURE__*/React.createElement("span", {
      className: "tag-mini",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        marginLeft: 4
      }
    }, /*#__PURE__*/React.createElement(I.Bot, {
      size: 12,
      style: {
        color: ctx.agent.color
      }
    }), ctx.agent.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--border-strong)"
      }
    }, "\xB7"), renaming ? /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      className: "field",
      style: {
        padding: "4px 8px",
        maxWidth: 280,
        fontSize: 14
      },
      value: renameVal,
      onChange: e => setRenameVal(e.target.value),
      onKeyDown: e => {
        if (e.key === "Enter") onCommitRename();
        if (e.key === "Escape") onCancelRename();
      },
      onBlur: onCommitRename
    }) : /*#__PURE__*/React.createElement("button", {
      className: "chat-title",
      onClick: onStartRename,
      title: "Rename",
      style: {
        fontWeight: 550,
        fontSize: 14.5,
        color: "var(--text-2)",
        padding: "4px 6px",
        borderRadius: 7,
        maxWidth: 320,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, active.title), /*#__PURE__*/React.createElement("span", {
      className: "tb-spacer"
    }), /*#__PURE__*/React.createElement("button", {
      className: "icon-btn",
      "aria-label": "Tags",
      onClick: onTags
    }, /*#__PURE__*/React.createElement(I.Tag, {
      size: 17
    })), /*#__PURE__*/React.createElement("button", {
      ref: menuRef,
      className: "icon-btn",
      "aria-label": "Chat menu",
      onClick: onMenu
    }, /*#__PURE__*/React.createElement(I.MoreHorizontal, {
      size: 19
    })));
  }

  // ---- Optional password lock: a real server-side login wall (off by default) ----
  function LoginScreen({
    onAuthed
  }) {
    const [pw, setPw] = React.useState("");
    const [err, setErr] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const submit = e => {
      if (e) e.preventDefault();
      if (!pw || busy) return;
      setBusy(true);
      setErr("");
      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password: pw
        })
      }).then(r => r.json()).then(d => {
        if (d.ok) onAuthed();else {
          setErr(d.error || "Wrong password");
          setBusy(false);
        }
      }).catch(() => {
        setErr("Network error");
        setBusy(false);
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "login-screen"
    }, /*#__PURE__*/React.createElement("form", {
      className: "login-card anim-fadeup",
      onSubmit: submit
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-glyph"
    }, /*#__PURE__*/React.createElement(window.HermesGlyph, {
      size: 44
    })), /*#__PURE__*/React.createElement("h1", {
      className: "login-title"
    }, "AgentBay"), /*#__PURE__*/React.createElement("p", {
      className: "login-sub"
    }, "Enter your password to unlock"), /*#__PURE__*/React.createElement("input", {
      className: "login-input",
      type: "password",
      autoFocus: true,
      placeholder: "Password",
      value: pw,
      onChange: e => {
        setPw(e.target.value);
        setErr("");
      }
    }), err && /*#__PURE__*/React.createElement("div", {
      className: "login-err"
    }, err), /*#__PURE__*/React.createElement("button", {
      className: "login-btn",
      type: "submit",
      disabled: busy || !pw
    }, busy ? "Checking…" : "Unlock")));
  }
  function AuthGate({
    children
  }) {
    const [st, setSt] = React.useState(null); // {enabled, authed}
    React.useEffect(() => {
      fetch("/api/auth/status").then(r => r.json()).then(setSt).catch(() => setSt({
        enabled: false,
        authed: true
      }));
    }, []);
    if (!st) return null; // brief: don't flash the app before we know
    if (st.enabled && !st.authed) return /*#__PURE__*/React.createElement(LoginScreen, {
      onAuthed: () => setSt({
        enabled: true,
        authed: true
      })
    });
    return children;
  }
  window.HermesApp = function () {
    return /*#__PURE__*/React.createElement(ToastProvider, null, /*#__PURE__*/React.createElement(AuthGate, null, /*#__PURE__*/React.createElement(App, null)), /*#__PURE__*/React.createElement(window.TweaksController, null));
  };
})();
