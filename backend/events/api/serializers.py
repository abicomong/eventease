from rest_framework import serializers
from events.models import Event, ChosenService
from services.api.serializers import ServiceSerializer, PackageSerializer

class ChosenServiceSerializer(serializers.ModelSerializer):
    service = ServiceSerializer()
    package = PackageSerializer()

    class Meta:
        model = ChosenService
        fields = ('service', 'package',)

class EventSerializer(serializers.ModelSerializer):
    services = ChosenServiceSerializer(many=True)

    class Meta:
        model = Event
        fields = ['id','event_name', 'event_type','event_start_date', 'event_end_date', 'budget', 'pax','services']

    def create(self, validated_data):
        services_data = validated_data.pop('services')
        event = Event.objects.create(**validated_data)
        for service_data in services_data:
            service = Service.objects.create(**service_data)
            event.services.add(service)
        return event

class EventGETSerializer(EventSerializer):
    services = ChosenServiceSerializer(many=True,)

    class Meta(EventSerializer.Meta):
        fields = EventSerializer.Meta.fields 
