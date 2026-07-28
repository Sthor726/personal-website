import React from "react";
import PerimeterPageLayout from "./PerimeterPageLayout";

// NOTE: Fill in LAST_UPDATED and CONTACT_EMAIL with your real values.
const LAST_UPDATED = "July 2026";
const CONTACT_EMAIL = "sthor726@gmail.com";

export default function PrivacyPolicy() {
  return (
    <PerimeterPageLayout title="Privacy Policy">
      <p>
        Perimeter is a daily word puzzle game. This policy explains what
        information the app handles and what it doesn't.
      </p>

      <div>
        <h2 className="font-bold text-white mb-1">What we store locally</h2>
        <p>
          Your progress, streak, and settings are saved directly on your
          device using PlayerPrefs. This data never leaves your device.
        </p>
      </div>

      <div>
  <h2 className="font-bold text-white mb-1">Daily average times</h2>
  <p>
    To show a daily average solve time, Perimeter sends your solve time to
    our server after you finish a puzzle. We don't store individual times
    or tie them to you or your device. We only keep two running numbers
    per puzzle: the total number of plays that day, and the combined total
    of all solve times. Dividing one by the other gives the average. There's
    no way to recover any individual score from these two numbers.
  </p>
</div>

      <div>
        <h2 className="font-bold text-white mb-1">What Perimeter does not do</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>No analytics or tracking SDKs</li>
          <li>No ads or ad networks</li>
          <li>No Game Center integration</li>
          <li>No in-app purchases</li>
          <li>No collection of device context (model, OS version, IDFA, etc.)</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-white mb-1">Notifications</h2>
        <p>
          If you enable daily reminders, they're scheduled locally on your
          device. We don't receive any information when a notification is
          sent or opened.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-white mb-1">Children's privacy</h2>
        <p>
          Perimeter doesn't knowingly collect personal information from
          anyone, including children under 13.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-white mb-1">Contact</h2>
        <p>
          Questions about this policy? Reach out at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-white/40 hover:decoration-white"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
      <div className="pb-24"></div>
    </PerimeterPageLayout>
  );
}
