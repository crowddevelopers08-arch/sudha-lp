'use client'

import React, { useState } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const HAIR_CONTACT_IMAGE = "/adult-male-having-balding-problems.jpg";
const SKIN_CONTACT_IMAGE = "/rejuvenating-facial-treatment.jpg";
const HAIR_STAGE_IMAGES = [
  "/st1-2.jpeg",
  "/st2-1.jpeg",
  "/st3-3.jpeg",
  "/st4-4.jpeg",
  "/st5-5.jpeg",
];
const SKIN_STAGE_IMAGES = [
  "/images1.png",
  "/images2.png",
  "/images3.png",
  "/images4.png",
  "/images5.png",
];
const SAGE      = "#5e9a71";
const SAGE_DEEP = "#4f8562";
const ROSE      = "#c86b9b";
const ROSE_DEEP = "#a94d7f";
const SK_BASE   = "#f2c8a8";
const SK_SEL    = "#f5d0b4";
const HR_COL    = "#2a1c10";

/* ── Mini SVGs ── */
function MiniHead({ stage, selected }: { stage: number; selected: boolean }) {
  const cid = `mh-${stage}-${selected ? "s" : "u"}`;
  const sk  = selected ? SK_SEL : SK_BASE;
  const ear = selected ? "#ecc09a" : "#e0a878";
  return (
    <svg viewBox="0 0 60 74" width="44" height="55" fill="none">
      <defs><clipPath id={cid}><ellipse cx="30" cy="43" rx="22" ry="27"/></clipPath></defs>
      <ellipse cx="7" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="53" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="30" cy="43" rx="22" ry="27" fill={sk}/>
      <g clipPath={`url(#${cid})`}>
        {stage === 1 && <rect x="0" y="0" width="60" height="40" fill={HR_COL}/>}
        {stage === 2 && (<><rect x="0" y="0" width="60" height="40" fill={HR_COL}/><ellipse cx="13" cy="40" rx="8" ry="7.5" fill={sk}/><ellipse cx="47" cy="40" rx="8" ry="7.5" fill={sk}/></>)}
        {stage === 3 && (<><rect x="0" y="0" width="60" height="38" fill={HR_COL}/><ellipse cx="12" cy="38" rx="12" ry="11" fill={sk}/><ellipse cx="48" cy="38" rx="12" ry="11" fill={sk}/></>)}
        {stage === 4 && (<><rect x="0" y="0" width="60" height="36" fill={HR_COL}/><ellipse cx="11" cy="36" rx="15" ry="14" fill={sk}/><ellipse cx="49" cy="36" rx="15" ry="14" fill={sk}/><ellipse cx="30" cy="22" rx="10" ry="9" fill={sk}/></>)}
        {stage === 5 && (<><ellipse cx="30" cy="43" rx="22" ry="27" fill={sk}/><ellipse cx="9" cy="46" rx="9" ry="20" fill={HR_COL}/><ellipse cx="51" cy="46" rx="9" ry="20" fill={HR_COL}/><ellipse cx="30" cy="67" rx="20" ry="7" fill={HR_COL}/></>)}
      </g>
      <ellipse cx="30" cy="54" rx="13" ry="11" fill="rgba(0,0,0,0.06)"/>
    </svg>
  );
}

