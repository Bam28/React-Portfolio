export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="send" />
      </form>
    </section>
  )
}