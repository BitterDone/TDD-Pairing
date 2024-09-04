FROM amazoncorretto:21
WORKDIR /app
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY /build/libs/TDDPairing-0.0.1-SNAPSHOT.jar tdd-backend.jar
EXPOSE 8080
ENTRYPOINT exec java $JAVA_OPTS -jar tdd-backend.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar tdd-backend.jar

# docker build -f Dockerfile -t tdd-pairing/tdd-backend:0.0.1 .
# docker run -it --rm -p 8080:8080 tdd-pairing/tdd-backend:0.0.1
# docker run -d --rm -p 8080:8080 tdd-pairing/tdd-backend:0.0.1
