from django.shortcuts import render
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template import Context
from django.template.loader import get_template

from website.forms import ContactForm


def index(request):
    return render(request, 'index.html')


def contact(request):
    form_class = ContactForm

    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            text = request.POST.get('text', '')

            template = get_template('contact_template.txt')
            context = Context({
                'name': name,
                'email': email,
                'text': text, })
            content = template.render(context)

            email = EmailMessage(
                'New contact form submission',
                content,
                from_email='admin@planbot.co',
                to=['adam@planbot.co', 'simon@planbot.co'],
                headers={'Reply-To': email},
            )
            email.send(fail_silently=False)
            return redirect('contact')

    return render(request, 'contact.html', {
                  'form': form_class, })


