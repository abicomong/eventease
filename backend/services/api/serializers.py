from rest_framework import serializers
from services.models import Package, Service, Review, Reports

class PackageSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Package
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    service_packages = PackageSerializer(many=True)

    class Meta:
        model = Service
        fields = ['service_name', 'service_rating', 'service_type', 'service_address', 'service_image', 'service_packages']

    def create(self, validated_data):
        packages_data = validated_data.pop('service_packages')
        service = Service.objects.create(**validated_data)
        for package_data in packages_data:
            Package.objects.create(service=service, **package_data)
        return service
    
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['review_id', 'review_service','review_datetime', 'review_rating', 'review_body']

        def create(self, validated_data):
            review_service = validated_data.pop('review_service')
            review = Review.objects.create(review_service=review_service, **validated_data)
            return review

class ReportsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reports
        fields = ['report_id','reported_service', 'report_datetime', 'report_title', 'report_body']

        def create(self, validated_data):
            reported_service = validated_data.pop('reported_service')
            report = Report.objects.create(reported_service=reported_service, **validated_data)
            return report

