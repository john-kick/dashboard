export default function GoogleCalendar(): React.JSX.Element {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?height=300&wkst=2&ctz=Europe%2FBerlin&mode=AGENDA&showPrint=0&src=YW5kcmUubG9ld2VuMDEwNEBnbWFpbC5jb20&src=ZGUuZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043"
      style={{ border: "solid 1px #777" }}
      width="300"
      height="600"
    ></iframe>
  );
}
