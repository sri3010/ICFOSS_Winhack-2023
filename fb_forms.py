from firebase import firebase

firebase = firebase.FirebaseApplication('https://kerala-tourism-baccb-default-rtdb.asia-southeast1.firebasedatabase.app/')

ticket_num = int(input("Enter ticket number (1-10): "))
data = {
    'Name': input("Enter name: "),
    'Email': input("Enter email: "),
    'Ticket Number': ticket_num,
    'Status': 'Booked'
}
result = firebase.post('https://kerala-tourism-baccb-default-rtdb.asia-southeast1.firebasedatabase.app/:',data)
print(result)



