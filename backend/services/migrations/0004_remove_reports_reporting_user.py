# Generated by Django 5.0.2 on 2024-04-23 07:48

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("services", "0003_alter_review_review_body_reports"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="reports",
            name="reporting_user",
        ),
    ]
