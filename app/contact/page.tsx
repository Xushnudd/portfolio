import ContactBanner from "./_components/ContactBanner";
import RoutedEmail from "./_components/RoutedEmail";
import SocketTelegram from "./_components/SocketTelegram";

export default function Contact() {
  return (
    <main
      className="
        w-full
        flex flex-col gap-10
      ">
      <ContactBanner />
      <div
        className="
          lg:w-1/2 w-full
          flex flex-col gap-5
        ">
        <SocketTelegram />
        <RoutedEmail />
      </div>
    </main>
  )
}