function MiniFace({ stage, selected }: { stage: number; selected: boolean }) {
  const sk  = selected ? SK_SEL : SK_BASE;
  const ear = selected ? "#ecc09a" : "#e0a878";
  const s1  = "rgba(185,72,50,0.52)";
  const pig = "rgba(145,80,45,0.22)";
  return (
    <svg viewBox="0 0 60 74" width="44" height="55" fill="none">
      <defs><clipPath id={`mf-${stage}-${selected ? "s" : "u"}`}><ellipse cx="30" cy="43" rx="22" ry="27"/></clipPath></defs>
      <ellipse cx="7" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="53" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="30" cy="43" rx="22" ry="27" fill={sk}/>
      <g clipPath={`url(#mf-${stage}-${selected ? "s" : "u"})`}>
        <rect x="0" y="0" width="60" height="26" fill={HR_COL}/>
      </g>
      {stage === 2 && (<><circle cx="24" cy="38" r="1.5" fill={s1}/><circle cx="36" cy="41" r="1.3" fill={s1}/><circle cx="28" cy="48" r="1.2" fill={s1}/></>)}
      {stage === 3 && (<><ellipse cx="21" cy="44" rx="7" ry="5" fill={pig}/><circle cx="24" cy="36" r="1.7" fill={s1}/><circle cx="37" cy="39" r="1.5" fill={s1}/><circle cx="30" cy="50" r="1.3" fill={s1}/></>)}
      {stage === 4 && (<><ellipse cx="19" cy="43" rx="8" ry="6" fill={pig}/><ellipse cx="41" cy="43" rx="7" ry="5.5" fill={pig}/><circle cx="22" cy="36" r="1.9" fill={s1}/><circle cx="35" cy="38" r="1.8" fill={s1}/><circle cx="28" cy="47" r="1.6" fill={s1}/><circle cx="38" cy="50" r="1.5" fill={s1}/></>)}
      {stage === 5 && (<><ellipse cx="19" cy="41" rx="10" ry="8" fill={pig}/><ellipse cx="41" cy="42" rx="10" ry="8" fill={pig}/><ellipse cx="30" cy="54" rx="12" ry="7" fill={pig}/><circle cx="22" cy="34" r="2.1" fill={s1}/><circle cx="30" cy="31" r="1.9" fill={s1}/><circle cx="38" cy="35" r="2.0" fill={s1}/><circle cx="20" cy="44" r="1.8" fill={s1}/><circle cx="36" cy="47" r="1.7" fill={s1}/></>)}
      <ellipse cx="30" cy="54" rx="13" ry="11" fill="rgba(0,0,0,0.06)"/>
    </svg>
  );
}

