from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(required=False, label="", widget=forms.TextInput(
        attrs={'placeholder': 'Name (optional)'}))
    email = forms.EmailField(required=True, label="", widget=forms.TextInput(
        attrs={'placeholder': 'Email address (required)'}))
    text = forms.CharField(required=True, label="", widget=forms.Textarea(
        attrs={'placeholder': 'Text...'}))
