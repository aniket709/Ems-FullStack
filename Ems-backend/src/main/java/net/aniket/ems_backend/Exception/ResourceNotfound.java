package net.aniket.ems_backend.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotfound extends RuntimeException {

    public ResourceNotfound(String message){

        super(message);

    }
    
}