/* ── Stage Picker ── */
function StagePicker({
  label, stages, selected, onSelect, accent, accentDp, imagePaths, imageAltPrefix,
}: {
  label: string;
  stages: { stage: number; desc: string }[];
  selected: number | null;
  onSelect: (n: number) => void;
  accent: string; accentDp: string;
  imagePaths: string[];
  imageAltPrefix: string;
}) {
  const isHairAccent = accent === SAGE;
  return (
    <div>
      <span style={{
        display: "block", marginBottom: "10px",
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: accent,
      }}>
        {label}
      </span>
      <div style={{ display: "flex", gap: "8px", flexWrap: "nowrap", overflowX: "auto", paddingBottom: "4px" }}>
        {stages.map(({ stage, desc }) => {
          const sel = selected === stage;
          return (
            <button
              key={stage}
              onClick={() => onSelect(sel ? -1 : stage)}
              style={{
                flex: "1 1 0", minWidth: "96px", maxWidth: "132px",
                background: sel
                  ? (isHairAccent ? "rgba(94,154,113,0.16)" : "rgba(200,107,155,0.16)")
                  : "rgba(255,255,255,0.05)",
                border: sel
                  ? `1.5px solid ${accent}`
                  : "1.5px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "11px 8px 9px",
                display: "flex", flexDirection: "column", alignItems: "center",
                cursor: "pointer", outline: "none",
                transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
                transform: sel ? "translateY(-5px) scale(1.04)" : "none",
                boxShadow: sel
                  ? `0 10px 28px rgba(0,0,0,0.35), 0 0 0 1px ${accent}55, 0 0 16px ${isHairAccent ? "rgba(94,154,113,0.2)" : "rgba(200,107,155,0.2)"}`
                  : "0 2px 10px rgba(0,0,0,0.2)",
                position: "relative", overflow: "hidden",
              }}
            >
              {sel && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: `linear-gradient(90deg, ${accentDp}, ${accent})`,
                  borderRadius: "12px 12px 0 0",
                }}/>
              )}
              <div style={{
                width: "78px",
                height: "70px",
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "6px",
                border: sel ? `1.5px solid ${accent}` : "1px solid rgba(255,255,255,0.12)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.05))",
                filter: sel
                  ? `drop-shadow(0 0 8px ${isHairAccent ? "rgba(94,154,113,0.5)" : "rgba(200,107,155,0.5)"})`
                  : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                transition: "filter 0.22s, border-color 0.22s, transform 0.22s",
                transform: sel ? "scale(1.02)" : "scale(1)",
              }}>
                <img
                  src={imagePaths[stage - 1]}
                  alt={`${imageAltPrefix} stage ${stage}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    filter: sel ? "brightness(1.05) saturate(1.08)" : "none",
                  }}
                />
              </div>
              <p style={{
                margin: "0 0 2px 0", fontSize: "11px", fontWeight: 800,
                color: sel ? accent : "rgba(255,253,250,0.7)", lineHeight: 1,
                transition: "color 0.22s",
              }}>
                Stage {stage}
              </p>
              <p style={{
                margin: 0, fontSize: "9px",
                color: sel ? "rgba(255,253,250,0.65)" : "rgba(255,253,250,0.3)",
                lineHeight: 1.3, textAlign: "center",
                transition: "color 0.22s",
              }}>
                {desc}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const HAIR_STAGE_DATA = [
  { stage: 1, desc: ""     },
  { stage: 2, desc: ""        },
  { stage: 3, desc: ""    },
  { stage: 4, desc: "" },
  { stage: 5, desc: ""    },
];
const SKIN_STAGE_DATA = [
  { stage: 1, desc: ""       },
  { stage: 2, desc: ""        },
  { stage: 3, desc: ""    },
  { stage: 4, desc: "" },
  { stage: 5, desc: ""      },
];

/* ── Form primitives ── */
const inputBase: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.06)",
  padding: "11px 14px",
  fontSize: "var(--fs-body)",
  color: "#fffdfa",
  outline: "none",
  boxSizing: "border-box",
  borderRadius: "8px",
  transition: "border-color 0.2s",
};

function Field({ label, placeholder, as = "input", accent = SAGE }: {
  label: string; placeholder: string; as?: "input" | "textarea"; accent?: string;
}) {
  return (
    <label style={{ display: "block" }}>
      <span style={{
        display: "block", marginBottom: "7px",
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase", color: accent,
      }}>
        {label}
      </span>
      {as === "textarea" ? (
        <textarea placeholder={placeholder} rows={4}
          style={{ ...inputBase, resize: "vertical", minHeight: "100px" }} />
      ) : (
        <input placeholder={placeholder} style={inputBase} />
      )}
    </label>
  );
}

function SelectField({ label, options, accent = SAGE }: {
  label: string; options: string[]; accent?: string;
}) {
  return (
    <label style={{ display: "block" }}>
      <span style={{
        display: "block", marginBottom: "7px",
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase", color: accent,
      }}>
        {label}
      </span>
      <div style={{ position: "relative" }}>
        <select defaultValue="" style={{
          ...inputBase, appearance: "none",
          WebkitAppearance: "none",
          paddingRight: "38px", cursor: "pointer",
        }}>
          <option value="" disabled style={{ background: "#1c1518", color: "#fffdfa" }}>Select an option</option>
          {options.map(o => <option key={o} value={o} style={{ background: "#1c1518", color: "#fffdfa" }}>{o}</option>)}
        </select>
        <svg style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.5 4.5l4 4 4-4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </label>
  );
}

/* ── Hair Form ── */
function HairForm() {
  const [hairStage, setHairStage] = useState<number | null>(null);
  return (
    <div className="contact-form-stack" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Full Name"    placeholder="Enter your name"   accent={SAGE} />
        <Field label="Phone Number" placeholder="Enter your number" accent={SAGE} />
      </div>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Email Address" placeholder="Enter your email" accent={SAGE} />
        <SelectField label="Hair Concern" accent={SAGE} options={[
          "Hair Fall / Thinning", "Receding Hairline", "Scalp Issues",
          "Hair Transplant", "Other",
        ]} />
      </div>
      <StagePicker
        label="Select Hair Loss Stage"
        stages={HAIR_STAGE_DATA}
        selected={hairStage}
        onSelect={n => setHairStage(n === -1 ? null : n)}
        accent={SAGE} accentDp={SAGE_DEEP}
        imagePaths={HAIR_STAGE_IMAGES}
        imageAltPrefix="Hair loss"
      />
      <div className="contact-message">
        <Field label="Message" placeholder="Describe your hair concern in detail" as="textarea" accent={SAGE} />
      </div>
    </div>
  );
}

/* ── Skin Form ── */
function SkinForm() {
  const [skinStage, setSkinStage] = useState<number | null>(null);
  return (
    <div className="contact-form-stack" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Full Name"    placeholder="Enter your name"   accent={ROSE} />
        <Field label="Phone Number" placeholder="Enter your number" accent={ROSE} />
      </div>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Email Address" placeholder="Enter your email" accent={ROSE} />
        <SelectField label="Skin Concern" accent={ROSE} options={[
          "Acne / Breakouts", "Pigmentation / Dark Spots", "Dullness / Uneven Tone",
          "Anti-Aging / Fine Lines", "Carbon Laser Treatment", "Other",
        ]} />
      </div>
      <StagePicker
        label="Select Skin Concern Stage"
        stages={SKIN_STAGE_DATA}
        selected={skinStage}
        onSelect={n => setSkinStage(n === -1 ? null : n)}
        accent={ROSE} accentDp={ROSE_DEEP}
        imagePaths={SKIN_STAGE_IMAGES}
        imageAltPrefix="Skin concern"
      />
      <div className="contact-message">
        <Field label="Message" placeholder="Describe your skin concern in detail" as="textarea" accent={ROSE} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════════ */
export default function ContactSection() {
  const [formType, setFormType] = useState<"hair" | "skin">("hair");
  const [btnHover, setBtnHover] = useState(false);

  const isHair   = formType === "hair";
  const accent   = isHair ? SAGE      : ROSE;
  const accentDp = isHair ? SAGE_DEEP : ROSE_DEEP;
  const contactImage = isHair ? HAIR_CONTACT_IMAGE : SKIN_CONTACT_IMAGE;
  const contactImageAlt = isHair ? "Hair treatment consultation" : "Skin treatment consultation";

  return (
    <section id="contact" style={{
      position: "relative", width: "100%",
      background: "#0f0b0d",
      overflow: "hidden",
      padding: "30px 0 40px",
    }}>
      {/* Grain */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: GRAIN, backgroundSize: "240px 240px",
        opacity: 0.11, mixBlendMode: "screen",
      }} />

      {/* Sage glow top-left */}
      <div aria-hidden style={{
        position: "absolute", top: "-100px", left: "-80px",
        width: "580px", height: "440px",
        background: "radial-gradient(ellipse, rgba(94,154,113,0.22) 0%, transparent 65%)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Rose glow bottom-right */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-80px", right: "-60px",
        width: "560px", height: "420px",
        background: "radial-gradient(ellipse, rgba(200,107,155,0.22) 0%, transparent 65%)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Top hairline */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(94,154,113,0.5), rgba(200,107,155,0.4), transparent)",
        zIndex: 3,
      }} />

      <div className="contact-inner" style={{ position: "relative", zIndex: 10, maxWidth: "1220px", margin: "0 auto", padding: "0 44px" }}>

        {/* ── HEADING ── */}
        <div className="contact-heading" style={{ marginBottom: "34px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: ROSE }} />
            <span style={{ fontSize: "var(--fs-eyebrow)", letterSpacing: "0.28em", textTransform: "uppercase", color: ROSE, fontWeight: 700 }}>
              Contact Us
            </span>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: ROSE }} />
          </div>
          <h2 style={{
            fontSize: "var(--fs-title)", fontWeight: 900,
            margin: "0 0 10px 0", letterSpacing: "-0.6px", lineHeight: 1.1,
            background: "linear-gradient(135deg, #fffdfa 30%, #c86b9b 65%, #5e9a71 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Book Your Consultation
          </h2>
          <p style={{ fontSize: "var(--fs-body)", color: "rgba(255,253,250,0.45)", margin: "0 auto", maxWidth: "480px", lineHeight: 1.65 }}>
            Share your concern and our team will help you choose the right skin or hair treatment path.
          </p>
        </div>

        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: "18px", alignItems: "stretch",
          maxWidth: "760px",
          margin: "0 auto",
        }}>

          {/* ── FORM PANEL ── */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px ${isHair ? "rgba(94,154,113,0.07)" : "rgba(200,107,155,0.07)"}`,
            transition: "box-shadow 0.3s",
            position: "relative",
          }}>
            {/* top gradient bar */}
            <div style={{
              height: "3px",
              background: isHair
                ? `linear-gradient(90deg, ${SAGE_DEEP}, ${SAGE}, #8bbf97)`
                : `linear-gradient(90deg, ${ROSE_DEEP}, ${ROSE}, #d9a0be)`,
              transition: "background 0.3s",
            }} />

            {/* Grain overlay */}
            <div aria-hidden style={{
              position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
              backgroundImage: GRAIN, backgroundSize: "200px 200px",
              opacity: 0.07, mixBlendMode: "screen",
            }} />

            {/* ── PILL TAB SWITCHER ── */}
            <div style={{
              position: "relative", zIndex: 1,
              display: "flex", justifyContent: "center",
              padding: "16px 22px 0",
            }}>
              <div style={{
                display: "inline-flex",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                padding: "5px",
                gap: "4px",
              }}>
                {(["hair", "skin"] as const).map(cat => {
                  const active = formType === cat;
                  const col    = cat === "hair" ? SAGE : ROSE;
                  const colDp  = cat === "hair" ? SAGE_DEEP : ROSE_DEEP;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFormType(cat)}
                      style={{
                        padding: "8px 22px", borderRadius: "999px",
                        border: "none", outline: "none", cursor: "pointer",
                        background: active
                          ? `linear-gradient(135deg, ${colDp}, ${col})`
                          : "transparent",
                        color: active ? "#fff" : "rgba(255,253,250,0.42)",
                        fontSize: "var(--fs-eyebrow)", fontWeight: 700,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
                        boxShadow: active
                          ? `0 4px 18px ${cat === "hair" ? "rgba(94,154,113,0.45)" : "rgba(200,107,155,0.45)"}`
                          : "none",
                        display: "flex", alignItems: "center", gap: "7px",
                      }}
                    >
                      <span style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: active ? "rgba(255,255,255,0.7)" : (cat === "hair" ? "rgba(94,154,113,0.5)" : "rgba(200,107,155,0.5)"),
                        display: "inline-block", flexShrink: 0,
                        transition: "background 0.25s",
                      }} />
                      {cat === "hair" ? "Hair Treatment" : "Skin Treatment"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── FORM BODY ── */}
            <div className="contact-form-body" style={{ position: "relative", zIndex: 1, padding: "18px 22px 22px" }}>
              {isHair ? <HairForm /> : <SkinForm />}

              {/* submit row */}
              <div className="contact-submit-row" style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: "12px",
                flexWrap: "wrap", marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}>
                <p style={{ margin: 0, fontSize: "var(--fs-small)", lineHeight: 1.6, color: "rgba(255,253,250,0.3)", maxWidth: "300px" }}>
                  Our team will contact you to confirm a convenient consultation slot.
                </p>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("open-consultation-popup"))}
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  style={{
                    background: btnHover
                      ? `linear-gradient(135deg, ${accentDp}, ${accent})`
                      : "transparent",
                    color: btnHover ? "#ffffff" : accent,
                    border: `2px solid ${btnHover ? accent : "rgba(255,255,255,0.2)"}`,
                    borderRadius: "8px",
                    padding: "10px 22px",
                    fontSize: "var(--fs-eyebrow)", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.22s",
                    boxShadow: btnHover
                      ? `0 8px 24px ${isHair ? "rgba(94,154,113,0.4)" : "rgba(200,107,155,0.4)"}`
                      : "none",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                  }}
                >
                  Send Enquiry
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── IMAGE PANEL ── */}
          <div className="contact-img-panel" style={{ display: "none" }}>
            {/* offset shadow frame */}
            <div style={{
              position: "absolute", top: "14px", left: "14px",
              width: "100%", height: "100%",
              border: "1px solid rgba(94,154,113,0.2)", zIndex: 0,
              borderRadius: "20px",
            }} />

            {/* corner brackets */}
            {([
              { top: 0, left: 0,    points: "28,2 2,2 2,28"   },
              { top: 0, right: 0,   points: "0,2 26,2 26,28"  },
              { bottom: 0, left: 0, points: "28,26 2,26 2,0"  },
              { bottom: 0, right: 0, points: "0,26 26,26 26,0" },
            ] as const).map((corner, i) => (
              <svg key={i} style={{ position: "absolute", ...corner, zIndex: 8 }} width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polyline points={corner.points} stroke={SAGE} strokeWidth="2.8" fill="none" opacity="0.8"/>
              </svg>
            ))}

            <div className="contact-img-card" style={{
              position: "relative", height: "100%", minHeight: "520px",
              overflow: "hidden", background: "#1a1416", zIndex: 1,
              borderRadius: "16px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
            }}>
              <img
                className="contact-img"
                src={contactImage}
                alt={contactImageAlt}
                style={{
                  width: "100%", height: "100%", minHeight: "520px",
                  objectFit: "cover", objectPosition: "center", display: "block",
                  filter: "brightness(0.65) saturate(0.85) contrast(1.05)",
                  transition: "opacity 0.25s ease, filter 0.25s ease",
                }}
                onError={e => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />

              {/* dark overlay gradient */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 30%, rgba(10,7,9,0.6) 65%, rgba(10,7,9,0.95) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, backgroundSize: "200px 200px", opacity: 0.12, mixBlendMode: "screen" }} />

              {/* info cards stacked */}
              <div style={{
                position: "absolute", left: "22px", right: "22px", bottom: "22px",
                display: "flex", flexDirection: "column", gap: "10px", zIndex: 5,
              }}>
                {/* stat pills row */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {[
                    { label: "200+", sub: "Google Reviews" },
                    { label: "5000+", sub: "Happy Patients" },
                    { label: "10+", sub: "Years Experience" },
                  ].map(stat => (
                    <div key={stat.label} style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px", padding: "8px 14px",
                      flex: 1, minWidth: "80px",
                    }}>
                      <p style={{ margin: 0, fontSize: "var(--fs-subtitle)", fontWeight: 900, color: "#fffdfa", lineHeight: 1 }}>{stat.label}</p>
                      <p style={{ margin: "3px 0 0 0", fontSize: "9.5px", fontWeight: 600, color: "rgba(255,253,250,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{stat.sub}</p>
                    </div>
                  ))}
                </div>

                {/* caption card */}
                <div style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderLeft: `3px solid ${SAGE}`,
                  borderRadius: "12px",
                  padding: "16px 18px",
                }}>
                  <p style={{ margin: "0 0 5px 0", fontSize: "var(--fs-body)", fontWeight: 800, color: "#fffdfa", lineHeight: 1.2 }}>
                    Personalised guidance from consultation to care plan
                  </p>
                  <p style={{ margin: 0, fontSize: "var(--fs-small)", lineHeight: 1.6, color: "rgba(255,253,250,0.5)" }}>
                    Expert recommendations, follow-up support, and visible results — all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
