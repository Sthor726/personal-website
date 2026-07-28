import React from "react";
import PerimeterPageLayout from "./PerimeterPageLayout";

// NOTE: Fill in CONTACT_EMAIL with your real support address.
const CONTACT_EMAIL = "sthor726@gmail.com";

function FaqItem({ q, children }) {
  return (
    <div>
      <h2 className="font-bold text-white mb-1">{q}</h2>
      <p>{children}</p>
    </div>
  );
}

export default function Support() {
  return (
    <PerimeterPageLayout title="Support">
      <p>
        Running into an issue with Perimeter? Check the common issues below,
        or email me directly and I'll get back to you.
      </p>

      <FaqItem q="A new puzzle isn't showing up">
        Perimeter's daily puzzle refreshes at midnight in your local time
        zone. If it looks stuck, try closing and reopening the app. If that
        doesn't fix it, let me know your device and iOS version below.
      </FaqItem>

      <FaqItem q="I lost my streak">
        Streaks are stored on your device, so restoring from a backup,
        switching devices, or reinstalling the app can reset it. I don't
        have a way to recover streak data remotely since it isn't stored
        anywhere but your device.
      </FaqItem>

      <FaqItem q="The app is crashing or freezing">
        Try force-closing and reopening the app first. If it keeps
        happening, email me your device model and iOS version so I can
        track it down.
      </FaqItem>

      <FaqItem q="I'm not getting my daily reminder notification">
        Check that notifications are enabled for Perimeter in your device's
        Settings app, and that reminders are enabled in app's in-game settings.
        If it's still not showing up, let me know.
      </FaqItem>

      <FaqItem q="I found a bug or have a suggestion">
        I'd love to hear it. Head over to my{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfarhOl8eNsAuyQpfgQU_N2CxfsTLz267NsBa-KBihRCAJrzg/viewform?usp=sharing&ouid=104069394797579686921"
          className="underline decoration-white/40 hover:decoration-white"
        >
          feedback form
        </a>{" "}
        and include a quick description, and I'll look into it!
      </FaqItem>

      <div>
        <h2 className="font-bold text-white mb-1">Still need help?</h2>
        <p>
          Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-white/40 hover:decoration-white"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          and I'll respond as soon as I can.
        </p>
      </div>
      <div className="pb-24"></div>
    </PerimeterPageLayout>
  );
}
