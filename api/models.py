from sqlalchemy import Column, Integer, String
from rest_framework import serializers
from users.models import NewUser
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny

class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, user_name, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, user_name, first_name, password, **other_fields)

    def create_user(self, email, user_name, first_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))
        
        if not password:
            raise ValueError(_('You must provide a valid password'))
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    user_type =  models.CharField(max_length=25, default="s_user"),
    about = models.TextField(_('about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name']

    def __str__(self):
        return self.user_name



class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class Post(models.Model):


    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() 


    options = (
        ('en cours', 'En cours'),
        ('exception', 'Exception'),
        ('livré', 'Livré'),
    )

    optionsc = (
        ('colis', 'Colis'),
        ('marchandises', 'Marchandises'),
    )

    category = models.CharField(
        max_length=30, choices=optionsc, default='colis')
    
    nom =models.CharField(max_length=255)
    societe =models.CharField(max_length=255)
    adresse1 =models.CharField(max_length=255)
    adresse2 =models.CharField(max_length=255)
    codep =models.CharField(max_length=255)
    pays =models.CharField(max_length=255)
    ville =models.CharField(max_length=255)
    codet =models.CharField(max_length=255)
    tele =models.CharField(max_length=255)
    fax =models.CharField(max_length=255)
    email =models.CharField(max_length=255)
    noma =models.CharField(max_length=255)
    societea =models.CharField(max_length=255)
    adresse1a =models.CharField(max_length=255)
    adresse2a =models.CharField(max_length=255)
    codepa =models.CharField(max_length=255)
    paysa =models.CharField(max_length=255)
    villea =models.CharField(max_length=255)
    codeta =models.CharField(max_length=255)
    telea =models.CharField(max_length=255)
    faxa =models.CharField(max_length=255)
    emaila =models.CharField(max_length=255)
    nbcolis =models.CharField(max_length=30)
    poids =models.CharField(max_length=30)
    largeur =models.CharField(max_length=30)
    longueur =models.CharField(max_length=30)
    hauteur =models.CharField(max_length=30)
    valeur =models.CharField(max_length=30)
    descriptif =models.CharField(max_length=255)
    instruction =models.CharField(max_length=255)
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(max_length=10, choices=options, default='en cours')
    datereception = models.CharField(max_length=30, default='Pas encore livré')
    heurerecption = models.CharField(max_length=30, default='Pas encore livré')
    recupar = models.CharField(max_length=30, default='Pas encore livré')
    objects = models.Manager()
    postobjects = PostObjects()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.nom

class CustomUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = NewUser
        fields = ('email', 'user_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class BlogConfig(AppConfig):
    name = 'blog'

class BlogApiConfig(AppConfig):
    name = 'blog_api'

class UsersConfig(AppConfig):
    name = 'users'

class UsersConfig(AppConfig):
    name = 'users'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('category','id','nom', 'societe','adresse1','adresse2','noma', 'societea','adresse1a','adresse2a',
        'codep','pays','ville','codet','tele','fax','email','codepa','paysa','villea','codeta','telea','faxa'
        ,'emaila' ,'author','published','status','datereception','heurerecption','recupar','nbcolis','poids','largeur', 'longueur','hauteur', 'valeur', 'descriptif','instruction')


class UserRegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ('email', 'user_name', 'first_name')
        extra_kwargs = {'password': {'write_only': True}}

class PostList(generics.ListAPIView):

    serializer_class = PostSerializer
    queryset = Post.objects.all()

class PostDetail(generics.RetrieveAPIView):

    serializer_class = PostSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, nom=item)

class PostListDetailfilter(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]

    search_fields = ['^nom','^adresse1','^noma','^adresse1a','^published','^id']


class CreatePost(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class AdminPostDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class EditPost(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class DeletePost(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'user_name', 'first_name',)
    list_filter = ('email', 'user_name', 'first_name', 'is_active', 'is_staff')
    ordering = ('-start_date',)
    list_display = ('email','id', 'user_name', 'first_name',
                    'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'user_name', 'first_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )

